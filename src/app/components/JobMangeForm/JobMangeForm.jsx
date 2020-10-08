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
import "./JobMangeForm.scss";

const JobManageForm = () => {
  const [isNegotiable, setIsNegotiable] = useState(false);
  return (
    <Card
      pad={{ horizontal: "medium", vertical: "medium" }}
      background="white"
      elevation="none"
      gap="medium"
      className="job-manage-form-container"
      basis="1/2"
    >
      <CardBody>
        <Box margin={{ bottom: "medium" }} gap="small">
          <Box gap="medium">
            <Text size="14px">Job title</Text>
            <TextInput
              placeholder="What job you want to post?"
              onChange={(e) => {}}
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
              onChange={(e) => {}}
              required
            />
            <Text size="11px" color="#B5B5C3">
              Please fill in job descriptions
            </Text>
          </Box>
        </Box>
        <hr className="seperator" />
        <Box margin={{ bottom: "medium", top: "medium" }} gap="small">
          <Box gap="medium">
            <Text size="14px">Subscription</Text>
            <TextInput
              icon={<Money className="money-icon" />}
              placeholder="Estimate pay"
              onChange={(e) => {}}
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
              onChange={(e) => {}}
              required
            />
          </Box>
          <Text size="11px" color="#B5B5C3">
            What to prepare before the interview...
          </Text>
        </Box>
      </CardBody>
      <CardFooter direction="row" justify="start" gap="small">
        <Button label="Submit" className="button-profile submit" />
        <Button label="Clear" className="button-profile" />
      </CardFooter>
    </Card>
  );
};

export default JobManageForm;
