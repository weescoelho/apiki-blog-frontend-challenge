import axios from "axios";

export default axios.create({
  baseURL: "https://blog.apiki.com/wp-json/wp/v2/",
});
