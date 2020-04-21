import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "../components/common";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
  }
  componentDidMount() {
    async function getUsers() {
      try {
        const response = await axios.get(
          "https://localhost:44346//api/Employee/GetAllEmployee"
        );
        return response;
      } catch (error) {
        console.error(error);
      }
    }
    getUsers().then((user) => {
      this.setState({ users: user.data });
    });
  }
  deleteEmployee = (id) => {
    const deleted = axios.delete(
      "https://localhost:44346/api/Employee/DeleteEmployee?id=" + id
    );
    deleted
      .then((u) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                EmployeeManagement
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
        </nav>
        <h1>Registered Users</h1>
        {this.state.users.length > 0
          ? this.state.users.map((user) => {
              return (
                <Card key={user.id}>
                  <p>Name: {`${user.firstName}  ${user.lastName}`}</p>
                  <p>Email: {user.email}</p>
                  <Button
                    title="Delete"
                    onClick={() => this.deleteEmployee(user.id)}
                  />
                </Card>
              );
            })
          : ""}
      </div>
    );
  }
}

export default Home;
