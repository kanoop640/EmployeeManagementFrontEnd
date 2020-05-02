import axios from "axios";
import history from "./history";
import { Link } from "react-router-dom";
export const deleteEmployee = (id) => {
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
export const GetAllEmployee = async () => {
  try {
    const response = await axios.get(
      "https://localhost:44346//api/Employee/GetAllEmployee"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const loginEventhandler = (email, password) => {
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
    });
};

export const registerEventHandler = (data) => {
  const url = "https://localhost:44346/api/Employee/AddEmployee";
  axios
    .post(url, data)
    .then((user) => {
      console.log(user);
      this.ClearData();
      history.push("/");
    })
    .catch((e) => {
      console.log(e);
    });
};
