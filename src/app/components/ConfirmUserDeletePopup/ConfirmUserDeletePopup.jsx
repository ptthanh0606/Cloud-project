import { Box, Button } from "grommet";
import React from "react";
import { Modal } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { UserListAtom } from "../../atoms";
import "./ConfirmUserDeletePopup.scss";
import {
  // eslint-disable-next-line no-unused-vars
  deleteSelectedUser,
  // eslint-disable-next-line no-unused-vars
  getAllUsers,
} from "./ConfirmUserDeletePopupActions";

// eslint-disable-next-line no-unused-vars
const ConfirmJobDeletePopup = ({
  userid,
  closeDialogProp,
  handleRemovalJobProp,
}) => {
  // eslint-disable-next-line no-unused-vars
  const setUserListState = useSetRecoilState(UserListAtom);

  const handleDeleteJob = () => {
    alert("Action is being pending due to get all users API");
    // Continue when getAllUsers API is completed!
    // deleteSelectedUser(userid).then(() => {
    //   handleRemovalJobProp();
    //   getAllUsers().then((response) => {
    //     setUserListState(response.data); // Fix
    //   });
    // });
  };
  return (
    <div className="ConfirmDeletePopup-container">
      <Modal.Header closeButton>
        <Modal.Title>Destruction action confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to remove selected user?</Modal.Body>
      <Box
        direction="row"
        gap="14px"
        justify="end"
        margin={{ vertical: "20px", horizontal: "20px" }}
      >
        <Button primary className="button" onClick={handleDeleteJob}>
          Sure
        </Button>
        <Button secondary className="button" onClick={closeDialogProp}>
          No
        </Button>
      </Box>
    </div>
  );
};

export default ConfirmJobDeletePopup;
