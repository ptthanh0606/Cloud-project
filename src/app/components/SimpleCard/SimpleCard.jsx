import { Avatar, Box, Heading, Text } from "grommet";
import React from "react";
import "./SimpleCard.scss";

const SimpleCard = ({ title, date }) => {
  return (
    <>
      <Box
        className="simple-card-container"
        direction="row"
        align="center"
        justify="between"
      >
        <Box direction="row" gap="medium">
          <Avatar
            className="org-avatar"
            src="https://i.imgur.com/xIkIdf8.png"
          />
          <Box direction="column" justify="center">
            <Heading level="5" margin="none" color="primaryText">
              {title}
            </Heading>
            <Text size="13px" color="#B5B5C3">
              {date}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SimpleCard;
