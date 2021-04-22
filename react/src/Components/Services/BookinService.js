import axios from "axios";

class BookingService {
  seatsLeft(coachID) {
    return axios.get("http://localhost:9001/all/seatsLeft" + coachID);
  }
}

export default new BookingService();
