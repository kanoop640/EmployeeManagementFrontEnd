import React, { Component } from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Error from "../screens/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Update from "../screens/Update";
import history from "../history";
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/error" component={Error} exact />
            <Route path="/update" component={Update} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
