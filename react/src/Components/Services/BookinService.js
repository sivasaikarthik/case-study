import axios from "axios";

class BookingService {
  seatsLeft(coachID) {
    return axios.get("http://localhost:9001/all/seatsLeft" + coachID);
  }
  allUserBookings() {
    return axios.get("http://localhost:9001/authUser/bookings");
  }
  cancel(pnr) {
    return axios.put("http://localhost:9001/authUser/bookings" + pnr);
  }
}

export default new BookingService();
