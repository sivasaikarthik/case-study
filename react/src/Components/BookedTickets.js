import axios from "axios";
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import BookinService from "./Services/BookinService";

export class BookedTickets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservation: [],
      once: true,
    };
  }
  cancel = (pnr) => {
    let user = JSON.parse(localStorage.getItem("login"));
    console.log(
      "http://localhost:9002/booking/deletePNR/" + pnr + "/" + user.username
    );
    axios
      .put(
        "http://localhost:9002/booking/deletePNR/" + pnr + "/" + user.username
      )
      .then((res) => {
        console.log(res.data);
        alert("cancellation sucessful");
      })
      .catch((err) => {
        console.log(err);
        console.log("Check your connections");
      });
  };
  show = () => {
    /* BookinService.allUserBookings()
      .then((res) => this.setState({ reservation: res.data }))
      .catch((err) => {
        console.log(err);
        alert("check your connection");
      }); */
    let user = JSON.parse(localStorage.getItem("login"));
    //channged here
    if (this.state.once) {
      console.log(
        "http://localhost:9002/booking/userbookings/" + user.username
      );
      axios
        .get("http://localhost:9002/booking/userbookings/" + user.username)
        .then((res) => this.setState({ reservation: res.data }))
        .catch((err) => {
          console.log(err);
          alert("check your connection");
        });
      this.setState({ once: false });
    }
    let allReservations = this.state.reservation;
    console.log(allReservations);
    let result = allReservations.map((res) => {
      console.log(res);
      let b = null;
      if (res.booked) {
        b = (
          <button
            type="button"
            className="btn-danger"
            onClick={() => this.cancel(res.pnr)}
          >
            Cancel Booking
          </button>
        );
      }
      if (res.booked) {
        return (
          <div
            className="box2 text-capitalize"
            style={{ background: res.booked ? "" : "#ff9999" }}
          >
            <p>
              PNR: {res.pnr}
              <span style={{ color: "green" }}>
                <br />
                Train Number:{res.train.trainNumber}
                <br />
                Date of travelling:{res.train.date.slice(0, 10)}
                <br />
                Source:{res.train.source}({res.train.sourceTime})
              </span>
              <br />
              destination:{res.train.destination}({res.train.destinationTime})
              <br />
              passengers:
              <span>
                <Row>
                  <Col className="pl-4 ml-5">
                    {" "}
                    {res.train.passengers.map((pas) => (
                      <span>
                        {pas.name}
                        <br />
                      </span>
                    ))}{" "}
                  </Col>
                  <Col>
                    {res.seatNo.map((seat) => (
                      <span>
                        {seat}
                        <br />
                      </span>
                    ))}
                  </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>{b}</Col>
                </Row>
              </span>
            </p>
          </div>
        );
      }
      return <div></div>;
    });
    return result;
  };
  render() {
    if (true) {
      return (
        <div>
          {this.show()}
          {console.log("inside bookigs")}
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    } else {
      return <div>you are not authorized</div>;
    }
  }
}

export default BookedTickets;
