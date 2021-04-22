import React, { Component } from "react";
import { Col, Form, Row, Label, FormGroup, Input } from "reactstrap";

class BookingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "",
      passengers: [],
      booking: JSON.parse(localStorage.getItem("booking")),
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
  onAddPassender = () => {
    const { name, age, gender, passengers } = this.state;

    const d = {
      name: name,
      age: age,
      gender: gender,
    };
    let pas = passengers;
    pas.push(d);
    this.setState({
      passengers: pas,
      name: "",
      age: "",
      gender: "",
    });
    console.log(passengers);
  };

  reservation = () => {
    const { booking, passengers } = this.state;
    let dup = {
      trainNumber: booking.trainNumber,
      date: booking.date,
      personId: "karthik",
      passengers: passengers,
      classType: booking.coachType,
      source: booking.source,
      destination: booking.destination,
      sourceTime: booking.sourceTime,
      destinationTime: booking.destinationTime,
      cost: booking.cost * passengers.length,
    };
    console.log("final booking details", dup);
  };
  render() {
    const { booking, passengers } = this.state;
    console.log();
    return (
      <div>
        <Row>
          <Col>
            <div class="container box text-capitalize">
              <h2 className="center">Reservation Details</h2>

              <table class="table">
                <tbody>
                  <tr>
                    <td>Train Number </td>
                    <td>{booking.trainNumber}</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>{booking.date}</td>
                  </tr>
                  <tr>
                    <td>Passenger Details</td>
                    <td>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Age</th>
                          <th>gender</th>
                        </tr>
                      </thead>
                      {passengers.map((pas) => {
                        return (
                          <tr>
                            <td>{pas.name}</td>
                            <td>{pas.age}</td>
                            <td>{pas.gender}</td>
                          </tr>
                        );
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td>class Type</td>
                    <td>{booking.coachType}</td>
                  </tr>
                  <tr>
                    <td>source</td>
                    <td>{booking.source}</td>
                  </tr>
                  <tr>
                    <td>source time</td>
                    <td>{booking.sourceTime}</td>
                  </tr>
                  <tr>
                    <td>Destination</td>
                    <td>{booking.destination}</td>
                  </tr>
                  <tr>
                    <td>Destination time</td>
                    <td>{booking.destinationTime}</td>
                  </tr>
                  <tr>
                    <td>Cost</td>
                    <td>{booking.cost * passengers.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="center">
              <button
                onClick={this.reservation}
                type="button"
                class="btn btn-success"
              >
                Add Passenger
              </button>
            </div>
          </Col>
          <Col>
            {" "}
            <div className=" box">
              {" "}
              <h3 className="center text-capitalize">
                {" "}
                Please fill passenger details{" "}
              </h3>{" "}
              <div className="pl-3 pr-3 pt-3 pb-3">
                {" "}
                <label for="Name">Name</label>{" "}
                <Input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Passenger Name "
                  value={this.state.name}
                  onChange={this.changeHandler}
                />{" "}
                <label for="Age">Age</label>{" "}
                <Input
                  type="number"
                  name="age"
                  id="Age"
                  placeholder="Age "
                  value={this.state.age}
                  onChange={this.changeHandler}
                />{" "}
                <p>Please select your gender:</p>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={this.changeHandler}
                />
                <label for="male">Male</label>
                <br />
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={this.changeHandler}
                />
                <label for="female">Female</label>
                <br />
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  onChange={this.changeHandler}
                />
                <label for="other">Other</label>
                <div className="center">
                  <button
                    onClick={this.onAddPassender}
                    type="button"
                    class="btn btn-success"
                  >
                    Add Passenger
                  </button>
                </div>
              </div>{" "}
            </div>{" "}
          </Col>{" "}
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default BookingPage;
