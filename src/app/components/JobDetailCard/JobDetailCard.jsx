import { Box, Card, CardBody, CardHeader, Heading, Text } from "grommet";
import React from "react";
import SimpleCard from "../SimpleCard/SimpleCard";

const JobDetailCard = ({
  jobDetail: { description, interviewDescription, salary, postedDate },
  ownername,
}) => {
  const formatDate = (date) => {
    let dateObj = new Date(date);
    return dateObj.toDateString();
  };

  return (
    <Card
      pad={{ horizontal: "medium", vertical: "medium" }}
      background="white"
      elevation="none"
      width="full"
      className="job-card-container"
    >
      <CardHeader>
        <SimpleCard title={ownername} date={formatDate(postedDate)} />
      </CardHeader>
      <CardBody>
        <Box>
          <Heading level="4" margin={{ top: "49px" }}>
            Job detail
          </Heading>
          <Text size="14">{description}</Text>
        </Box>
        <Box>
          <Heading level="4" margin={{ top: "49px" }}>
            Interview requisition description
          </Heading>
          <Text size="14">{interviewDescription}</Text>
        </Box>
        <Box
          direction="row"
          margin={{ top: "49px" }}
          align="center"
          gap="medium"
        >
          <Heading level="4" margin="none">
            Salary:
          </Heading>
          <Text size="14" weight="bold" color="brand">
            ~ ${salary}
          </Text>
        </Box>
        <Box
          direction="row"
          margin={{ top: "29px", bottom: "none" }}
          align="center"
          gap="medium"
        >
          <Heading level="4" margin="none">
            Address:
          </Heading>
          <Text size="14">124 DTL St. W4 D8</Text>
        </Box>
        <Box
          direction="row"
          margin={{ top: "29px", bottom: "none" }}
          align="center"
          gap="medium"
        >
          <Heading level="4" margin="none">
            Contact number:
          </Heading>
          <Text size="14">+84 76 5413 668</Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default JobDetailCard;
