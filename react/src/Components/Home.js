import React, { Component } from "react";
import { IoSwapVertical } from "react-icons/all";
import { Col, Form, Input, Row } from "reactstrap";
import { Redirect } from "react-router-dom";
import TrainDetailsServices from "./TrainDetailsServices";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: "",
      destination: "",
      date: "",
      train: [],
      autorefre: true,
      redirect: null,
    };

    //this.searchButton = this.searchButton.bind(this);
  }

  changeHandler = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  searchTrain = () => {
    const d = new Date(this.state.date);
    const week = d.getDay();
    TrainDetailsServices.SearchTrain(
      week,
      this.state.source,
      this.state.destination
    )
      .then((res) => {
        localStorage.setItem("train", JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => alert("please check ur connection ", err));
    let trainData = this.state.train;
    console.log(this.state.train);
    localStorage.setItem("sou", this.state.source);
    localStorage.setItem("des", this.state.destination);
    localStorage.setItem("date", this.state.date);

    this.setState({ redirect: "/Search" });
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
          }}
        />
      );
    }
    return (
      <div className="homeBackground">
        <Row>
          <Col>
            <div className="box">
              <h4 className="pb-2 center">Book Tickets</h4>
              <Form className="pl-2 pb-3">
                <Row form>
                  <Col md={5}>
                    <Input
                      type="text"
                      name="source"
                      id="From"
                      placeholder="From "
                      value={this.state.source}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col md={5}>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      value={this.state.date}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={2}></Col>
                  <Col md={1}>
                    {" "}
                    <button type="button">
                      <IoSwapVertical />
                    </button>
                  </Col>
                </Row>

                <Row className="pt-2">
                  <Col md={5}>
                    <Input
                      type="text"
                      name="destination"
                      id="To"
                      placeholder="To"
                      value={this.state.destination}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col md={5}></Col>
                  <Col md={2}>
                    <button type="button" onClick={this.searchTrain}>
                      Search
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col>
            <p className="center-text div1">Pakistan Railway Booking System</p>
            <p className="center" style={{ fontSize: "25px" }}>
              Safety|Security|Punctuality
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
