import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as API from '../../services/api';

const Book = ({
    book,
    auth,
    history,
}) => {

    const handleCancelBooking = () => {
        console.log(auth.loginToken);
        axios.delete(API.ENDPOINT + `/booking?id=${book.orderid}`, {
            headers: {
              'token': auth.loginToken
            },
          }).then(response => {
            console.log("cancel book");
            console.log(response);
          });  
    }

    const handleModifyBooking = () => {
        console.log(auth.loginToken);
        axios.delete(API.ENDPOINT + `/booking?id=${book.orderid}`, {
                headers: {
                'token': auth.loginToken
                },
            }).then(response => {
                console.log("cancel book");
                console.log(response);
                history.push(`/product-details/${book.carid}`);
           }); 
    }

    const getDateStringServ = timestamp => {

        const plus0 = num => `0${num.toString()}`.slice(-2)
      
        const d = new Date(timestamp)
      
        const year = d.getFullYear()
        const monthTmp = d.getMonth() + 1
        const month = plus0(monthTmp)
        const date = plus0(d.getDate())
      
        return `${year}-${month}-${date}`
      }

      const getTimeStringServ = timestamp => {

        const plus0 = num => `0${num.toString()}`.slice(-2)
      
        const d = new Date(timestamp)
      
        const hour = d.getHours()
        const prev = hour < 12 ? 'AM' : 'PM';
        const last = (hour + 1) < 12 ? 'AM' : 'PM';
      
        return `${hour}:00${prev} - ${(hour + 1)}:00${last}`
      }

    return (
        <div class="vehicle-info-row">
            <div class="image-holder">
                <img src={book.carimg} alt="image-description"/>
            </div>
            <div class="description">
                <ul class="info-list">
                    <li>
                        <strong class="title">Date</strong>
                        <span class="text time">{getDateStringServ(book.bookdate)}</span>
                    </li>
                    <li>
                        <strong class="title">Time</strong>
                        <span class="text time">{getTimeStringServ(book.bookdate)}</span>
                    </li>
                    <li>
                        <strong class="title">Vehicle</strong>
                        <span class="text">{book.carname}</span>
                    </li>
                    <li>
                        <strong class="title">Location</strong>
                        <span class="text">5-1170 Burnhamthorpe Road, Mississauga, Ontario. L5C4E6</span>
                    </li>
                </ul>
                <ul class="btns-list">
                    <li><a onClick={handleModifyBooking} class="modify-btn book-drive-opener">Modify</a></li>
                    <li><a onClick={handleCancelBooking} class="cancel-btn">Cancel</a></li>
                </ul>
            </div>
        </div>
        /* <div className="row my-3 mx-0 test">
            <div className="col-lg-3 col-md-6" style={p8}>
                <img src={book.carimg} alt="car" />
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="my-4">
                    <span>Date</span>
                    <p style={p9}>{getDateStringServ(book.bookdate)}</p>
                </div>
                <div className="my-4" style={pb}>
                    <span>Vehicle</span>
                    <p style={pa}>{book.carname}</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="my-4">
                    <span>Time</span>
                    <p style={p9}>{getTimeStringServ(book.bookdate)}</p>
                </div>
                <div className="my-4" style={pb}>
                    <span>Location</span>
                    <p style={pa}>5-1170 Burnhamthorpe Road, Mississauga, Ontario. L5C4E6</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center" style={pc}>
                <button className="buy-trade-btn" style={pe} onClick={handleCancelBooking}>Cancel</button>
            </div>
        </div> */
    )
}

export default connect(
	state => ({
        auth: state.authReducer,
	}), 
	null,	
)(withRouter(Book));
