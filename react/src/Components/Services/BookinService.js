import axios from "axios";

class BookingService {
  seatsLeft(date, trainNumber) {
    console.log(
      "http://localhost:9001/all/coaches/" + date + "/" + trainNumber
    );
    return axios.get(
      "http://localhost:9001/all/coaches/" + date + "/" + trainNumber
    );
  }
  allUserBookings() {
    let user = JSON.parse(localStorage.getItem("login"));
    let token = user.tokenType + " " + user.accessToken;
    console.log(token);
    return axios.get(
      "http://localhost:9001/authUser/userbookings" + user.username,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  cancel(pnr) {
    return axios.put("http://localhost:9001/authUser/bookings" + pnr);
  }
  booking(data) {
    let login = JSON.parse(localStorage.getItem("login"));
    let token = login.accessToken;
    console.log("Bearer " + token);
    return axios.post("http://localhost:9001/authUser/bookings", data, {
      headers: {
        Authorization: "Bearer" + " " + token,
      },
    });
  }
}

export default new BookingService();
