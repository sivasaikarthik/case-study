import axios from "axios";
import React, { Component } from "react";

class AllUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alluser: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:9001/auth/alluser")
      .then((res) => {
        this.setState({ alluser: res.data });
        console.log("inside");
      })
      .catch((err) => console.log);
  }
  all = () => {
    let users = this.state.alluser;
    return users.map((user) => {
      return (
        <tr>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div style={{ background: "white" }}>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            {this.all()}
          </table>
        </div>
      </div>
    );
  }
}

export default AllUser;
