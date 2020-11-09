import { Box, Text } from "grommet";
import React, { useEffect } from "react";
import { FormPreviousLink } from "grommet-icons/icons/FormPreviousLink";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserListAtom } from "../../atoms";
import "./ManageUserPage.scss";
import { getAllUsers } from "./ManageUserPageActions";
import UserList from "../../components/UserList/UserList";

const ManageUserPage = () => {
  const [UserListState, setUserListState] = useRecoilState(UserListAtom);
  const history = useHistory();

  const handleBackLink = () => {
    history.goBack();
  };

  useEffect(() => {
    getAllUsers().then((response) => {
      setUserListState([response.data]);
    });
  }, [setUserListState]);

  return (
    <Box
      pad={{ horizontal: "xlarge", bottom: "large" }}
      className="manage-users-page-container"
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
            Back
          </Text>
        </Box>
      </Box>
      <Box direction="row" gap="40px">
        <UserList userlist={UserListState} />
      </Box>
    </Box>
  );
};

export default ManageUserPage;
