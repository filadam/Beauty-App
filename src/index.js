import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Home from './components/routes/home/index'
import Footer from './components/layout/footer/index'

import Navbar from './components/layout/navbar/index'

ReactDOM.render(
  <BrowserRouter>
      <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          {/* // <Route exact path='/login' component={Login} />
          // <Route exact path='/sign-up' component={SignUp} />
          // <Route exact path='/profile_user' component={ProfilUser} />
          // <Route exact path='/profile_provider' component={ProfilProvider} /> */}
          <Footer />
      </div>
  </BrowserRouter>,
  document.getElementById('root')
);