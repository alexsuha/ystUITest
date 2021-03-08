import * as Types from '../types';
import { showToast } from './toast';
import _ from 'lodash';

import axios from 'axios';
import qs from 'qs';
import * as API from '../../services/api';

export const setGoogleUser = (googleUser, callback) => dispatch => {
    console.log(googleUser);
    const loginBody = {
      accesstoken: googleUser.googleId,
      address: "string",
      username: googleUser.email,
      email: googleUser.email,
      firstname: googleUser.givenName,
      lastname: googleUser.familyName,
      password: googleUser.googleId,
      imgurl: googleUser.imageUrl, //TODO: add image url.
      phone: "string",
      type: "google",
    }

    onQueryLocalUser(loginBody, () => {
      onLoginUser(loginBody, loginBody.accesstoken, "google", callback, dispatch);
    }, () => {
      console.log("register google account");

      const registerBody = {
        accesstoken: googleUser.googleId,
        email: googleUser.email,
        password: googleUser.googleId,
        type: "google",
        role: "client",
        address: "",
        firstname: googleUser.givenName,
        lastname: googleUser.familyName,
        imgurl: googleUser.imageUrl,
        phone: "",
      }
    
      axios.post(API.ENDPOINT + "/user/register", registerBody).then(response => {
        console.log("onRegister...");
        if (response.status === 200) {
          console.log(response);
          onRegisterLocalUser(loginBody, () => {
            onQueryLocalUser(loginBody, callback, null, dispatch);
          }, dispatch);
        }
        else 
          console.log(response);
      });
    }, dispatch);
};

const onLoginUser = (user, accesstoken, type, callback, dispatch) => {
  const loginBody = {
    accesstoken: accesstoken,
    email: user.email,
    password: user.password,
    type: type,
  }
  console.log("onLoginUser");
  console.log(user);
  console.log(loginBody);

  axios.post(API.ENDPOINT + "/user/login", loginBody).then(response => {
    console.log("login");
    console.log(response);
    if (response.data.code === 1) {
      console.log("code login 1");
      console.log(response.data.msg);
      console.log(response.data.data); 
      dispatch({
        type: Types.LOGIN_GET_TOKEN,
        payload: response.data.data
      });
      console.log(callback);
      if(callback) callback();
    }
    else {
      console.log("where is alert");
      alert(response.data.msg + ", please check your username or password");
      if (callback) callback();
    }
  });
}

const onRegisterLocalUser = (localUser, callback, dispatch) => {
  // localStorage.setItem('localUser', JSON.stringify(localUser));
  console.log("onRegister");
  dispatch(
    showToast({
      title: 'Notification',
      text: `Local user ${localUser.name} successfully registered.`,
    }),
  );

  onLoginUser(localUser,"", "local", callback, dispatch);
}

const onQueryLocalUser = (user, callback, failcallback, dispatch) => {
  console.log("onQUery  local user");
  const queryBody = {
    email: user.email,
  };
  console.log(queryBody);

  const strParams = qs.stringify(queryBody);

  axios.get(API.ENDPOINT + `/user?${strParams}`).then(response => {
    console.log("response query user");
    console.log(response.data.msg);
      if (response.data.code === 0) {
        let loginUser = response.data.data;
        //console.log(loginUser);

        dispatch({
          type: Types.SET_USER_PROFILE,
          payload: loginUser,
        });
        //console.log(callback);
        if (callback) callback();
      }
      else if (response.data.code === 1)
      {
        if(failcallback) failcallback();
      }
  });
}

export const queryLocalUser = (user, callback) => dispatch => {
    console.log("query local user");
    onQueryLocalUser(user, callback, callback, dispatch);
}

export const queryLocalUser2 = (user, callback, failcallback) => dispatch => {
  onQueryLocalUser(user, callback, failcallback, dispatch);
}

