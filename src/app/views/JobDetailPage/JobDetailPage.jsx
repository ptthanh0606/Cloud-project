import { Box, Text } from "grommet";
import React, { useEffect, useState } from "react";
import JobDetailCard from "../../components/JobDetailCard/JobDetailCard";
import { FormPreviousLink } from "grommet-icons";
import "./JobDetailPage.scss";
import { useHistory, useParams } from "react-router-dom";
import { getJobDetail, getOwnerDetail } from "./JobDetailPageAction";

const JobDetailPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState();
  const [ownerDetail, setOwnerDetail] = useState("");

  const handleBackLink = () => {
    history.goBack();
  };

  useEffect(() => {
    getJobDetail(id).then((response) => {
      setJobDetail(response.data[0]);
      getOwnerDetail(response.data[0].ownerId).then((ownerList) => {
        setOwnerDetail(ownerList.data[0]);
      });
    });
  }, [id]);

  return (
    <Box
      pad={{ horizontal: "xlarge", bottom: "large" }}
      className="job-detail-page-container"
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
      {jobDetail && (
        <JobDetailCard jobDetail={jobDetail} ownerdetail={ownerDetail} />
      )}
    </Box>
  );
};

export default JobDetailPage;
