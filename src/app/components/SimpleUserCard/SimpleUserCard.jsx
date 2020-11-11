import { Avatar, Box, Heading, Text } from "grommet";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./SimpleUserCard.scss";
import UserUpdateForm from "../UserUpdateForm/UserUpdateForm";
import ConfirmUserDeletePopup from "../ConfirmUserDeletePopup/ConfirmUserDeletePopup.jsx";

const SimpleUserCard = ({
  id,
  organizationname,
  email,
  phonenumber,
  address,
  roleid,
  photo,
}) => {
  const [isShowConfirmDialog, setShowConfirmDialogState] = useState(false);
  const [isShowJobUpdate, setShowJobUpdateState] = useState(false);
  const [userData, setUserData] = useState();

  const handleRemovalJob = () => {
    setShowConfirmDialogState(false);
  };

  const handleUpdateConfirm = () => {
    setShowJobUpdateState(false);
  };

  const handleGetUserDetailAndShowUpdateForm = () => {
    setShowJobUpdateState(true);
    setUserData({
      id,
      organizationname,
      email,
      phonenumber,
      address,
      roleid,
      photo,
    });
  };

  return (
    <>
      <Box
        className="simple-user-card-container"
        direction="row"
        align="center"
        justify="between"
      >
        <Box direction="row" gap="medium">
          <Avatar
            onClick={handleGetUserDetailAndShowUpdateForm}
            className="org-avatar"
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
          />
          <Box
            direction="column"
            justify="center"
            onClick={handleGetUserDetailAndShowUpdateForm}
          >
            <Heading level="5" margin="none" color="primaryText">
              {organizationname}
            </Heading>
            <Text size="13px" color="#B5B5C3">
              {email}
            </Text>
          </Box>
        </Box>
        <Box direction="row" gap="10px">
          <Box
            className="dots"
            justify="center"
            focusIndicator={false}
            background="#F3F6F9"
            pad="7px"
            round="6px"
            onClick={() => setShowConfirmDialogState(true)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 6.00003V15C4.5 15.8285 5.17157 16.5 6 16.5H12C12.8284 16.5 13.5 15.8285 13.5 15V6.00003H4.5Z"
                fill="#3699FF"
              />
              <path
                opacity="0.3"
                d="M10.5 3.375V3.25C10.5 2.69772 10.0523 2.25 9.5 2.25H8.5C7.94772 2.25 7.5 2.69772 7.5 3.25V3.375H4.25C3.97386 3.375 3.75 3.59886 3.75 3.875V4C3.75 4.27614 3.97386 4.5 4.25 4.5H13.75C14.0261 4.5 14.25 4.27614 14.25 4V3.875C14.25 3.59886 14.0261 3.375 13.75 3.375H10.5Z"
                fill="#3699FF"
              />
            </svg>
          </Box>
          <Modal
            show={isShowConfirmDialog}
            onHide={() => setShowConfirmDialogState(false)}
            centered
          >
            <ConfirmUserDeletePopup
              closeDialogProp={() => setShowConfirmDialogState(false)}
              handleRemovalJobProp={handleRemovalJob}
              userid={id}
            />
          </Modal>
        </Box>
      </Box>
      <Modal show={isShowJobUpdate} onHide={() => setShowJobUpdateState(false)}>
        <UserUpdateForm
          handleUpdateConfirm={handleUpdateConfirm}
          userData={userData}
        />
      </Modal>
    </>
  );
};

export default SimpleUserCard;
