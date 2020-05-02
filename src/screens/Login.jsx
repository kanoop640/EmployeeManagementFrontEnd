import React, { Component } from "react";

import { Input, Button, Card, Logo } from "../components/common";
import { loginEventhandler } from "../Services";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      user: null,
    };
  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  componentDidMount() {
    if (this.state.user) {
      this.props.history.push("/home");
    }
  }
  render() {
    const { email, password } = this.state;
    console.log(this.props.history);
    return (
      <div className="container ">
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
              value={email}
            />
            <Input
              type="password"
              placeholder="Password"
              textChange={this.handlePassword}
              value={password}
            />
            <Button
              title="Login"
              className="btn btn-primary w-100"
              onClick={() => loginEventhandler(email, password)}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
