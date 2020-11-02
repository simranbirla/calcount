import axios from "axios";

export default axios.create({
  baseURL: `https://api.edamam.com`,
  headers: {
    "app-id": "675aa5b5",
    "app-key": "65440c93a52d65ea4be40091a66fac78",
  },
});
