import { Avatar, Box, Card, Heading, Text } from "grommet";
import React from "react";
import "./SimpleCard.scss";
import { truncateDesc } from "../../_helper";

const SimpleCard = ({ title, desc, number }) => {
  return (
    <Box
      className="simple-card-container"
      direction="row"
      align="center"
      justify="between"
    >
      <Box direction="row" gap="medium">
        <Avatar
          className="org-avatar"
          src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
        />
        <Box direction="column" justify="center">
          <Heading level="5" margin="none" color="primaryText">
            {title}
          </Heading>
          <Text size="13px" color="#B5B5C3">
            {truncateDesc(desc || "", 54)}
          </Text>
        </Box>
      </Box>
      {!!number && (
        <Card
          elevation="none"
          background="#F3F6F9"
          pad={{ horizontal: "4px", vertical: "5px" }}
        >
          <Text size="13px">{number}$</Text>
        </Card>
      )}
    </Box>
  );
};

export default SimpleCard;
