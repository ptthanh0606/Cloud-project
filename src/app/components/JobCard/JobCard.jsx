import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Avatar,
  Heading,
} from "grommet";

import { truncateDesc } from "../../_helper";
import "./JobCard.scss";
import { useHistory } from "react-router-dom";

const JobCard = ({ jobid, uploaddate, jobtitle, jobdesc, price }) => {
  const history = useHistory();

  const handleJobCardClick = () => {
    history.push(`/job/${jobid}/detail`);
  };

  return (
    <Card
      pad={{ horizontal: "medium", vertical: "medium" }}
      background="white"
      elevation="none"
      width="314px"
      className="job-card-container"
      onClick={handleJobCardClick}
    >
      <CardHeader direction="row" justify="between" align="center">
        <Text color="#B5B5C3" size="14px">
          {uploaddate}
        </Text>
        <Avatar className="org-avatar" src="https://i.imgur.com/xIkIdf8.png" />
      </CardHeader>
      <CardBody margin={{ vertical: "medium" }}>
        <Heading level="4" margin="none">
          {jobtitle}
        </Heading>
        <Text margin={{ top: "20px" }} size="14px" color="#80808F">
          {truncateDesc(jobdesc, 200)}
        </Text>
      </CardBody>
      <CardFooter direction="row" justify="between" align="end">
        <Text color="#6993FF" size="14px" margin={{ top: "medium" }}>
          more...
        </Text>
        <Text color="#6993FF" margin={{ top: "medium" }}>
          {price ? `~ $${price}` : "Negotiable"}
        </Text>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
