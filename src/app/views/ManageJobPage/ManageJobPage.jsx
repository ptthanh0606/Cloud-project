import { Box, Text } from "grommet";
import { FormPreviousLink } from "grommet-icons/icons/FormPreviousLink";
import React from "react";
import { useHistory } from "react-router-dom";
import JobMangeForm from "../../components/JobMangeForm/JobMangeForm";
import "./ManageJobPage.scss";

const ManageJobPage = () => {
  const history = useHistory();

  const handleBackLink = () => {
    history.goBack();
  };

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
      <JobMangeForm />
    </Box>
  );
};

export default ManageJobPage;
