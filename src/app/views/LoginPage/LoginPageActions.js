import Axios from "axios";
import Cookies from "js-cookie";

export const sendLoginIDToken = (id_token) => {
  return new Promise((resolve, reject) => {
    Axios.post(
      `http://18.141.58.245:8080/prc391/api/authentication/login?tokenId=${id_token}`
    ).then((response) => {
      Cookies.set("BREAER_ACCESS_TOKEN", response.data.data.token);
      resolve();
    });
  });
};

export const getUserObj = () => {
  return new Promise((resolve, reject) => {
    let accessToken = Cookies.get("BREAER_ACCESS_TOKEN");
    Axios.get(`http://18.141.58.245:8080/prc391/api/authentication/authenUser`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.data);
      resolve(response.data.data[0]);
    });
  });
};
