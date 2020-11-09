import Axios from "axios";

export const updateUserInfo = (payload) => {
  return new Promise((resolve, reject) => {
    Axios.put(`http://localhost:8080/prc391/api/users/update`, payload)
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
    Axios.get("http://localhost:8080/prc391/api/users").then((response) => {
      resolve(response.data);
    });
  });
};