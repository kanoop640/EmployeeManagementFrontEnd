import React, { Component } from "react";
import axios from "axios";
import { Card } from "../components/common";
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
  render() {
    return (
      <div>
        <h1>Registered Users</h1>
        {this.state.users.length > 0
          ? this.state.users.map((user) => {
              return (
                <Card key={user.id}>
                  <p>Name: {`${user.firstName}  ${user.lastName}`}</p>
                  <p>Email: {user.email}</p>
                </Card>
              );
            })
          : ""}
      </div>
    );
  }
}

export default Home;
