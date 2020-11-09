import { Box, Grid, Text, TextInput } from "grommet";
import { Search } from "grommet-icons";
import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import JobCard from "../../components/JobCard/JobCard";
import { getPreviewJob, getSearchJobResult } from "./AllJobsPageAction";
import "./AllJobPage.scss";
import { UserObjAtom } from "../../atoms";
import { useRecoilValue } from "recoil";

const AllJobPage = () => {
  const currentLoggedUserObj = useRecoilValue(UserObjAtom);

  const [isFound, setFoundState] = useState(true);
  const [joblist, setJobList] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const addThreeJobToRow = (tempJobList, rootJobList) => {
    if (tempJobList.length) {
      rootJobList.push(tempJobList.splice(0, 3));
      addThreeJobToRow(tempJobList, rootJobList);
    }
  };

  const processJobListResponse = (data) => {
    let tempJobList = data;
    let rootJobList = [];
    addThreeJobToRow(tempJobList, rootJobList);
    return rootJobList;
  };

  const formatDate = (date) => {
    let dateObj = new Date(date);
    return dateObj.toDateString();
  };

  const handleSearchJob = (e) => {
    e.preventDefault();
    getSearchJobResult(searchValue)
      .then((response) => {
        setFoundState(true);
        setJobList(processJobListResponse(response.data));
      })
      .catch((err) => {
        console.log(err);
        setFoundState(false);
      });
  };

  useEffect(() => {
    getPreviewJob().then((response) => {
      setFoundState(true);
      setJobList(processJobListResponse(response.data));
    });
  }, []);

  return (
    <Box
      pad={{ horizontal: "xlarge", vertical: "medium" }}
      className="all-job-page-container"
    >
      <form className="search-form" onSubmit={handleSearchJob}>
        <TextInput
          icon={
            <Box onClick={handleSearchJob}>
              <Search className="white-icon" />
            </Box>
          }
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for job title, leave blank for all jobs"
          className="search-box"
        />
      </form>
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
        {currentLoggedUserObj ? (
          <UserCard
            gridArea="userCard"
            orgname={currentLoggedUserObj.organizationName}
            userdesc={currentLoggedUserObj.address}
            usermail={currentLoggedUserObj.email}
            userid={currentLoggedUserObj.id}
            isAuth={true}
          />
        ) : (
          <UserCard
            gridArea="userCard"
            orgname="Guest"
            userdesc=""
            usermail=""
            userid=""
            isAuth={false}
          />
        )}
        <Box gridArea="jobCards" gap="15px">
          {isFound ? (
            joblist.map((jobRow) => {
              return (
                <Box
                  direction="row"
                  wrap
                  gap="15px"
                  key={joblist.indexOf(jobRow)}
                >
                  {jobRow.map((job) => {
                    return (
                      <JobCard
                        key={job.id}
                        jobid={job.id}
                        jobtitle={job.name}
                        jobdesc={job.description}
                        price={job.salary}
                        uploaddate={formatDate(job.postedDate)}
                      />
                    );
                  })}
                </Box>
              );
            })
          ) : (
            <Text>Job not found! Try "Android"</Text>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default AllJobPage;
