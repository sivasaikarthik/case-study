import axios from "axios";
class UserService {
  verify(login) {
    console.log(login);
    return axios.post("http://localhost:9001/auth/signin", login);
  }
  createAccount(signup) {
    console.log(signup);
    return axios.post("http://localhost:9001/auth/signup", signup);
  }
}

export default new UserService();
