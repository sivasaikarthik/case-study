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
      error: "",
      message: false,
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
        console.log("inside then");
        localStorage.setItem("login", JSON.stringify(res.data));
        this.setState({ login: true, redirect: "/first", message: false });
        console.log("end");
      })
      .catch((err) => {
        if (err.message == "Request failed with status code 401") {
          // alert("incorrect passowrd");
          this.setState({
            error: "Login Failed! Invalid Username and Password",
            message: true,
          });
          console.log(err);
        } else {
          alert("please check you connection");
        }
      });
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
    if (this.state.login) {
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
          {this.state.message && (
            <span style={{ color: "red" }}>{this.state.error}</span>
          )}
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
