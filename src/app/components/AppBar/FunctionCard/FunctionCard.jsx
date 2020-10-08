import React from "react";
import { Anchor, Box, Heading, Text } from "grommet";
import { useHistory } from "react-router-dom";
import "./FunctionCard.scss";

const FunctionCard = ({ title, subtitle, to, selected }) => {
  const history = useHistory();

  const handleRouteFunctionMenu = () => {
    history.push(to);
  };

  return (
    <Box
      margin={{ right: "medium", vertical: "small" }}
      border={{
        color: "#E8EDF0",
        size: "xsmall",
        style: "solid",
        side: "right",
      }}
      pad={{ right: "large" }}
      className="function-card-container"
    >
      <Heading level="5" margin="none">
        <Anchor
          label={title}
          color={selected ? "" : "primaryText"}
          onClick={handleRouteFunctionMenu}
        />
      </Heading>
      <Text size="13">{subtitle}</Text>
    </Box>
  );
};

export default FunctionCard;
