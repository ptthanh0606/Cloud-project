import { Card, CardBody, CardHeader, Heading } from "grommet";
import React from "react";
import SimpleUserCard from "../SimpleUserCard/SimpleUserCard";

const UserList = ({ userlist }) => {
  return (
    <Card
      className="usercard-container"
      pad={{ horizontal: "medium", vertical: "medium" }}
      background="white"
      elevation="none"
      width="603px"
    >
      <CardHeader direction="row" justify="between" align="center">
        <Heading level="4" margin="none" color="primaryText">
          All users in the system
        </Heading>
      </CardHeader>
      <CardBody margin={{ vertical: "medium" }} direction="column" gap="30px">
        {userlist.map((user) => (
          <SimpleUserCard
            key={user.id}
            organizationname={user.organizationName}
            id={user.id}
            email={user.email}
            phonenumber={user.phoneNumber}
            address={user.address}
            roleid={user.roleId}
            photo={user.photo}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default UserList;
