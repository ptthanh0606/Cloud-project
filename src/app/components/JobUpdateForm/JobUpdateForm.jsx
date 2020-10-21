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
import "./JobUpdateForm.scss";

const JobUpdateForm = ({
  jobTitleProp,
  jobDescProp,
  jobSalaryProp,
  interviewDescProp,
  handleUpdateConfirmProp,
}) => {
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [jobTitle, setJobTitle] = useState(jobTitleProp);
  const [jobDesc, setJobDesc] = useState(jobDescProp);
  const [jobSalary, setJobSalary] = useState(jobSalaryProp);
  const [interviewDesc, setInterviewDesc] = useState(interviewDescProp);

  const handleClearAllTextField = () => {
    setIsNegotiable("");
    setJobTitle("");
    setJobDesc("");
    setJobSalary("");
    setInterviewDesc("");
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
        <CardBody>
          <Box margin={{ bottom: "medium" }} gap="small">
            <Box gap="medium">
              <Text size="14px">Job title</Text>
              <TextInput
                placeholder="What job you want to post?"
                value={jobTitle}
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
                value={jobDesc}
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
                value={jobSalary}
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
                value={interviewDesc}
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
            onClick={handleUpdateConfirmProp}
          />
          <Button
            label="Clear"
            className="button-profile"
            onClick={handleClearAllTextField}
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default JobUpdateForm;
