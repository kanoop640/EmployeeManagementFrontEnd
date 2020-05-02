import React, { Component } from "react";
import { Input, Card, Button } from "../components/common";
import axios from "axios";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      gender: "",
    };
  }

  ClearData() {
    this.setState({ id: "" });
    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ userName: "" });
    this.setState({ email: "" });
    this.setState({ password: "" });
    this.setState({ gender: "" });
  }
  DataSend = (data) => {
    const url = "https://localhost:44346/api/Employee/UpdateEmployee";
    axios
      .put(url, data)
      .then((user) => {
        console.log(user);
        this.ClearData();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    const data = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    };
    return (
      <div className="container">
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "600px",
          }}
        >
          <Card center="text-center">
            <h2>Update Employee Details</h2>
            <Input
              type="text"
              placeholder="Id"
              textChange={(event) => this.setState({ id: event.target.value })}
              value={this.state.id}
            />
            <Input
              type="text"
              placeholder="First Name"
              textChange={(event) =>
                this.setState({ firstName: event.target.value })
              }
              value={this.state.firstName}
            />
            <Input
              type="text"
              placeholder="Last Name"
              textChange={(event) =>
                this.setState({ lastName: event.target.value })
              }
            />
            <Input
              type="text"
              placeholder="User Name"
              textChange={(event) =>
                this.setState({ userName: event.target.value })
              }
            />{" "}
            <Input
              type="text"
              placeholder="Email"
              textChange={(event) =>
                this.setState({ email: event.target.value })
              }
            />{" "}
            <Input
              type="password"
              placeholder="Password"
              textChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />{" "}
            <Input
              type="text"
              placeholder="Gender"
              textChange={(event) =>
                this.setState({ gender: event.target.value })
              }
            />
            <Button
              title="Update"
              className="btn btn-primary w-100"
              onClick={() => this.DataSend(data)}
            />
          </Card>
        </div>
      </div>
    );
  }
}
export default Update;
