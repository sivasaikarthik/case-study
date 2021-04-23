import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { FiLogIn, SiGnuprivacyguard, FaTrain } from "react-icons/all";
function DefaultNav() {
  return (
    <div>
      <nav style={{ background: "black" }} className="pb-3 pt-3">
        <Link className="link pl-2 pr-5" to="/first">
          <FaTrain></FaTrain> Railway Booking System
        </Link>

        <Link
          to="/signup"
          style={{ float: "right", color: "white" }}
          className="pr-1"
        >
          <SiGnuprivacyguard></SiGnuprivacyguard>
          Signup
        </Link>
        <Link
          to="/login"
          style={{ float: "right", color: "white" }}
          className="pr-2"
        >
          <FiLogIn className="pt-1"> </FiLogIn>Login
        </Link>
      </nav>
    </div>
  );
}

export default DefaultNav;
