import Axios from "axios";

export const getCurrentUserInfo = () => {
  return new Promise((resolve, reject) => {
    let accessToken = localStorage.getItem("BREAER_ACCESS_TOKEN");
    Axios.get(
      `http://localhost:8080/prc391/api/users/user?email=hellopt1@gmail.com`
    ).then((response) => {
      resolve(response.data);
    });
  });
};