export const fastRegisterLocalUser = (localUser, callback) =>dispatch => {
  delete localUser.repeatPassword;

  console.log("fast callback" + callback);

  const registerBody = {
    accesstoken: "",
    address: "",
    // username: localUser.email,
    email: localUser.email,
    firstname: localUser.firstname,
    lastname: localUser.lastname,
    password: localUser.password,
    type: "local",
    role: "client",
    phone: localUser.phonenumber,
  }

  axios.post(API.ENDPOINT + "/user/register", registerBody).then(response => {
    console.log("fast register");
    if (response.status === 200) {
      const loginBody = {
        accesstoken: "",
        email: localUser.email,
        password: localUser.password,
        type: "local",
      }
      console.log("onLoginUser");

      axios.post(API.ENDPOINT + "/user/login", loginBody).then(response => {
        console.log("fast login");
        console.log(response);
        if (response.data.code === 1) {
          console.log("code login 1xxx");
          console.log(response.data.data); 
          dispatch({
            type: Types.LOGIN_GET_TOKEN,
            payload: response.data.data
          });

          if(callback) callback(response.data.data);
        }
        else {
          console.log("where is alert");
          alert(response.data.msg + ", please check your username or password");
          if (callback) callback(response.data.data);
        }
      });

    }
    else 
      console.log(response);
  });
}

export const registerLocalUser = (localUser, callback) => dispatch => {
  //dispatch(logOutGoogleUser());
  // delete localUser.password;
  delete localUser.repeatPassword;

  console.log("callback" + callback);

  const registerBody = {
    accesstoken: "",
    address: "",
    // username: localUser.email,
    email: localUser.email,
    firstname: "",
    lastname: "",
    password: localUser.password,
    type: "local",
    role: "client",
    phone: "",
  }

  axios.post(API.ENDPOINT + "/user/register", registerBody).then(response => {
    console.log("onRegister...");
    if (response.status === 200) {
      console.log(response);
      onRegisterLocalUser(localUser, callback, dispatch);
    }
    else 
      console.log(response);
  });
  
};

export const loginLocalUser = (_localUser, callback) => (dispatch, getState) => {
  //dispatch(logOutGoogleUser());
  onLoginUser(_localUser,"", "local", callback, dispatch);
  // let localUser = { ...getState().authReducer.localUser };
  // localUser = _.isEmpty(localUser) ? null : localUser;

  // if (localUser) {
    
  // onLoginUser(_localUser,"", "local", () => {
  //   //TOOD: /user not implement yet;
  //   axios.get(API.ENDPOINT + "/user", { email: _localUser.email }).then(response => {
  //     if (response.status === 200) {
  //       console.log("get user info");
  //       console.log(response);
  //       const localUser = JSON.stringify(response.data.data);
  //       localStorage.setItem('localUser', localUser);
  //       dispatch({
  //         type: Types.LOGIN_LOCAL_USER,
  //         payload: localUser,
  //       });
  //       if (callback) callback();
  //     }
  //   });
  // }, dispatch);
    // dispatch(
      //   showToast({
        //     title: 'Notification',
        //     text: `Local user ${localUser.email} successfully logged in.`,
        //   }),
        // );
        // } else {
          //   dispatch(
            //     showToast({
              //       title: 'Error',
              //       text: `Wrong email or password.`,
              //     }),
              //   );
              // }

};

export const logoutLocalUser = (token) => (dispatch, getState) => {
  // const localUser = JSON.parse(localStorage.getItem('localUser'));
  console.log("logout...");
  console.log(token);
  // if (localUser) {
    axios.delete(API.ENDPOINT + "/user/logout", {
      headers: {
        'token': token
      },
    }).then(response => {
      console.log("logout");
      console.log(response);
      // localStorage.removeItem('localUser');

      // dispatch(
      //   showToast({
      //     title: 'Notification',
      //     text: `Local user ${localUser.name} successfuly logged out.`,
      //   }),
      // );
      dispatch({
        type: Types.LOGOUT_CURRENT_USER,
      });
      dispatch({
        type: Types.LOGOUT_REMOVE_TOKEN,
      })
    });  
  }

export const redirectAfterLogin = callback => {
  if (callback) callback();

  return {
    type: Types.REDIRECT_AFTER_LOGIN,
  };
};

export const updateUserProfile = user => dispatch => {
  axios.put(API.ENDPOINT + "/user", user).then(response => {
    console.log("update user profile feedback");
    console.log(response.data.msg);

    if (response.data.code === 0) {
      console.log("query user profile");
      onQueryLocalUser(user, null, null, dispatch);
    }
    else {
      console.log(response.data.msg);
    }
  });  

}
