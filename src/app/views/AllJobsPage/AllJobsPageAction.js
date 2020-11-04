import Axios from "axios";

export const getPreviewJob = () => {
  return Axios.get("http://localhost:8080/prc391/api/jobs/search");
};
