import axios from "axios";
class UserService {
  verify(login) {
    return axios.post("http://localhost:9000/auth/signin", login);
  }
  createAccount(signup) {
    return axios.post("http://localhost:9000/auth/signup", signup);
  }
}

export default new UserService();
