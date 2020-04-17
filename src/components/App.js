import React, { Component } from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/register" component={Register} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
