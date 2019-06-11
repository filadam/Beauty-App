import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import Home from './components/routes/home/index'
import Footer from './components/layout/footer/index'
import Login from './components/routes/login/index'
import Navbar from './components/layout/navbar/index'

ReactDOM.render(
  <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Switch>
          <Route path='/login' component={Login} />
          </Switch>
          <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);