import React, { Component } from "react";
import { location } from "react-router-dom";
class Search extends Component {
  componentDidMount() {
    const { property_id } = this.props.state.location;
    console.log("property_id", property_id);
  }
  render() {
    return (
      <div>
        <div>inside search</div>;
      </div>
    );
  }
}

export default Search;
