import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
// import Home from './components/routes/home/index'
// import Footer from './components/layout/footer/index'
// import Login from './components/routes/login/index'
// import Navbar from './components/layout/navbar/index'
// import SignIn from './components/routes/signin/index'
import UserApp from './userapp'
import CompApp from './compapp'
import "firebase/auth";

ReactDOM.render(
  <Router>
    <Route exact path="/userapp" component={UserApp} />
    <Route exact path="/home" component={UserApp} />
    <Route exact path="/compapp" component={CompApp} />
    </Router>,
  document.getElementById('root')
);