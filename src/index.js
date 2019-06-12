import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './components/routes/home/index'
import Footer from './components/layout/footer/index'
import Login from './components/routes/login/index'
import Navbar from './components/layout/navbar/index'
import SignIn from './components/routes/signin/index'
import "firebase/auth";

ReactDOM.render(

    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signin' component={SignIn} />
      <Footer />
    </Router>,
    
  document.getElementById('root')
);