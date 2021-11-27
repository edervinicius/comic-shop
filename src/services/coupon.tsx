import axios from "axios";

const base_url = "https://619f92021ac52a0017ba4916.mockapi.io/";

const coupon = axios.create({
  baseURL: `${base_url}`,
});

export default coupon;
