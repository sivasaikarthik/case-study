import React from "react";
import { Col, Row } from "reactstrap";
import BookinService from "./Services/BookinService";
import { WiTrain } from "react-icons/all";
import { useHistory } from "react-router-dom";

function Search(props) {
  const history = useHistory();
  let source = localStorage.getItem("sou");
  let destination = localStorage.getItem("des");
  const trains = JSON.parse(localStorage.getItem("train"));
  let date = localStorage.getItem("date");
  /*  let redirect = false; */
  console.log(date);

  const bookingPage = (
    trainNumber,
    date,
    coacheType,
    source,
    destination,
    sourceTime,
    destinationTime,
    cost
  ) => {
    let booking = {
      trainNumber: trainNumber,
      date: date,
      coacheType: coacheType,
      source: source,
      destination: destination,
      sourceTime: sourceTime,
      destinationTime: destinationTime,
      cost: cost,
    };
    /* console.log("addd", booking); */
    localStorage.setItem("booking", JSON.stringify(booking));
    /*  redirect = true; */
    history.push("/booking");
  };
  const searchView = trains.map((train) => {
    let trainStopsAndTimes = train.trainStopsAndTimes;
    let result = station(trainStopsAndTimes);
    let seatAvaliable = (trainNumber, date, costOfSleeper) => {
      console.log();
      /*  BookinService.seatsLeft(trainNumber + "" + date)
    .then((res) => (coaches = res.date))
    .catch((err) => {
      console.log(err);
      alert("please check connection with server and retry");
    }); */
      let coaches = [
        { coacheType: "Sleeper class", noOfCoaches: 12, noOfSeats: 115 },
        { coacheType: "third class", noOfCoaches: 3, noOfSeats: 115 },
        { coacheType: "Secound class", noOfCoaches: 2, noOfSeats: 115 },
      ];
      const seatAvaliable = coaches.map((coache) => {
        let dummy = (coache.noOfCoaches - 1) * 100 + coache.noOfSeats;
        let no = coache.noOfCoaches;
        let red = false;
        if (no == 0) {
          red = true;
        }
        let cost = costOfSleeper;
        switch (coache.coacheType) {
          case "Third Ac":
            cost = cost + 0.4 * cost;
            break;
          case "Secound Ac":
            cost = cost + 0.55 * cost;
            break;
          case "First Ac":
            cost = cost + 0.65 * cost;
            break;
          case "Chair Class":
            cost = cost - 0.2 * cost;
          default:
            cost = cost + cost;
        }

        return (
          <Col style={{ color: red ? "red" : "darkgreen" }}>
            <div className="box3">
              <p className="text-capitalize">
                {coache.coacheType} <span>{dummy}</span>
              </p>
              cost:{cost}
              <button
                className="btn btn-outline-light center"
                style={{ background: red ? "red" : "green" }}
                onClick={() =>
                  bookingPage(
                    train.trainNumber,
                    date,
                    coache.coacheType,
                    source,
                    destination,
                    result.sourceTime,
                    result.destinationTime,
                    cost
                  )
                }
              >
                Book
              </button>
            </div>
          </Col>
        );
      });
      return seatAvaliable;
    };
    if (result.exist) {
      return (
        <div className="box3" style={{ background: "white" }}>
          <p className="pr-3 pl-3 pt-3 ">
            <b
              style={{ color: "red", textTransform: "capitalize" }}
              className="pr-3"
            >
              {" "}
              {train.trainName}
            </b>
            <span className="pr-5">{train.trainNumber} </span>
            <span className="text-capitalize">
              {" "}
              {result.source}({result.sourceTime})
            </span>{" "}
            <WiTrain></WiTrain>
            <span className="text-capitalize float-right pr-3">
              {" "}
              {result.destination}({result.destinationTime})
            </span>
          </p>
          <Row>{seatAvaliable(train.trainNumber, date, result.cost)}</Row>
        </div>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  });
  /*  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/booking",
        }}
      />
    );
  } */
  return <div>{searchView}</div>;
}

function station(props) {
  let cost, sourceTime, destinationTime;
  let source = localStorage.getItem("sou");
  let destination = localStorage.getItem("des");
  let i = 0;
  let j = 0;
  let k = 0;

  cost = 0;
  while (i < props.length) {
    console.log(props[i].cost);
    if (props[i].stop == source) {
      j = j + 1;
      sourceTime = props[i].time.slice(11, 16);
    } else if (props[i].stop == destination) {
      j = j + 1;
      cost = cost + props[i].cost;
      destinationTime = props[i].time.slice(11, 16);
      break;
    } else if (j == 1) {
      cost = cost + props[i].cost - 0.2 * props[i].cost;
      k = k + 1;
    } else {
    }

    i = i + 1;
  }

  if (j == 2) {
    console.log("train with" + cost + " " + destinationTime + " " + sourceTime);
    return {
      cost: cost,
      source: source,
      destination: destination,
      destinationTime: destinationTime,
      sourceTime: sourceTime,
      noOfStops: k,
      exist: true,
    };
  }
  return { exist: false };
}

export default Search;
