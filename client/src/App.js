import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

import './App.css'

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route path="/" component={Home} />
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
