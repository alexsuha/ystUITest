import React, { useState } from 'react';

import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { config } from '../../services/config';
import {
    setGoogleUser,
    registerLocalUser,
    loginLocalUser,
    redirectAfterLogin,
    queryLocalUser2,
    fastRegisterLocalUser,
} from '../../store/actions/auth';

const LoginTab = (
   props,
) => {

    const afterLoginValid = () => {
        console.log("afterloginvalid")
        props.redirectAfterLogin(() => props.history.goBack());
    }

    const responseGoogleSuccess = response => {
        console.log(response);
        props.setGoogleUser(response.profileObj, afterLoginValid);
    };

    const responseGoogleFail = response => {
        alert(`login fail: ${response.error}`)
    // if (formik.current) {
    //   formik.current.resetForm();
    // }
    };

    const [isRegister, setIsRegister] = useState(false);
    const [isMain, setIsmain] = useState(true);
    const [isLogin, setIslogin] = useState(false);

    const handleOpenRegister = () => {
        setIsRegister(true);
        setIsmain(false);
    }

    const handleOpenLogin = () => {
        setIslogin(true);
        setIsmain(false);
    }

    const HandleLogin = () => {
        let user = {
            email: email,
            password: password,
        }

        const callback = () => {
            props.queryLocalUser2(user, () => { 
              console.log("callback start.");
              props.redirectAfterLogin(() => props.history.push('/profile'));
            });                
          };

        props.loginLocalUser(user, callback);  
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEMInput = (e) => {
        setEmail(e.target.value);
    }

    const handlePWInput = (e) => {
        setPassword(e.target.value);
    }

    const handleRevertRegister = () => {
        setIsRegister(false);
        setIsmain(true);
    }

    const handleRevertLogin = () => {
        setIslogin(false);
        setIsmain(true);
    }

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    const [repeatpassword, setRepeatpassword] = useState("");

    const handleFormSubmit = async ev => {
        if (phonenumber === "")
        {
          alert("please fill the phone number.");
          return;
        }
    
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
        props.fastRegisterLocalUser(localUser, (token) => { 
            props.queryLocalUser2(localUser, () =>{
                props.redirectAfterLogin(() => props.history.push('/profile'));
            });
        });
      }

    return (
        <div class="popup-holder">
			<div id="logintab" class="lightbox-demo login-lightbox-section">
                <a data-fancybox-close class="close"><i class="icon-close"></i></a>
                {isMain && (<div>
                    <strong class="title">Login</strong>
                    <div class="wrap">
                        <a onClick={handleOpenRegister} class="btn-primary-outline">Sign Up via Email</a>
                        <span class="or">or</span>
                        <GoogleLogin
                            clientId={config.clientId}
                            render={renderProps => (
                            <a className="btn-primary"
                                id="googleButton"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                Google +
                            </a>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogleSuccess}
                            onFailure={responseGoogleFail}
                            cookiePolicy={'single_host_origin'}
                        />
                        <span class="bottom-text">Already a carnex member? <a onClick={handleOpenLogin}>Log In Here</a>.</span>
                    </div>
                </div>)}
                {isLogin && (<div>
                    <strong class="title">Login via email</strong>
                        <div class="wrap">
                            <div class="steps-form">
                                <div class="form-group">
                                <div class="field-holder">
                                    <label for="email20">E-mail</label>
                                    <input type="email" id="email20" class="form-control" placeholder="" value={email} onChange={handleEMInput}/>
                                </div>
                                </div>
                                <div class="form-group">
                                <div class="field-holder password">
                                    <label for="password20">Password</label>
                                    <input type="password" id="password20" class="form-control" placeholder="" value={password} onChange={handlePWInput}/>
                                </div>
                                </div>
                                <a onClick={HandleLogin} class="btn-primary">Login</a>
                                <span class="bottom-text"> <a onClick={handleRevertLogin}>sign up</a> for a new account</span>
                            </div>
                    </div>
                </div>)}
                {isRegister && (<div>
                    <strong class="title">Sign Up via Email</strong>
                        <div class="wrap">
                            <div class="steps-form">
                                <div class="form-group">
                                    <div class="field-holder">
                                        <label for="name21">First Name</label>
                                        <input type="text" id="name21" class="form-control" placeholder="" value={firstname} onChange={(ev) => {setFirstname(ev.target.value)}}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="field-holder">
                                        <label for="name22">Last Name</label>
                                        <input type="text" id="name22" class="form-control" placeholder="" value={lastname} onChange={(ev) => {setLastname(ev.target.value)}}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="field-holder">
                                        <label for="tel21">Phone Number</label>
                                        <input type="tel" id="tel21" class="form-control" placeholder="" value={phonenumber} onChange={(ev) => {setPhonenumber(ev.target.value)}}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="field-holder">
                                        <label for="email22">E-mail</label>
                                        <input type="email" id="email22" class="form-control" placeholder="" value={email} onChange={(ev) => {setEmail(ev.target.value)}}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="field-holder">
                                        <label for="password22">Password</label>
                                        <input type="password" id="password22" class="form-control" placeholder="" value={password} onChange={(ev) => {setPassword(ev.target.value)}}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="field-holder">
                                        <label for="password22">Repeat Password</label>
                                        <input type="password" id="password22" class="form-control" placeholder="" value={repeatpassword} onChange={(ev) => {setRepeatpassword(ev.target.value)}}/>
                                    </div>
                                </div>
                            </div>
                            <a class="btn-primary" onClick={handleFormSubmit}>Sign Up</a>
                            <span class="bottom-text"> Already a carnex member? <a onClick={handleRevertRegister}>Log In Here</a>.</span>
                        </div>
                </div>)}
			</div>)
		</div>
    )
}

export default connect(
    state => ({}),
    {
      queryLocalUser2,
      setGoogleUser,
      registerLocalUser,
      loginLocalUser,
      redirectAfterLogin,
      fastRegisterLocalUser,
    },
  )(withRouter(LoginTab));
