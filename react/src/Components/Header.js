import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RailwayDetails from "./RailwayDetails";
import Update from "./Update";
import { HiOutlineSearch } from "react-icons/all";
import Home from "./Home";
import TrainDetailsServices from "./TrainDetailsServices";
import Search from "./Search";
import history from "./History";
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
        <Router history={history}>
          <nav
            style={{ background: "black", color: "white" }}
            className="pb-2 pt-2"
          >
            <Link className="pl-2 pr-5" to="/Home">
              Railway Booking System
            </Link>
            <Link className="link pr-3 pl-5" to="/AddTrainDetails">
              Add Train
            </Link>
            <Link className="link" to="/UpadteTrainDetails">
              Update Train
            </Link>

            <span style={{ float: "right" }} className="pr-5">
              <input
                placeholder="Train Number"
                type="number"
                name="trainNumber"
                placeholder="trainNumber"
                id="trainNumber"
                onChange={this.changeHandler}
              />
              <button type="button" onClick={this.searchTrain}>
                <HiOutlineSearch />
              </button>
            </span>
          </nav>
          <switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/AddTrainDetails">
              <RailwayDetails />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/UpadteTrainDetails">
              <Update />
            </Route>
          </switch>
        </Router>
      </div>
    );
  }
}

export default Header;
