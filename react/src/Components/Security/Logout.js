/* import React, { Component } from "react";
import { Redirect } from "react-router";
class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      logout: false,
    };
  }
  logout = () => {
    localStorage.setItem("login", JSON.stringify({ roles: [] }));
    this.setState({ redirect: "/app", logout: true });
  };
  render() {
    if (this.state.logout) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
          }}
        />
      );
    }
    return <div>{this.logout()}inside admin</div>;
  }
}

export default Logout;
 */
import React from "react";

import { useHistory } from "react-router-dom";
function Logout() {
  const history = useHistory();
  let redirect = null;
  let logout = false;
  logout = () => {
    localStorage.setItem("login", JSON.stringify({ roles: [] }));
    redirect = "/app";
    logout = true;

    history.push("/first");
    window.location.reload(false);
  };

  return <div>{logout()}</div>;
}

export default Logout;
