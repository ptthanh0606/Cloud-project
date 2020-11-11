import Axios from "axios";

export const getJobDetail = (id) => {
  return new Promise((resolve, reject) => {
    Axios.get(`http://localhost:8080/prc391/api/jobs/search?id=${id}`).then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};

export const getOwnerDetail = (ownerId) => {
  return new Promise((resolve, reject) => {
    Axios.get(`http://localhost:8080/prc391/api/users/user?id=${ownerId}`).then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};
