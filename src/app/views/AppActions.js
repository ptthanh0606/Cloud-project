import Axios from "axios";
import Cookies from "js-cookie";

export const getUserObj = () => {
  return new Promise((resolve, reject) => {
    let accessToken = Cookies.get("BREAER_ACCESS_TOKEN");
    Axios.get(`http://18.141.58.245:8080/prc391/api/authentication/authenUser`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      resolve(response.data.data[0]);
    });
  });
};
