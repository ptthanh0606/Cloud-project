import Axios from "axios";

export const updateJobDetail = (payload) => {
  return new Promise((resolve, reject) => {
    Axios.put("http://localhost:8080/prc391/api/jobs/update", payload).then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};

export const getAllJobs = () => {
  return new Promise((resolve, reject) => {
    Axios.get("http://localhost:8080/prc391/api/jobs/search").then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};

export const getAllJobsByOwnerID = (ownerId) => {
  return new Promise((resolve) => {
    Axios.get(
      `http://localhost:8080/prc391/api/jobs/search?ownerId=${ownerId}`
    ).then((response) => {
      resolve(response.data);
    });
  });
};
