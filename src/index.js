import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import Container from 'react-bootstrap/Container';

import Home from './pages/Home';
import Products from './pages/Products';
import Liked from './pages/Liked';

import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';
import Finance from './pages/Finance';
import Error from './pages/Error';
import Trade from './pages/Trade';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import MyToast from './components/MyToast';
import Checkbox from './pages/Checkout';
import PrivateRoute from './components/PrivateRoute';
import rootReducer from './store/reducers';

import{ init } from 'emailjs-com';
import './index.css';
import Terms from './pages/Terms';
import Inspection from './pages/Inspection';
// import LoginTab from './components/LoginTab';

init("user_IYjyYkGwvc6OO4uij8mRR");
// import './fakebackend/axiosData';

const Root = () => {
  //
  const initialState = {};

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose,
    ),
  );

  // window.addEventListener("message", ({ data }) => {
  //   console.log(data)
  // });

  return (
    <Router>
      <Provider store={store}>
      <div id="wrapper">
        <Header />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/liked" exact component={Liked} />
            <Route
              path="/product-details/:id"
              exact
              component={ProductDetails}
            />
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/logintab" component={LoginTab} /> */}
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/error" component={Error} />
            <Route path="/Trade" component={Trade} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/inspection" component={Inspection} />
            <Route path="/finance" component={Finance} />
            <Route path="/terms" component={Terms} />
            <Route path="/checkout" component={Checkbox} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Redirect to="/home" />
          </Switch>
          <MyToast />
        </div>
      </Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
