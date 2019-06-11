import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

ReactDOM.render(

    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route path='/login' component={Login} />
      <Footer />
    </Router>,
  document.getElementById('root')
);