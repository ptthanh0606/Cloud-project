import { Box, Button } from "grommet";
import React from "react";
import { Modal } from "react-bootstrap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsAdminAtom, JobListAtom, UserObjAtom } from "../../atoms";
import "./ConfirmJobDeletePopup.scss";
import { deleteSelectedJob, getAllJobs, getAllJobsByOwnerID } from "./ConfirmJobDeletePopupActions";

const ConfirmJobDeletePopup = ({
  jobid,
  closeDialogProp,
  handleRemovalJobProp,
}) => {
  const setJobListAtom = useSetRecoilState(JobListAtom);
  const isAdmin = useRecoilValue(IsAdminAtom);
  const currentLoggedUserObject = useRecoilValue(UserObjAtom);

  const handleDeleteJob = () => {
    deleteSelectedJob(jobid).then(() => {
      handleRemovalJobProp();
      if (isAdmin) {
        getAllJobs().then((response) => {
          setJobListAtom(response.data);
        });
      } else {
        getAllJobsByOwnerID(currentLoggedUserObject.id).then((response) => {
          setJobListAtom(response.data);
        });
      }
    });
  };
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
