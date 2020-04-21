import React, { Component } from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Error from "../screens/Error";
import history from "../history";
import { Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/error" component={Error} exact />
        </div>
      </Router>
    );
  }
}

export default App;
