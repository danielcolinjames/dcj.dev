import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/abacus" component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
