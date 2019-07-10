import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from './Account/Login/Login';
import Signup from './Account/Signup/Signup';
import Confirm from './Account/Confirm/Confirm';
import Reset from './Account/Reset/Reset';
import Forgot from './Account/Forgot/Forgot';
import OpenAccount from './Account/OpenAccount/OpenAccount';
import Policy from './Account/Policy/Policy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/confirm" exact component={Confirm} />
          <Route path="/reset" exact component={Reset} />
          <Route path="/forgot" exact component={Forgot} />
          <Route path="/openaccount" exact component={OpenAccount} />
          <Route path="/policy" exact component={Policy} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
