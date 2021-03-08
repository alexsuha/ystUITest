import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from "axios";
import { fastRegisterLocalUser, queryLocalUser } from '../../store/actions/auth';
import * as API from '../../services/api';

const BookCheck = ({
    fastRegisterLocalUser,
    queryLocalUser,
    auth,
    product,
}) => {

    const [bookday, setBookday] = useState(null);
    const [booktime, setBooktime] = useState(null);

    const commonMonths = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const commonDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const { bookdates, uuid, imgurl, name, } = product;

    const getBookDate = () => {
        return bookday + booktime;
    }

    const GetDates = (startDate, daysToAdd) => {
        var _dates = [];
    
        for (var i = 0; i <= daysToAdd; i++) {
            var currentDate = new Date();
            currentDate.setDate(startDate.getDate() + i);
            _dates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth())/* + " " + currentDate.getFullYear()*/);
        }
    
        return _dates;
    }

    const GetDateStamps = (startDate, daysToAdd) => {
        var _dates = [];
    
        for (var i = 0; i <= daysToAdd; i++) {
            var currentDate = new Date();
            currentDate.setDate(startDate.getDate() + i);
            _dates.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).getTime());
        }
    
        return _dates;
    }
    
    const MonthAsString = (monthIndex) => {
        return commonMonths[monthIndex];
    }
    
    const DayAsString = (dayIndex) => {
        return commonDays[dayIndex];
    }
    
    let startDate = new Date();
    let aryDates = GetDates(startDate, 7);
    let curDatStamps = GetDateStamps(startDate, 7);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatpassword] = useState("");

    const createNewBooking = async (_carid,_carname, _carimg, token, useremail) => {

        const bookBody = {
          userid: useremail,
          carid: _carid,
          bookdate: getBookDate(),
          carname: _carname,
          carimg: _carimg,
        };
        
        const response = await axios.post(API.ENDPOINT + "/booking", bookBody, {
          headers: {
            'token': token
          },
        });
  
        console.log("-------------------- get response from new book");
        console.log(response);
    }

    const handleFormSubmit = async ev => {
        if (bookdates != null) 
        {
            const dates = JSON.parse(bookdates);
            if(dates.includes(getBookDate()))
            {
                alert("This time has been booked, please change another time.");
                return;
            } //Web 2.10 12:00
        }

        if (phonenumber === "")
        {
          alert("please fill the phone number.");
          return;
        }
    
        if (auth.loginToken === null)
        {
    
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (firstname === "" || lastname === "" || email === "")
            {
              alert("please fill the sign up detail information.");
              return;
            }
    
            if (!re.test(email) ) {
                alert("invalid email");
                return;        
            }  
        
            if (password !== repeatpassword)
            {
              alert("password should be matched with repeatpassword and not be a null string.");
              return;
            }
    
            const localUser = {
              firstname: firstname,
              lastname: lastname,
              email: email,
              phonenumber: phonenumber,
              password: password,
            }
            console.log("try to fast Registerlocal user");
            fastRegisterLocalUser(localUser, (token) => { 
              queryLocalUser(localUser, () =>{
                onHandleFormSubmit(token, email); 
              });
              
            });
        }
        else {
          console.log("try login in book");
          console.log(auth.loginToken);
          console.log(getCurrentUserProfile().email);
          await onHandleFormSubmit(auth.loginToken, getCurrentUserProfile().email);
        }
      }
    
      function getCurrentUserProfile() {
        let user = auth.userProfile;
        return user;
      }
    
      const onHandleFormSubmit = async (token, useremail) => {
             createNewBooking(uuid, name, imgurl, token, useremail);
             setIsbooked(true);
      };

      function getCurrentUser() {
        let user = null;
        user = auth.loginToken ? 'local' : null;
        return user;
    }

    const pickDateTable = {
        "date1": curDatStamps[0],
        "date2": curDatStamps[1],
        "date3": curDatStamps[2],
        "date4": curDatStamps[3],
        "date5": curDatStamps[4],
        "date6": curDatStamps[5],
        "date7": curDatStamps[6],
    }

    const pickTimeTable = {
        "time1": 10*60*60*1000,
        "time2": 12*60*60*1000,
        "time3": 14*60*60*1000,
        "time4": 16*60*60*1000,
    }

    useEffect(() => {	 
        $(".date-div").click(function(e){
            // $(".date-div").css("border-color", "white");
            // $(".date-div").css("color", "black");
            // $(".date-div").css("font-weight", "400");
            // $(this).css("border-color", "#454F5B");
            // $(this).css("color", "#182861");
            // $(this).css("font-weight", "600");
            setBookday(pickDateTable[e.currentTarget.id]);
        });
        $(".time-div").click(function(e){
            // $(".time-div").css("border-color", "white");
            // $(".time-div").css("color", "black");
            // $(".time-div").css("font-weight", "400");
            // $(this).css("border-color", "#454F5B");
            // $(this).css("color", "#182861");
            // $(this).css("font-weight", "600");
            console.log(e.currentTarget.id);    
            setBooktime(pickTimeTable[e.currentTarget.id]);   
        });
    }, [])

    const [isbooked,setIsbooked] = useState(false);

    return (
        <div class="popup-holder">
              <div id="requesttest" class="lightbox-demo">
              {isbooked ? (
              <div class="signup-modal">
                <div class="wrap">
                  <div class="heading-area">
                    <div class="text-area">
                      <strong class="title">Test Drive Booked </strong>
                      <p>You have booked the {product.name}. We will contact you within the next 1-2 business days, feel free to contact carnex at <a href="mailto:bookings@carnex.com" class="email">bookings@carnex.com</a> or at <a href="tel:9052605667">(905) 260-5667</a> Monday-Saturday 8 a.m. to 8 p.m.</p>                     
                    </div>
                </div>
                <div className="message-lightbox" style={{margin: "0 auto"}}>
                    <span class="icon-holder" style={{width: "100%", alignItems:"center"}}>
                        <i class="icon-carnex_website_icons-40"></i>
                      </span>
                </div>
                <span class="btn-wrap">
                    <a class="btn-primary" data-fancybox-close class="btn-primary">Close</a>
                </span>
                </div>
              </div>) : (<div class="signup-modal">
                    <div class="wrap">
                      <div class="heading-area">
                        <strong class="title">Please Sign Up and Drive</strong>
                        <p>We provide contactless test drive options where you can pick up the keys and go out with the car for a day to make sure it is the next car you want.</p>
                      </div>
                      <div class="tab-content">
                        <div class="steps-form-wrap">
                                      {!getCurrentUser() ? (
                                          <div class="steps-form">
                                              <strong class="step-title">Step 1 of 2</strong>
                                              <div class="form-group">
                                                <div class="field-holder">
                                                  <label for="name">First Name</label>
                                                  <input type="text" class="form-control" placeholder="First Name" value={firstname} onChange={(ev) => {setFirstname(ev.target.value)}}/>
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                <div class="field-holder">
                                                  <label for="name">Last Name</label>
                                                  <input type="text" class="form-control" placeholder="Last Name" value={lastname} onChange={(ev) => {setLastname(ev.target.value)}}/>
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                <div class="field-holder">
                                                  <label for="name">Phone number</label>
                                                  <input type="text" class="form-control" placeholder="Phone Number" value={phonenumber} onChange={(ev) => {setPhonenumber(ev.target.value)}}/>
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                <div class="field-holder">
                                                  <label for="name">Email</label>
                                                  <input type="email" class="form-control" placeholder="E-mail" value={email} onChange={(ev) => {setEmail(ev.target.value)}}/>
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                <div class="field-holder">
                                                  <label for="name">Password</label>
                                                  <input type="password" class="form-control" placeholder="Password" value={password} onChange={(ev) => {setPassword(ev.target.value)}}/>
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                <div class="field-holder">
                                                  <label for="name">Repeat Password</label>
                                                  <input type="password" class="form-control" placeholder="RepeatPassword" value={repeatpassword} onChange={(ev) => {setRepeatpassword(ev.target.value)}}/>
                                                </div>
                                              </div>
                                            </div>
                                          ) : (
                                            <div class="steps-form">
                                              <strong class="step-title">Step 1 of 2</strong>
                                              <div class="form-group">
                                                <div class="field-holder">
                                                  <label for="name">Phone number</label>
                                                  <input type="text" class="form-control" placeholder="Phone Number" value={phonenumber} onChange={(ev) => {setPhonenumber(ev.target.value)}}/>
                                                </div>
                                              </div>
                                            </div>)}
                          <div class="steps-form vehicle-step">
                            <strong class="step-title">Step 2 of 2</strong>
                            <strong class="heading">Vehicle</strong>
                            <span class="text">{product.name}<span>{product.make}</span></span>
                            <div class="select-option-area">
                              <strong class="option-title">Please select date</strong>
                              <ul class="radio-list">
                                <li>
                                  <label>
                                    <input className="date-div" id="date1" type="radio" name="date"/>
                                    <span class="time">{aryDates[0]}</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input className="date-div" id="date2" type="radio" name="date"/>
                                    <span class="time">{aryDates[1]}</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input className="date-div" id="date3" type="radio" name="date"/>
                                    <span class="time">{aryDates[2]}</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input className="date-div" id="date4" type="radio" name="date"/>
                                    <span class="time">{aryDates[3]}</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input className="date-div" id="date5" type="radio" name="date"/>
                                    <span class="time">{aryDates[4]}</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input className="date-div" id="date6" type="radio" name="date"/>
                                    <span class="time">{aryDates[5]}</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input className="date-div" id="date7" type="radio" name="date"/>
                                    <span class="time">{aryDates[6]}</span>
                                  </label>
                                </li>
                              </ul>
                            </div>
                            <div class="select-option-area">
                              <strong class="option-title">Please select a time</strong>
                              <ul class="radio-list time">
                                <li style={{width:"150px"}}>
                                  <label >
                                    <input className="time-div" id="time1" type="radio" name="time"/>
                                    <span class="time">10:00 a.m.</span>
                                  </label>
                                </li>
                                <li style={{width:"150px"}}>
                                  <label>
                                    <input className="time-div" id="time2" type="radio" name="time"/>
                                    <span class="time">12:00 p.m.</span>
                                  </label>
                                </li>
                                <li style={{width:"150px"}}>
                                  <label>
                                    <input className="time-div" id="time3" type="radio" name="time"/>
                                    <span class="time">2:00 a.m.</span>
                                  </label>
                                </li>
                                <li style={{width:"150px"}}>
                                  <label>
                                    <input className="time-div" id="time4" type="radio" name="time"/>
                                    <span class="time">4:00 a.m.</span>
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="agree-terms">
                        <div class="checkbox-area">
                          <label>
                            <input type="checkbox"/>
                            <span class="fake-checkbox"><i class="icon"></i>I am willing to modiify my time if the time I requested is not available. I am aware I can notify carnex at <a href="mailto:bookings@carnex.com">bookings@carnex.com</a> or at <a href="tel:9052605667">905-260-5667</a>.</span>
                          </label>
                        </div>
                      </div>
                      <span class="btn-wrap">
                          <button class="btn-primary" onClick={handleFormSubmit}>Request Test Drive</button>
                      </span>
                    </div>
                  </div>)}
				<a data-fancybox-close class="close"><i class="icon-close"></i></a>
			</div>
		</div>
    )
}

export default connect(
    state => ({
      auth: state.authReducer,
    }),
    { fastRegisterLocalUser, queryLocalUser },
  )(withRouter(BookCheck));
