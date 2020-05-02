import React, { Component } from "react";
import { Card, Button } from "../components/common";
import { deleteEmployee, GetAllEmployee } from "../Services";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
  }
  componentDidMount() {
    GetAllEmployee().then((user) => {
      this.setState({ users: user.data });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <h3>EmployeeManagement</h3>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <a href="/">LogOut</a>
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
                    onClick={() => deleteEmployee(user.id)}
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
