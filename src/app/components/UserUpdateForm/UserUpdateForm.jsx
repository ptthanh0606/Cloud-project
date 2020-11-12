import {
  Box,
  Card,
  Heading,
  TextInput,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "grommet";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserListAtom, UserObjAtom } from "../../atoms";
import "./UserUpdateForm.scss";
import { getAllUsers, updateUserInfo } from "./UserUpdateFormActions";

const UserUpdateForm = ({
  userData: {
    id,
    organizationname,
    email,
    phonenumber,
    address,
    roleid,
    photo,
  },
  handleUpdateConfirm,
}) => {
  const setUserListAtom = useSetRecoilState(UserListAtom);
  const currentLoggedUserObject = useRecoilValue(UserObjAtom);
  const [orgName, setOrgName] = useState(organizationname);
  const [contactNumber, setContactNumber] = useState(phonenumber);
  const [addressState, setAddress] = useState(address);

  const handleClearTextFields = () => {
    setOrgName("");
    setContactNumber("");
    setAddress("");
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    updateUserInfo({
      id,
      email,
      roleid,
      photo,
      organizationName: orgName,
      phoneNumber: contactNumber,
      address: addressState,
    })
      .then(() => {
        alert("update completed!");
        getAllUsers().then((response) => {
          setUserListAtom(
            response.data.filter((user) => {
              return user.id !== currentLoggedUserObject.id;
            })
          );
        });
        handleUpdateConfirm();
      })
      .catch((err) => {
        handleUpdateConfirm();
        console.log(err);
      });
  };

  return (
    <Card
      pad={{ horizontal: "medium", vertical: "medium" }}
      background="white"
      elevation="none"
      width="823px"
      gap="medium"
      className="user-update-form-container"
    >
      <form onSubmit={handleUpdateProfile}>
        <CardBody>
          <Box margin={{ bottom: "medium" }} gap="small">
            <Box gap="medium">
              <Heading level="4" margin="none" color="primaryText">
                Organization name
              </Heading>
              <TextInput
                className="input-field"
                placeholder="Name..."
                onChange={(e) => {
                  setOrgName(e.target.value);
                }}
                value={orgName}
                required
              />
            </Box>
            <Text size="11px" color="#B5B5C3">
              Please enter your organization name
            </Text>
          </Box>
          <Box margin={{ bottom: "medium" }} gap="small">
            <Box gap="medium">
              <Heading level="4" margin="none" color="primaryText">
                How they can reach you
              </Heading>
              <TextInput
                className="input-field"
                placeholder="Contact number..."
                onChange={(e) => {
                  setContactNumber(e.target.value);
                }}
                value={contactNumber}
                required
              />
            </Box>
            <Text size="11px" color="#B5B5C3">
              People can contact you with this
            </Text>
          </Box>
          <Box margin={{ bottom: "medium" }} gap="small">
            <Box gap="medium">
              <Heading level="4" margin="none" color="primaryText">
                Your location at
              </Heading>
              <TextInput
                className="input-field"
                placeholder="Your public address..."
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={addressState}
                required
              />
            </Box>
            <Text size="11px" color="#B5B5C3">
              People can find you here
            </Text>
          </Box>
        </CardBody>
        <CardFooter direction="row" justify="start" gap="small">
          <Button
            label="Update"
            className="button-profile update"
            type="submit"
          />
          <Button
            label="Clear"
            className="button-profile"
            onClick={handleClearTextFields}
          />
        </CardFooter>
      </form>
    </Card>
  );
};

export default UserUpdateForm;
