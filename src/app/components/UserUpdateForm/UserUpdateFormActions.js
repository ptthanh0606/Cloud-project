import Axios from "axios";

export const updateUserInfo = (payload) => {
  return new Promise((resolve, reject) => {
    Axios.put(`http://18.141.58.245:8080/prc391/api/users/update`, payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    Axios.get("http://18.141.58.245:8080/prc391/api/users/user").then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};
