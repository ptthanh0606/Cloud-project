import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CheckBox,
  Heading,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import { Money } from "grommet-icons/icons";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsAdminAtom, JobListAtom, UserObjAtom } from "../../atoms";
import { getAllJobsByOwnerID } from "../ConfirmJobDeletePopup/ConfirmJobDeletePopupActions";
import "./JobUpdateForm.scss";
import { updateJobDetail, getAllJobs } from "./JobUpdateFormActions";

const JobUpdateForm = ({
  jobid,
  ownerid,
  name,
  description,
  salary,
  interviewdescription,
  handleUpdateConfirmProp,
}) => {
  const currentLoggedUserObject = useRecoilValue(UserObjAtom);
  const isAdmin = useRecoilValue(IsAdminAtom);
  const setJobListAtom = useSetRecoilState(JobListAtom);
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [jobname, setJobTitle] = useState(name);
  const [jobdescription, setJobDesc] = useState(description);
  const [jobsalary, setJobSalary] = useState(salary);
  const [jobinterviewdescription, setInterviewDesc] = useState(
    interviewdescription
  );

  const handleClearAllTextField = () => {
    setIsNegotiable(false);
    setJobTitle("");
    setJobDesc("");
    setJobSalary(0);
    setInterviewDesc("");
  };

  const handleUpdateJob = (event) => {
    event.preventDefault();
    updateJobDetail({
      id: jobid,
      name: jobname,
      description: jobdescription,
      salary: isNegotiable ? 0 : jobsalary,
      interviewDescription: jobinterviewdescription,
      ownerId: ownerid,
    })
      .then(() => {
        if (isAdmin) {
          getAllJobs().then((response) => {
            alert("updated!");
            setJobListAtom(response.data);
            handleUpdateConfirmProp();
          });
        } else {
          getAllJobsByOwnerID(currentLoggedUserObject.id).then((response) => {
            alert("updated!");
            setJobListAtom(response.data);
            handleUpdateConfirmProp();
          });
        }
      })
      .catch((err) => {
        handleUpdateConfirmProp();
      });
  };

  return (
    <>
      <Modal.Header closeButton>
        <Heading level="4">Update</Heading>
      </Modal.Header>
      <Card
        pad={{ horizontal: "medium", vertical: "medium" }}
        background="white"
        elevation="none"
        gap="medium"
        className="job-update-form-container"
        basis="1/2"
      >
        <form onSubmit={handleUpdateJob}>
          <CardBody>
            <Box margin={{ bottom: "medium" }} gap="small">
              <Box gap="medium">
                <Text size="14px">Job title</Text>
                <TextInput
                  placeholder="What job you want to post?"
                  value={jobname}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
                <Text size="11px" color="#B5B5C3">
                  Please enter a job title
                </Text>
              </Box>
            </Box>
            <hr className="seperator" />
            <Box margin={{ bottom: "medium", top: "medium" }} gap="small">
              <Box gap="medium">
                <Text size="14px">Job description</Text>
                <TextArea
                  placeholder="Some description about the job..."
                  onChange={(e) => setJobDesc(e.target.value)}
                  required
                  value={jobdescription}
                />
                <Text size="11px" color="#B5B5C3">
                  Please fill in job descriptions
                </Text>
              </Box>
            </Box>
            <hr className="seperator" />
            <Box margin={{ bottom: "medium", top: "medium" }} gap="small">
              <Box gap="medium">
                <Text size="14px">Salary</Text>
                <TextInput
                  type="number"
                  icon={<Money className="money-icon" />}
                  placeholder="Estimate pay"
                  onChange={(e) => setJobSalary(e.target.value)}
                  value={jobsalary}
                  required
                  disabled={isNegotiable}
                />
              </Box>
              <Box align="end">
                <CheckBox
                  checked={isNegotiable}
                  label="Negotiable?"
                  onChange={() => setIsNegotiable(!isNegotiable)}
                />
              </Box>
            </Box>
            <hr className="seperator" />
            <Box margin={{ bottom: "medium", top: "medium" }} gap="small">
              <Box gap="medium">
                <Text size="14px">Interview description</Text>
                <TextArea
                  placeholder="Description..."
                  onChange={(e) => setInterviewDesc(e.target.value)}
                  value={jobinterviewdescription}
                  required
                />
              </Box>
              <Text size="11px" color="#B5B5C3">
                What to prepare before the interview...
              </Text>
            </Box>
          </CardBody>
          <CardFooter direction="row" justify="start" gap="small">
            <Button
              label="Update"
              className="button-profile submit"
              type="submit"
            />
            <Button
              label="Clear"
              className="button-profile"
              onClick={handleClearAllTextField}
            />
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default JobUpdateForm;
