import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
  Meter,
  Text,
  Heading,
  Button,
} from "grommet";
import React from "react";
import { useHistory } from "react-router-dom";
import { truncateDesc } from "../../_helper/index";
import "./UserCard.scss";

const UserCard = ({ userid, orgname, usermail, userdesc, isAuth }) => {
  const history = useHistory();

  const handleViewAccountDetail = () => {
    history.push(`/user/${userid}/user-detail`);
  };

  return (
    <Card
      className="usercard-container"
      pad={{ horizontal: "medium", vertical: "medium" }}
      background="white"
      elevation="none"
      width="314px"
      height="fit-content"
    >
      <CardHeader direction="column" gap="0">
        <Stack anchor="center">
          <Meter
            type="circle"
            size="153px"
            thickness="xsmall"
            round
            values={[
              {
                value: 85,
                color: "userCircle",
              },
            ]}
          />
          <Avatar
            className="user-avatar"
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
            size="119px"
          />
        </Stack>
        <Heading level="4" margin={{ top: "14px", bottom: "0" }}>
          {orgname}
        </Heading>
        <Text size="12px" color="#80808F">
          {usermail}
        </Text>
      </CardHeader>
      {isAuth && (
        <>
          <CardBody margin={{ vertical: "medium" }}>
            <Text textAlign="center" size="14px">
              {truncateDesc(userdesc, 90)}
            </Text>
          </CardBody>
          <CardFooter direction="row" justify="center">
            <Button
              className="viewprofile-button"
              primary
              label="View my profile"
              margin="small"
              size="small"
              color="#6993FF"
              onClick={handleViewAccountDetail}
            />
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default UserCard;
