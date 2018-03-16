import axios from "axios";
import genUID from "uid-safe";

const AUTH_TOKEN = window.localStorage.getItem("udacity-uuid") || genUID(24).sync;
window.localStorage.setItem("udacity-uuid", AUTH_TOKEN);
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.interceptors.response.use(res => res.data, err => Promise.reject(err));

function get(path) {
  return (subpath = "") => axios.get("/" + path + "/" + subpath);
}




export default { get };
