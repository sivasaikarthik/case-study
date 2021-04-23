import React, { Component } from "react";

class ReservationLook extends Component {
  render() {
    this.props.all.map((a) => console.log(a.personId));

    return <div>{}</div>;
  }
}

export default ReservationLook;
