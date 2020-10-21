import React from "react";
import JobUpdateForm from "../JobUpdateForm/JobUpdateForm";
import "./JobUpdateDialog.scss";

const JobUpdateDialog = ({
  jobDataProp,
  closeDialogProp,
  handleUpdateConfirmProp,
}) => {
  return (
    <JobUpdateForm
      jobTitleProp={jobDataProp.jobTitle}
      jobDescProp={jobDataProp.jobDesc}
      jobSalaryProp={jobDataProp.jobSalary}
      interviewDescProp={jobDataProp.interviewDesc}
      handleUpdateConfirmProp={handleUpdateConfirmProp}
    />
  );
};

export default JobUpdateDialog;
