import Axios from "axios";

export const updateJobDetail = (payload) => {
  return new Promise((resolve, reject) => {
    Axios.put("http://18.141.58.245:8080/prc391/api/jobs/update", payload).then(
      (response) => {
        resolve(response.data);
      }
    );
  });
};


