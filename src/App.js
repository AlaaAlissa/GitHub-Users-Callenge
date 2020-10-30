import React, { Component } from 'react';
import Githubusers from './Githubusers';
import About from './About';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Layout from './components/Layout';

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path='/' component={ Githubusers }></Route>
            <Route  path='/about' component={ About }></Route>
            </Layout>
        </Switch>
      </BrowserRouter>
      
     )
  }
}


