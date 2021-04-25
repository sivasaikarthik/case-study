import React, { Component } from "react";
import BookedTickets from "../BookedTickets";
import MyBookings from "../MyBookings";

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: JSON.parse(localStorage.getItem("login")),
    };
  }
  render() {
    console.log(this.state.userinfo);
    return (
      <div style={{ background: "white" }}>
        <div className="container-fluid " style={{ fontSize: "40px" }}>
          Name:{this.state.userinfo.username}
          <br />
          Email:{this.state.userinfo.email}
          <br />
          Role:Customer
          <br />
        </div>
        <BookedTickets></BookedTickets>
      </div>
    );
  }
}

export default UserDetails;
