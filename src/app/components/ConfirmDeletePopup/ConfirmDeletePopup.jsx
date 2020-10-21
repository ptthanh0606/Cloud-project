import { Box, Button } from "grommet";
import React from "react";
import { Modal } from "react-bootstrap";
import "./ConfirmDeletePopup.scss";

const ConfirmDeletePopup = ({closeDialogProp, handleRemovalJobProp}) => {
  return (
    <div className="ConfirmDeletePopup-container">
      <Modal.Header closeButton>
        <Modal.Title>Destruction action confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to remove selected job?</Modal.Body>
      <Box
        direction="row"
        gap="14px"
        justify="end"
        margin={{ vertical: "20px", horizontal: "20px" }}
      >
        <Button primary className="button"  onClick={handleRemovalJobProp}>Sure</Button>
        <Button secondary className="button" onClick={closeDialogProp}>No</Button>
      </Box>
    </div>
  );
};

export default ConfirmDeletePopup;
