import React, { Component } from "react";
import { IoSwapVertical } from "react-icons/all";
import { Col, Form, Input, Row } from "reactstrap";
import { Redirect } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: "",
      destination: "",
      date: "",
      train: [],

      redirect: null,
    };
    //this.searchButton = this.searchButton.bind(this);
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
    const d = new Date(this.state.date);
    const week = d.getDay();
    /* TrainDetailsServices.SearchTrain(
      week,
      this.state.source,
      this.state.destination
    ).then((res) => this.setState({ train: res.data }))
      .catch((err) => alert("please check ur connection ", err)); */
    let trainData = [
      {
        trainName: "TIRUPATI SAINAGAR SHIRDI EXPRESS",
        trainNumber: 17417,
        trainStopsAndTimes: [
          {
            stop: "banglore",
            time: "0001-11-30T13:37:00.000+00:00",
            cost: 0.0,
          },
          {
            stop: "hyderabad",
            time: "0001-11-30T14:37:00.000+00:00",
            cost: 55.0,
          },
          {
            stop: "Thirupathi",
            time: "0001-11-30T15:37:00.000+00:00",
            cost: 45.0,
          },
        ],
        weekDays: {
          sunday: false,
          monday: false,
          tuesday: true,
          wednesday: false,
          thrusday: true,
          friday: false,
          saturday: false,
        },
        coaches: [
          { coacheType: "Sleeper class", noOfCoaches: 12, noOfSeats: 115 },
          { coacheType: "third class", noOfCoaches: 3, noOfSeats: 115 },
          { coacheType: "Secound class", noOfCoaches: 2, noOfSeats: 115 },
        ],
      },
      {
        trainName: " SAINAGAR SHIRDI EXPRESS",
        trainNumber: 17416,
        trainStopsAndTimes: [
          {
            stop: "banglore",
            time: "0001-11-30T13:37:00.000+00:00",
            cost: 0,
          },
          {
            stop: "Thirupathi",
            time: "0001-11-30T15:37:00.000+00:00",
            cost: 45.0,
          },
          {
            stop: "hyderabad",
            time: "0001-11-30T14:37:00.000+00:00",
            cost: 55.0,
          },
        ],
        weekDays: {
          sunday: false,
          monday: false,
          tuesday: true,
          wednesday: false,
          thrusday: true,
          friday: false,
          saturday: false,
        },
        coaches: [
          { coacheType: "Sleeper class", noOfCoaches: 12, noOfSeats: 115 },
          { coacheType: "third class", noOfCoaches: 3, noOfSeats: 115 },
          { coacheType: "Secound class", noOfCoaches: 2, noOfSeats: 115 },
        ],
      },
    ];
    console.log(trainData);
    localStorage.setItem("sou", this.state.source);
    localStorage.setItem("des", this.state.destination);
    localStorage.setItem("date", this.state.date);
    localStorage.setItem("train", JSON.stringify(trainData));
    this.setState({ redirect: "/Search" });
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
          }}
        />
      );
    }
    return (
      <div className="homeBackground">
        <Row>
          <Col>
            <div className="box">
              <h4 className="pb-2 center">Book Tickets</h4>
              <Form className="pl-2 pb-3">
                <Row form>
                  <Col md={5}>
                    <Input
                      type="text"
                      name="source"
                      id="From"
                      placeholder="From "
                      value={this.state.source}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col md={5}>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      value={this.state.date}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={2}></Col>
                  <Col md={1}>
                    {" "}
                    <button type="button">
                      <IoSwapVertical />
                    </button>
                  </Col>
                </Row>

                <Row className="pt-2">
                  <Col md={5}>
                    <Input
                      type="text"
                      name="destination"
                      id="To"
                      placeholder="To"
                      value={this.state.destination}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col md={5}></Col>
                  <Col md={2}>
                    <button type="button" onClick={this.searchTrain}>
                      Search
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col>
            <p className="center-text div1">Pakistan Railway Booking System</p>
            <p className="center" style={{ fontSize: "25px" }}>
              Safety|Security|Punctuality
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
