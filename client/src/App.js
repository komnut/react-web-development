import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Order from './containers/order/Order';

import './App.css'

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Order" component={Order} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    );
  }
}

export default App;
