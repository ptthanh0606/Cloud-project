import { Box, Grid } from "grommet";
import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import JobCard from "../../components/JobCard/JobCard";

const AllJobPage = () => {
  return (
    <Box pad={{ horizontal: "xlarge", vertical: "large" }}>
      <Grid
        rows={["flex"]}
        columns={["auto", "flex"]}
        gap="40px"
        areas={[
          { name: "userCard", start: [0, 0], end: [0, 0] },
          { name: "jobCards", start: [1, 0], end: [1, 0] },
        ]}
        responsive
        fill="vertical"
      >
        <UserCard
          gridArea="userCard"
          orgname="Organization name"
          userdesc="Address Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          usermail="phanthongthanh0606@gmail.com"
        />
        <Box gridArea="jobCards" gap="15px">
          <Box direction="row" wrap gap="15px">
            <JobCard
              jobtitle="Intern front-end web developer"
              jobdesc="Outlines keep you honest. If stop  indulging in poorly thought-out metaphors driving and keep structure Outlines keep you honest. If stop  indulging in poorly thought-out metaphors driving and keep structureOutlines keep you honest. If stop  indulging in poorly thought-out metaphors driving and keep structureOutlines keep you honest. If stop  indulging in poorly thought-out metaphors driving and keep structureOutlines keep you honest. If stop  indulging in poorly thought-out metaphors driving and keep structure"
              price="1000"
              uploaddate="7 Hours Ago"
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default AllJobPage;
