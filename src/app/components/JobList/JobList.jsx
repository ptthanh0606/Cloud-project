import { Card, CardBody, CardHeader, Heading } from "grommet";
import React from "react";
import SimpleJobCard from "../SimpleJobCard/SimpleJobCard";

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
          <SimpleJobCard
            title={job.jobTitle}
            desc={job.jobDesc}
            number={job.salary}
            key={job.id}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default JobList;
