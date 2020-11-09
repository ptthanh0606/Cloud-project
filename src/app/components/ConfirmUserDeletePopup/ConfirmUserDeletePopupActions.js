import Axios from "axios";

export const deleteSelectedUser = (userid) => {
  return new Promise((resolve, reject) => {
    Axios.delete(
      `http://localhost:8080/prc391/api/users/update?id=${userid}`
    ).then((response) => {
      resolve(response.data);
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
