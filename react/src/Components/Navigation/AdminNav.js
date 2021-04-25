import React from "react";
import { Link } from "react-router-dom";
import { FaTrain, BiLogOut } from "react-icons/all";
function AdminNav() {
  return (
    <div>
      <nav style={{ background: "black" }} className="pb-3 pt-3">
        <Link className="link pl-2 pr-5" to="/first">
          <FaTrain></FaTrain> Railway Booking System
        </Link>
        <Link className="link pr-3 pl-5" to="/AddTrainDetails">
          Add Train
        </Link>
        <Link className="link" to="/UpadteTrainDetails">
          Update Train
        </Link>
        <Link className="link pr-3 pl-2" to="/allUser">
          User Information
        </Link>
        <Link className="link " to="/allbookings">
          All Bookings
        </Link>
        <Link className="float-right " style={{ color: "white" }} to="/logout">
          <BiLogOut></BiLogOut>Logout
        </Link>
      </nav>
    </div>
  );
}

export default AdminNav;
