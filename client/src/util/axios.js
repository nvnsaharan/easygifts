import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.blinksky.com/api/v1",
});
// 4ea9adaee37d4364a7be45d8241c8863
export default instance;
