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

class UserApp extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Route exact path='/userapp' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signin' component={SignIn} />
                <Footer />
            </Router>
        )
    }
}
export default UserApp;