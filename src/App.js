import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link} from 'react-router-dom'

import './App.css';
import Home from './common/'
import Layout from './common/layout/'

class App extends Component {
  render() {
    return (
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Redirect from ="*" to="/"/>
            </Switch>
          </Layout>
        </Router>
    );
  }
}

export default App;
