import { Box, Button } from "grommet";
import React from "react";
import { Modal } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { UserListAtom } from "../../atoms";
import "./ConfirmUserDeletePopup.scss";
import {
  deleteSelectedUser,
  getAllUsers,
} from "./ConfirmUserDeletePopupActions";

const ConfirmJobDeletePopup = ({
  userid,
  closeDialogProp,
  handleRemovalJobProp,
}) => {
  const setUserListState = useSetRecoilState(UserListAtom);

  const handleDeleteJob = () => {
    deleteSelectedUser(userid)
      .then(() => {
        handleRemovalJobProp();
        getAllUsers().then((response) => {
          setUserListState(response.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
