import React, { Component } from "react";
import "../Components/CSS/login.css";
import { Redirect } from "react-router-dom";
import UserService from "./Services/UserService";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      userName: "",
      password: "",
      redirect: null,
    };
  }
  changeHandler = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  checkLogin = () => {
    let loginRequest = {
      username: this.state.userName,
      password: this.state.password,
    };
    UserService.verify(loginRequest)
      .then((res) => {
        if (res.data != "") {
        } else {
          localStorage.setItem("login", res.data);
        }
      })
      .catch((err) => console.log(err), alert("please check you connection"));
  };
  changeHandler = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  render() {
    if (this.login) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
          }}
        />
      );
    }
    return (
      <div className="box1">
        <form className="container pb-3 pt-2">
          <h3 className="center">Log in</h3>

          <div className="form-group">
            <label to="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              name="userName"
              id="userName"
              value={this.state.userName}
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group pb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </div>
          {this.state.userName}
          {this.state.password}
          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={this.checkLogin}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
