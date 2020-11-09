import { Box, Text } from "grommet";
import React from "react";
import { useHistory } from "react-router-dom";
import { FormPreviousLink } from "grommet-icons";
import UserDetailForm from "../../components/UserDetailForm/UserDetailForm";
import "./UserDetailPage.scss";

const UserDetailPage = () => {
  const history = useHistory();

  const handleBackLink = () => {
    history.goBack();
  };

  return (
    <Box
      pad={{ horizontal: "xlarge", bottom: "large" }}
      className="user-detail-page-container"
    >
      <Box margin={{ vertical: "medium" }} direction="row">
        <Box
          direction="row"
          onClick={handleBackLink}
          gap="small"
          align="center"
        >
          <FormPreviousLink className="back-icon" />
          <Text size="14px" weight="bold" color="brand">
            All jobs
          </Text>
        </Box>
      </Box>
      <UserDetailForm />
    </Box>
  );
};

export default UserDetailPage;
