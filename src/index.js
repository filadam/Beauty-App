import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/routes/home/index'
import Footer from './components/layout/footer/index'
import Login from './components/routes/login/index'
import Navbar from './components/layout/navbar/index'
import { Provider, Connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import * as firebase from "firebase/app";
import "firebase/auth";
import thunk from "redux-thunk";

const initialState = {
  user: null
};



export const signIn = () => dispatch => {
  dispatch(signInAction());
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) { });

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(signInSuccessAction(user));
    }
  });
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

const SIGN_IN = "SIGN_IN";
const signInAction = () => ({
  type: SIGN_IN
});

const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const signInSuccessAction = payload => ({
  type: SIGN_IN_SUCCESS,
  payload
});



const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Footer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);