import React, { Component } from "react";

import { Input, Button, Card, Logo } from "../components/common";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "400px",
          }}
        >
          <Card center="text-center">
            <Logo src="./logo/avatar.jpg" alt="logo" />
            <Input
              type="text"
              placeholder="Email"
              textChange={this.handleEmail}
            />
            <Input
              type="password"
              placeholder="Password"
              textChange={this.handlePassword}
            />
            <Button title="Login" className="btn btn-primary w-100" />
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
