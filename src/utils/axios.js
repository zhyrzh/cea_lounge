import axios from "axios";

export default axios.create({
  baseURL: "localhost:5000/api/v1",
  withCredentials: true,
});