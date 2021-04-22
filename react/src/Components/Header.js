import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RailwayDetails from "./RailwayDetails";
import Update from "./Update";
import { FiLogIn, SiGnuprivacyguard } from "react-icons/all";
import Home from "./Home";
import TrainDetailsServices from "./TrainDetailsServices";
import Search from "./Search";
import Login from "./Login";
import Signup from "./Signup";
import BookingPage from "./BookingPage";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumber: 0,
      train: [],
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
  render() {
    return (
      <div>
        <Router /* history={history} */>
          <nav style={{ background: "black" }} className="pb-3 pt-3">
            <Link className="link pl-2 pr-5" to="/first">
              Railway Booking System
            </Link>
            <Link className="link pr-3 pl-5" to="/AddTrainDetails">
              Add Train
            </Link>
            <Link className="link" to="/UpadteTrainDetails">
              Update Train
            </Link>
            <Link
              to="/signup"
              style={{ float: "right", color: "white" }}
              className="pr-1"
            >
              <SiGnuprivacyguard></SiGnuprivacyguard>
              Signup
            </Link>
            <Link
              to="/login"
              style={{ float: "right", color: "white" }}
              className="pr-2"
            >
              <FiLogIn className="pt-1"> </FiLogIn>Login
            </Link>
          </nav>

          <switch>
            <Route exact path="/first">
              <Home />
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
            <Route exact path="/UpadteTrainDetails">
              <Update />
            </Route>
            <Route exact={true} path="/login">
              <Login />
            </Route>
            <Route exact={true} path="/signup">
              <Signup />
            </Route>
          </switch>
        </Router>
      </div>
    );
  }
}

export default Header;
