import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import TrainDetailsServices from "./TrainDetailsServices";

class RailwayDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainName: null,
      trainNumber: null,
      stops: "",
      time: "",
      trainStopsAndTimes: [],
      cost: 0,
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thrusday: false,
      friday: false,
      saturday: false,
      coacheType: null,
      noOfCoaches: null,
      noOfSeats: null,
      coaches: [],
    };
  }
  delete = (lists, name) => {
    lists.map((list) => list.stop != name);
    console.log(lists);
  };
  addCoach = () => {
    const { coaches, coacheType, noOfCoaches, noOfSeats } = this.state;
    if (coacheType != null && noOfCoaches != null && noOfSeats != null) {
      let c = coaches;
      c.push({
        coacheType: coacheType,
        noOfCoaches: noOfCoaches,
        noOfSeats: noOfSeats,
      });
      this.setState({
        coaches: c,
        coacheType: null,
        noOfSeats: null,
        noOfCoaches: null,
      });
    }
  };
  changeHandler = (event) => {
    /* this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value) */
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    const {
      trainName,
      trainStopsAndTimes,
      trainNumber,
      sunday,
      monday,
      tuesday,
      wednesday,
      thrusday,
      friday,
      saturday,
      coaches,
    } = this.state;

    let dup = {
      trainName: trainName,
      trainNumber: trainNumber,
      trainStopsAndTimes: trainStopsAndTimes,
      weekDays: {
        sunday: sunday,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thrusday: thrusday,
        friday: friday,
        saturday: saturday,
      },
      coaches: coaches,
    };
    console.log(dup);
    if (trainNumber === null && trainName === null) {
      alert("Fill the train details to upload");
    } else {
      console.log(dup);
      TrainDetailsServices.addTrain(dup)
        .then((res) => {
          alert("Train Details are added");
        })
        .catch((error) => {
          alert("Server is not connected");
        });

      console.log("data sent to data base");
    }
  };
  addStop = () => {
    const { trainStopsAndTimes, stops, time, cost } = this.state;
    let duplicate = trainStopsAndTimes;
    let dup = {
      stop: stops,
      time: "0000-00-00T" + time,
      cost: cost,
    };
    duplicate.push(dup);
    this.setState({
      trainStopsAndTimes: duplicate,
      stops: "",
      time: "",
    });
    console.log(trainStopsAndTimes);
  };

  render() {
    const trainstop = this.state.trainStopsAndTimes.map((e) => {
      let c = e.time.slice(11);
      return (
        <tr>
          <td className="pl-4 pr-5">{c}</td>
          <td className=" pr-5 ">{e.stop}</td>
          <td className="pl-3">{e.cost}</td>
        </tr>
      );
    });
    return (
      <div className="RailwayDetailsBackground  ">
        <h1 className="center">Add Train Details </h1>
        <form className="center">
          <div className="mb-3">
            <label for="trainName" className="mr-2">
              Train Name{" "}
            </label>
            <input
              type="text"
              name="trainName"
              placeholder="Name"
              value={this.state.trainName}
              id="trainName"
              onChange={this.changeHandler}
            ></input>
          </div>
          <div className="mb-3">
            <label for="trainNumber" className="mr-2">
              Train Number{" "}
            </label>
            <input
              type="number"
              name="trainNumber"
              placeholder="trainNumber"
              id="trainNumber"
              value={this.state.trainNumber}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div className="container">
            <Row>
              <Col>
                <label for="time" className="mr-2">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  placeholder="date"
                  value={this.state.date}
                  onChange={this.changeHandler}
                ></input>
              </Col>
              <Col>
                <label for="stop" className="mr-2">
                  Stop
                </label>
                <input
                  type="text"
                  name="stops"
                  placeholder="stop"
                  id="stop"
                  value={this.state.stops}
                  onChange={this.changeHandler}
                ></input>
              </Col>
              <Col>
                <label for="cost" className="mr-2">
                  Cost
                </label>
                <input
                  type="number"
                  name="cost"
                  placeholder="cost"
                  id="cost"
                  value={this.state.cost}
                  onChange={this.changeHandler}
                ></input>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.addStop}
                >
                  Add Stop
                </button>
              </Col>
            </Row>
          </div>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Stop</th>
                  <th>Time</th>
                  <th>Cost</th>
                </tr>
              </thead>
              {trainstop}
            </table>
          </div>

          <div className="center">
            <table>
              <td>Select the week day train run</td>
              <td>
                <label className="label-checkbox">
                  <input
                    type="checkbox"
                    name="sunday"
                    checked={this.state.sunday}
                    onChange={this.changeHandler}
                  ></input>
                  sunday
                </label>
                <br />

                <label className="label-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    name="monday"
                    checked={this.state.monday}
                    onChange={this.changeHandler}
                  ></input>
                  monday
                </label>
                <br />

                <label className="label-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    name="tuesday"
                    checked={this.state.tuesday}
                    onChange={this.changeHandler}
                  ></input>
                  tuesday
                </label>
                <br />

                <label className="label-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    name="wednesday"
                    checked={this.state.wednesday}
                    onChange={this.changeHandler}
                  ></input>
                  wednesday
                </label>
                <br />

                <label className="label-checkbox">
                  <input
                    type="checkbox"
                    name="thrusday"
                    checked={this.state.thrusday}
                    onChange={this.changeHandler}
                  ></input>{" "}
                  thrusday
                </label>
                <br />

                <label className="label-checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    name="friday"
                    checked={this.state.friday}
                    onChange={this.changeHandler}
                  ></input>
                  friday
                </label>
                <br />

                <label className="label-checkbox">
                  <input
                    type="checkbox"
                    name="saturday"
                    checked={this.state.saturday}
                    onChange={this.changeHandler}
                  ></input>
                  saturday
                </label>
                <br />
              </td>
            </table>
          </div>
          <div className="container">
            <Row>
              <Col>
                <label for="coacheType">Coach type</label>
                <input
                  type="text"
                  name="coacheType"
                  id="coacheType"
                  placeholder="coacheType"
                  value={this.state.coacheType}
                  onChange={this.changeHandler}
                ></input>
              </Col>
              <Col>
                <label for="noOfCoaches">No of coaches</label>
                <input
                  type="number"
                  name="noOfCoaches"
                  placeholder="noOfCoaches"
                  id="noOfCoaches"
                  value={this.state.noOfCoaches}
                  onChange={this.changeHandler}
                ></input>
              </Col>
              <Col>
                <label for="noOfSeats">No of seats</label>
                <input
                  type="number"
                  name="noOfSeats"
                  placeholder="noOfSeats"
                  id="noOfSeats"
                  value={this.state.noOfSeats}
                  onChange={this.changeHandler}
                ></input>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.addCoach}
                >
                  Add Coaches
                </button>
              </Col>
            </Row>
          </div>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>No of coaches</th>
                  <th>No of seats</th>
                </tr>
              </thead>
              {this.state.coaches.map((coache) => {
                return (
                  <tr>
                    <td>{coache.coacheType}</td>
                    <td>{coache.noOfCoaches}</td>
                    <td>{coache.noOfSeats}</td>
                  </tr>
                );
              })}
            </table>
          </div>

          <spam className="mb-7"></spam>
          <button className="btn btn-danger">Reset</button>
          <span className="pr-3"></span>
          <button
            onClick={this.submitHandler}
            type="button"
            className="btn btn-success"
          >
            Add Details
          </button>
        </form>

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default RailwayDetails;
