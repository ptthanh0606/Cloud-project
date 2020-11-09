import { Box, Text } from "grommet";
import { FormPreviousLink } from "grommet-icons/icons/FormPreviousLink";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import JobList from "../../components/JobList/JobList";
import JobMangeForm from "../../components/JobMangeForm/JobMangeForm";
import "./ManageJobPage.scss";
import { getAllJobs, getAllJobsByOwnerID } from "./ManageJobPageActions";
import { IsAdminAtom, JobListAtom, UserObjAtom } from "../../atoms";

const ManageJobPage = () => {
  const currentLoggedUserObject = useRecoilValue(UserObjAtom);
  const isAdmin = useRecoilValue(IsAdminAtom);
  const [jobListAtom, setJobListAtom] = useRecoilState(JobListAtom);

  const history = useHistory();

  const handleBackLink = () => {
    history.goBack();
  };

  useEffect(() => {
    if (isAdmin) {
      getAllJobs().then((response) => {
        setJobListAtom(response.data);
      });
    } else {
      getAllJobsByOwnerID(currentLoggedUserObject.id).then((response) => {
        setJobListAtom(response.data);
      });
    }
  }, [setJobListAtom, isAdmin, currentLoggedUserObject]);

  return (
    <Box
      pad={{ horizontal: "xlarge", bottom: "large" }}
      className="manage-jobs-page-container"
    >
      <Box margin={{ vertical: "medium" }} direction="row">
        <Box
          direction="row"
          onClick={handleBackLink}
          gap="small"
          align="center"
        >
          <FormPreviousLink color="brand" className="back-icon" />
          <Text size="14px" weight="bold" color="brand">
            Find another job
          </Text>
        </Box>
      </Box>
      <Box direction="row" gap="40px">
        <JobMangeForm />
        <JobList joblist={jobListAtom} />
      </Box>
    </Box>
  );
};

export default ManageJobPage;
