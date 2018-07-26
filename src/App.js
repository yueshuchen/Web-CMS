import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect, Route, Link} from 'react-router-dom'

import './App.css';
import Home from './common/'
import Layout from './common/layout/'
import WrappedNormalLoginForm from './common/login-side/'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route path='/login' component ={WrappedNormalLoginForm}> </Route>

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
