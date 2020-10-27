import { Box, Text } from "grommet";
import { FormPreviousLink } from "grommet-icons/icons/FormPreviousLink";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import JobList from "../../components/JobList/JobList";
import JobMangeForm from "../../components/JobMangeForm/JobMangeForm";
import "./ManageJobPage.scss";

const ManageJobPage = () => {
  const history = useHistory();

  const handleBackLink = () => {
    history.goBack();
  };

  const [jobList] = useState([
    {
      id: "1",
      jobTitle: "Intern frontend shit",
      jobDesc: "Hiii",
      salary: "3000",
    },
    {
      id: "2",
      jobTitle: "Intern frontend shit",
      jobDesc: "Hiii",
      salary: "3000",
    },
    {
      id: "3",
      jobTitle: "Intern frontend shit",
      jobDesc: "Hiii",
      salary: "3000",
    },
  ]);

  return (
    <Box
      pad={{ horizontal: "xlarge", bottom: "large" }}
      className="manage-jobs-page-container"
    >
      <Box margin={{ vertical: "medium" }} direction="row">
        <Box
          direction="row"
          onClick={handleBackLink}
          gap="small"
          align="center"
        >
          <FormPreviousLink color="brand" className="back-icon" />
          <Text size="14px" weight="bold" color="brand">
            Find another job
          </Text>
        </Box>
      </Box>
      <Box direction="row" gap="40px">
        <JobMangeForm />
        <JobList joblist={jobList} />
      </Box>
    </Box>
  );
};

export default ManageJobPage;
