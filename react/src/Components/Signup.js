import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import UserService from "./Services/UserService";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      phoneNumber: null,
      redirect: null,
      signup: false,
      emailExist: false,
      usernameExist: false,
      error: {
        username: "User already exist ",
        email: "Email already Exist",
      },
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
  createAccount = () => {
    const { username, password, phoneNumber, email } = this.state;
    let details = {
      username: username,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };
    console.log(details);
    UserService.createAccount(details)
      .then((res) => {
        console.log(res.data.message);
        let reply = res.data.message;
        if (reply == "error.email.username") {
          console.log("email and username exist ");
          this.setState({ usernameExist: true, emailExist: true });
        } else if (reply == "error.email") {
          console.log("email  exist ");
          this.setState({ emailExist: true });
        } else if (reply == "error.username") {
          console.log(" username exist ");
          this.setState({ usernameExist: true });
        } else {
        }
        if (reply == "User registered successfully!") {
          console.log(res.data);
          alert(reply);
          this.setState({
            signup: true,
            redirect: "/login",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    if (this.state.signup) {
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
        <form className="container">
          <h3 className="center pt-3">Register</h3>

          <div className="form-group">
            <label for="username">User name</label>
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="User name"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
            />
            {this.state.usernameExist && (
              <span style={{ color: "red" }}>{this.state.error.username}</span>
            )}
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
            {this.state.emailExist && (
              <span style={{ color: "red" }}>{this.state.error.email}</span>
            )}
          </div>

          <div className="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="number"
              className="form-control"
              placeholder="Number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </div>

          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={this.createAccount}
          >
            Register
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="http://localhost:3000/login">log in?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Signup;
