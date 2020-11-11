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
import { useRecoilState } from "recoil";
import { UserObjAtom } from "../../atoms";
import "./UserDetailForm.scss";
import { updateUserInfo } from "./UserDetailFormActions";

const UserDetailForm = () => {
  const [currentLoggedUserObj, setCurrentUserObj] = useRecoilState(UserObjAtom);
  const [orgName, setOrgName] = useState(currentLoggedUserObj.organizationName);
  const [contactNumber, setContactNumber] = useState(
    currentLoggedUserObj.phoneNumber
  );
  const [address, setAddress] = useState(currentLoggedUserObj.address);

  const handleClearTextFields = () => {
    setOrgName("");
    setContactNumber("");
    setAddress("");
  };

  const handleUpdateProfile = () => {
    updateUserInfo({
      ...currentLoggedUserObj,
      organizationName: orgName,
      phoneNumber: contactNumber,
      address: address,
    })
      .then(() => {
        alert("update completed!");
        setCurrentUserObj({
          ...currentLoggedUserObj,
          organizationName: orgName,
          phoneNumber: contactNumber,
          address: address,
        });
      })
      .catch((err) => {
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
      className="user-detail-form-container"
    >
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
              value={address}
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
          onClick={handleUpdateProfile}
        />
        <Button
          label="Clear"
          className="button-profile"
          onClick={handleClearTextFields}
        />
      </CardFooter>
    </Card>
  );
};

export default UserDetailForm;
