import React, { Component } from "react";
import { Button } from "../components/common";
class Error extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <Button title="+AddEmployee" className="btn btn-primary" />
        <h2>No Recorde found !!!</h2>
      </div>
    );
  }
}

export default Error;
