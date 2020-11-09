import Axios from "axios";
import Cookies from "js-cookie";

export const sendLoginIDToken = (id_token) => {
  return new Promise((resolve, reject) => {
    Axios.get(``, {
      id_token,
    }).then((response) => {
      Cookies.set("BREAER_ACCESS_TOKEN", response.data.data.accessToken);
    });
  });
};

export const getUserObj = () => {
  return new Promise((resolve, reject) => {
    // let accessToken = Cookies.get("BREAER_ACCESS_TOKEN");
    Axios.get(
      `http://localhost:8080/prc391/api/users/user?email=hellopt1@gmail.com`
    ).then((response) => {
      console.log(response.data.data);
      resolve(response.data.data);
    });
  });
};
