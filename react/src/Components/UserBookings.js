import React, { Component } from "react";
import { Col } from "reactstrap";

class UserBookings extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default UserBookings;
