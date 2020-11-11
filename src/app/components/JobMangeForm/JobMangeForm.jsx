import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CheckBox,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import { Money } from "grommet-icons/icons";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsAdminAtom, JobListAtom, UserObjAtom } from "../../atoms";
import { getAllJobsByOwnerID } from "../ConfirmJobDeletePopup/ConfirmJobDeletePopupActions";
import "./JobMangeForm.scss";
import { insertJob, getAllJobs } from "./JobMangeFormActions";

const JobManageForm = () => {
  const currentLoggedUserObject = useRecoilValue(UserObjAtom);
  const isAdmin = useRecoilValue(IsAdminAtom);
  const setJobListAtom = useSetRecoilState(JobListAtom);
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [jobname, setJobTitle] = useState("");
  const [jobdescription, setJobDesc] = useState("");
  const [jobsalary, setJobSalary] = useState("");
  const [jobinterviewdescription, setInterviewDesc] = useState("");

  const handleClearAllTextField = () => {
    setIsNegotiable(false);
    setJobTitle("");
    setJobDesc("");
    setJobSalary("");
    setInterviewDesc("");
  };

  const handleAddJob = (event) => {
    event.preventDefault();
    insertJob({
      id: Math.floor(Math.random() * 100),
      name: jobname,
      description: jobdescription,
      salary: isNegotiable ? 0 : jobsalary,
      interviewDescription: jobinterviewdescription,
      ownerId: currentLoggedUserObject.id,
    }).then(() => {
      alert("added!");
      if (isAdmin) {
        getAllJobs().then((response) => {
          setJobListAtom(response.data);
        });
      } else {
        getAllJobsByOwnerID(currentLoggedUserObject.id).then((response) => {
          setJobListAtom(response.data);
        });
      }
    });
  };

  return (
    <Card
      pad={{ horizontal: "medium", vertical: "medium" }}
      background="white"
      elevation="none"
      gap="medium"
      className="job-manage-form-container"
      basis="1/2"
    >
      <form onSubmit={handleAddJob}>
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
            label="Submit"
            type="submit"
            className="button-profile submit"
            // onClick={handleAddJob}
          />
          <Button
            label="Clear"
            className="button-profile"
            onClick={handleClearAllTextField}
          />
        </CardFooter>
      </form>
    </Card>
  );
};

export default JobManageForm;
