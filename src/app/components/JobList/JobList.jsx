import { Card, CardBody, CardHeader, Heading } from "grommet";
import React from "react";
import SimpleCard from "../SimpleCard/SimpleCard";

const JobList = ({ joblist }) => {
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
          My current jobs
        </Heading>
      </CardHeader>
      <CardBody margin={{ vertical: "medium" }} direction="column" gap="30px">
        {joblist.map((job) => (
          <SimpleCard
            title={job.jobtitle}
            desc={job.jobdesc}
            number={job.salary}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default JobList;
