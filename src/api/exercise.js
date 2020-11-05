import axios from "axios";

export default axios.create({
  baseURL: `https://trackapi.nutritionix.com/v2`,
  headers: {
    "x-app-id": "d01308a5",
    "x-app-key": "3ac81b516a10f0e9773556d530ada4d9",
    "Content-Type": "application/json",
  },
});
