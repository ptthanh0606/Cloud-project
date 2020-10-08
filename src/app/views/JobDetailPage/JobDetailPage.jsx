import { Box, Text } from "grommet";
import React from "react";
import JobDetailCard from "../../components/JobDetailCard/JobDetailCard";
import { FormPreviousLink } from "grommet-icons";
import "./JobDetailPage.scss";
import { useHistory } from "react-router-dom";

const JobDetailPage = () => {
  const history = useHistory();

  const handleBackLink = () => {
    history.goBack();
  };

  return (
    <Box
      pad={{ horizontal: "xlarge", bottom: "large" }}
      className="job-detail-page-container"
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
      <JobDetailCard />
    </Box>
  );
};

export default JobDetailPage;
