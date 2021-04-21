import React from "react";
import { Col, Row } from "reactstrap";

function Search() {
  const trains = JSON.parse(localStorage.getItem("train"));
  let source = localStorage.getItem("sou");
  let destination = localStorage.getItem("des");
  const searchView = trains.map((train) => {
    let trainStopsAndTimes = train.trainStopsAndTimes;
    let result = station(trainStopsAndTimes);
    if (result.exist) {
      return (
        <div>
          {train.trainNumber}
          {train.trainName}
          {source}
          {result.sourceTime}
          {destination}
          {result.destinationTime}
          {result.cost}
        </div>
      );
    } else {
      return <div></div>;
    }
  });
  return (
    <div className="box3" style={{ background: "white" }}>
      {searchView}
    </div>
  );
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
      destinationTime: destinationTime,
      sourceTime: sourceTime,
      noOfStops: k,
      exist: true,
    };
  }
  return { exist: false };
}

export default Search;
