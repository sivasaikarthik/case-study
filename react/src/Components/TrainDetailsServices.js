import axios from "axios";

class TrainDetailsService {
  getTrain() {
    return axios.get("http://localhost:9000/allTrains");
  }
  getTrainId(id) {
    return axios.get("http://localhost:9000/allTrains/" + id);
  }
  SearchTrain(day, source, destination) {
    return axios.get(
      "http://localhost:9000/searchTrains/" +
        day +
        "/" +
        source +
        "/" +
        destination
    );
  }
  deleteTrain(id) {
    return axios.delete("http://localhost:9000/deleteTrain/" + id);
  }
  addTrain(dup) {
    return axios.post("http://localhost:9000/addTrain", dup);
  }
}

export default new TrainDetailsService();
