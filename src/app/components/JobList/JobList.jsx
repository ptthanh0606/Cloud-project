import { Card, CardBody, CardHeader, Heading, Text } from "grommet";
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
        {joblist ? (
          joblist.map((job) => (
            <SimpleJobCard
              key={job.id}
              ownerid={job.ownerId}
              jobid={job.id}
              name={job.name}
              description={job.description}
              interviewdescription={job.interviewDescription}
              salary={job.salary}
            />
          ))
        ) : (
          <Text>No available jobs, try create one!</Text>
        )}
      </CardBody>
    </Card>
  );
};

export default JobList;
