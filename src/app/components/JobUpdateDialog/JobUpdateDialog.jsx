import React from "react";
import JobUpdateForm from "../JobUpdateForm/JobUpdateForm";
import "./JobUpdateDialog.scss";

const JobUpdateDialog = ({ jobDataProp, handleUpdateConfirmProp }) => {
  return (
    <JobUpdateForm
      jobid={jobDataProp.jobid}
      ownerid={jobDataProp.ownerid}
      name={jobDataProp.name}
      description={jobDataProp.description}
      salary={jobDataProp.salary}
      interviewdescription={jobDataProp.interviewdescription}
      handleUpdateConfirmProp={handleUpdateConfirmProp}
    />
  );
};

export default JobUpdateDialog;
