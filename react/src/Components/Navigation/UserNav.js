import React from "react";
import { Link } from "react-router-dom";
import { FaTrain, BiLogOut } from "react-icons/all";
function UserNav() {
  return (
    <div>
      <nav style={{ background: "black" }} className="pb-3 pt-3">
        <Link className="link pl-2 pr-5" to="/first">
          <FaTrain></FaTrain> Railway Booking System
        </Link>

        <Link className="float-right " style={{ color: "white" }} to="/logout">
          <BiLogOut></BiLogOut> Logout
        </Link>
        <Link
          className="float-right pr-4"
          style={{ color: "white" }}
          to="/myBookings"
        >
          Bookings
        </Link>
        <Link
          className="float-right pr-4"
          style={{ color: "white" }}
          to="/userinfo"
        >
          User Details
        </Link>
      </nav>
    </div>
  );
}

export default UserNav;
