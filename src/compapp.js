import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './index.css';
import CompHome from './comp.components/routes/home/index'
import CompFooter from './comp.components/layout/footer/index'
import CompLogin from './comp.components/routes/login/index'
import CompNavbar from './comp.components/layout/navbar/index'
import CompSignIn from './comp.components/routes/signin/index'
import "firebase/auth";

class CompApp extends React.Component {
    render() {
        return (
            <Router>
                <CompNavbar />
                <Route exact path='/compApp' component={CompHome} />
                <Route exact path='/home' component={CompHome} />
                <Route exact path='/login' component={CompLogin} />
                <Route exact path='/signin' component={CompSignIn} />
                <CompFooter />
            </Router>
        )
    }
}
export default CompApp;