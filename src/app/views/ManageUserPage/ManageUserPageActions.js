import Axios from "axios";

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    Axios.get(`http://localhost:8080/prc391/api/users/user?email=hellopt1@gmail.com`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
