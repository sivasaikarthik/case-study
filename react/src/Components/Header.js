import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RailwayDetails from "./RailwayDetails";
import Update from "./Update";
import Home from "./Home";
import TrainDetailsServices from "./TrainDetailsServices";
import Search from "./Search";
import Login from "./Login";
import Signup from "./Signup";
import BookingPage from "./BookingPage";
import MyBookings from "./MyBookings";
import DefaultNav from "./Navigation/DefaultNav";
import UserNav from "./Navigation/UserNav";
import AdminNav from "./Navigation/AdminNav";
import Logout from "./Security/Logout";
import App from "../App";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumber: 0,
      train: [],
    };
  }
  searchTrain = () => {
    console.log(this.state.trainNumber);
    TrainDetailsServices.getTrainId(this.state.trainNumber)
      .then((res) => {
        if (res.data == null) {
          console.log("no train with this train number", this.trainNumber);
        } else {
          console.log("found");
          this.setState({ train: res.data });
        }
      })
      .catch((err) => alert("please check your connection to the server"));
  };
  checkUserType = () => {
    let details = JSON.parse(localStorage.getItem("login"));

    if (details.roles[0] == "ROLE_USER") {
      return <UserNav></UserNav>;
    } else if (details.roles[0] == "ROLE_ADMIN") {
      return <AdminNav></AdminNav>;
    } else {
      return <DefaultNav></DefaultNav>;
    }
  };
  render() {
    return (
      <div>
        <Router>
          {this.checkUserType()}
          <Switch>
            <Route exact path="/first">
              <Home />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/booking">
              <BookingPage />
            </Route>
            <Route exact path="/AddTrainDetails">
              <RailwayDetails />
            </Route>
            <Route exact path="/Search">
              <Search />
            </Route>
            <Route path="/mybookings">
              <MyBookings />
            </Route>
            <Route exact path="/UpadteTrainDetails">
              <Update />
            </Route>
            <Route exact={true} path="/login">
              <Login />
            </Route>
            <Route exact={true} path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Header;
