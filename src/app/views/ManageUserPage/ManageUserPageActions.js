import Axios from "axios";

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    Axios.get(`http://18.141.58.245:8080/prc391/api/users/user`)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
