import React, { Component } from "react";
import TrainDetailsServices from "./TrainDetailsServices";

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumber: 0,
      trainName: "indian express",
      stops: "",
      time: "",
      trainStopsAndTimes: [],
      cost: 0,
      sunday: true,
      monday: false,
      tuesday: false,
      wednesday: false,
      thrusday: false,
      friday: false,
      saturday: false,
      sleeper: 0,
      ac: 0,
      acCoach: 0,
      SleeperCoach: 0,
      click: 1,
    };
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.details = this.details.bind(this);
    this.addStop = this.addStop.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
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

  delete() {
    TrainDetailsServices.deleteTrain(this.state.trainNumber)
      .then((res) => alert(res.data))
      .catch((err) =>
        alert(
          "Train is not deleted due to lost of connection with server please connect again and try"
        )
      );
  }
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
  update() {
    if (this.state.click === 1) {
      /*  TrainDetailsServices.getTrainId(this.state.trainNumber)
        .then((res) => {
          this.setState({
            trainName: res.data.trainName,
            trainStopsAndTimes: res.data.trainStopsAndTimes,
            sunday: res.data.weekDays.sunday,
            monday: res.data.weekDays.monday,
            tuesday: res.data.weekDays.tuesday,
            wednesday: res.data.weekDays.wednesday,
            thrusday: res.data.weekDays.thrusday,
            friday: res.data.weekDays.friday,
            saturday: res.data.weekDays.saturday,
            sleeper: res.data.sleeper,
            ac: res.data.ac,
            acCoach: res.data.acCoach,
            SleeperCoach: res.data.SleeperCoach,
            click: 2,
          }); 
        })

        .catch(
          (err) =>
            alert(err);
            alert("Server Train details is not connected") 
        );*/
      this.setState({ click: 2 });
    } else {
      alert(this.state.trainName);
    }
  }
  handleRemove = (props) => {
    const newList = this.trainStopsAndTimes;
    newList = newList.filter((item) => item.stop != props);
    this.setState({ trainStopsAndTimes: newList });
  };

  details() {
    if (this.state.click === 2) {
      const trainstop = this.state.trainStopsAndTimes.map((e) => {
        let c = e.time.slice(11);
        let s = e.stop;
        return (
          <tr className="pb-2">
            <td className="pl-4 pr-5">{c}</td>
            <td className=" pr-5 ">{s}</td>
            <td className="pl-3">{e.cost}</td>
            <td className="pl-5">
              <button type="button" onClick={() => this.handleRemove(s)}>
                Delete
              </button>
            </td>
          </tr>
        );
      });
      return (
        <div>
          <div className="RailwayDetailsBackground  ">
            <h1 className="center">Update Train Details </h1>
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
                <div className="row">
                  <div className="col">
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
                  </div>
                  <div className="col">
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
                  </div>

                  <div className="col">
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
                  </div>

                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.addStop}
                    >
                      Add Stop
                    </button>
                  </div>
                </div>
              </div>
              <div className="container">
                <th className="pl-4 pr-5">Time</th>
                <th className=" pr-5 pr-3">Stop</th>
                <th className="pl-3">Cost</th>
                {trainstop}
              </div>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="mb-3">
                      <label for="acCoach" className="pr-5">
                        No of Ac Coaches
                      </label>
                      <input
                        required
                        type="number"
                        name="acCoach"
                        placeholder="acCoach"
                        id="acCoach"
                        value={this.state.acCoach}
                        onChange={this.changeHandler}
                      ></input>
                    </div>
                  </div>

                  <div class="col">
                    <div className="mb-3">
                      <label for="ac" className="pr-5">
                        No of Seats in Ac
                      </label>
                      <input
                        required
                        type="number"
                        name="ac"
                        placeholder="ac"
                        id="ac"
                        value={this.state.ac}
                        onChange={this.changeHandler}
                      ></input>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col">
                    <div className="mb-3">
                      <label for="SleeperCoach" className="pr-5">
                        No of Sleeper Coaach
                      </label>
                      <input
                        type="number"
                        name="SleeperCoach"
                        placeholder="SleeperCoach"
                        id="SleeperCoach"
                        value={this.state.SleeperCoach}
                        onChange={this.changeHandler}
                      ></input>
                    </div>
                  </div>

                  <div class="col">
                    <div className="mb-3">
                      <label for="sleeper" className="pr-5">
                        No of Seats in sleeper
                      </label>
                      <input
                        required
                        type="number"
                        name="sleeper"
                        placeholder="sleeper"
                        id="sleeper"
                        value={this.state.sleeper}
                        onChange={this.changeHandler}
                      ></input>
                    </div>
                  </div>
                </div>
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
            </form>

            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="center RailwayUpdateBackground pb-5">
        <label>
          Enter the train number
          <input
            className="pl-2"
            type="number"
            name="trainNumber"
            placeholder="trainNumber"
            id="trainNumber"
            value={this.state.trainNumber}
            onChange={this.changeHandler}
          ></input>
        </label>
        <br />
        {this.details()}
        <button type="button" className="btn btn-primary" onClick={this.update}>
          Update Train
        </button>
        <span className="pr-3"></span>
        <button onClick={this.delete} className="btn btn-danger ">
          Delete
        </button>
      </div>
    );
  }
}

export default Update;
