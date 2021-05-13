import axios from "axios";

export default axios.create({
//   baseURL: "http://127.0.0.1:8000/api",
  baseURL: "https://8000-salmon-grouse-upnuo4x1.ws-us03.gitpod.io/api",
  headers: {
    "Content-type": "application/json",
  },
});
