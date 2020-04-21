import React, { Component } from "react";
import history from "../history";
import { Input, Button, Card, Logo } from "../components/common";
import axios from "axios";
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
  Eventhandler = (email, password) => {
    const url = "https://localhost:44346/api/Employee/LoginEmployee";
    const login = axios.post(url + `?email=${email}&password=${password}`);
    login
      .then((user) => {
        this.setState({ user: user.data });
        this.setState({ isLoggedIn: true });
        if (this.state.isLoggedIn) {
          history.push("/home");
        }
      })
      .catch((e) => {
        console.log(e);
        history.push("/error");
      });
  };

  render() {
    const { email, password } = this.state;

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
              onClick={() => this.Eventhandler(email, password)}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
