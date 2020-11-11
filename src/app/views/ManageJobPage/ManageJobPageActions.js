import Axios from "axios";

export const getAllJobs = () => {
  return new Promise((resolve) => {
    Axios.get("http://18.141.58.245:8080/prc391/api/jobs/search").then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};

export const getAllJobsByOwnerID = (ownerId) => {
  return new Promise((resolve) => {
    Axios.get(
      `http://18.141.58.245:8080/prc391/api/jobs/search?ownerId=${ownerId}`
    ).then((response) => {
      resolve(response.data);
    });
  });
};
