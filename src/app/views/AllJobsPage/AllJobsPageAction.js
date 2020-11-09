import Axios from "axios";

// Get all jobs
export const getPreviewJob = () => {
  return new Promise((resolve, reject) => {
    Axios.get("http://localhost:8080/prc391/api/jobs/search").then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};

// Seach jobs
export const getSearchJobResult = (searchValue) => {
  return new Promise((resolve, reject) => {
    Axios.get(
      `http://localhost:8080/prc391/api/jobs/search?searchValue=${searchValue}`
    )
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
