import { Anchor, Box, Button, Heading, Text, TextInput } from "grommet";
import { FormNext } from "grommet-icons/icons/FormNext";
import { Google } from "grommet-icons/icons/Google";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import "./CreateAccountForm.scss";

const CreateAccountForm = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [orgName, setOrgName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoadingState] = useState(false);
  const [isField1Valid, setIsField1Valid] = useState(false);
  const [firstInputStateClassName, setFirstInputStateClassName] = useState(
    "input-area"
  );
  const [secondInputStateClassName, setSecondInputStateClassName] = useState(
    "input-area password hidden"
  );
  const [loadText, setLoadText] = useState("");

  const handleRouteToSignin = () => {
    setLoadText("");
    setLoadingState(true);
    setTimeout(() => {
      history.push("login");
    }, 1000);
  };

  const handleNextInputStateTransition = (e) => {
    if (!!userEmail && !!orgName && !isField1Valid) {
      setFirstInputStateClassName("input-area slide-left");
      setTimeout(() => {
        setFirstInputStateClassName("input-area slide-left hidden");
        setTimeout(() => {
          setSecondInputStateClassName("input-area password");
          setTimeout(() => {
            setSecondInputStateClassName("input-area password appear");
            setIsField1Valid(true);
          }, 500);
        }, 100);
      }, 500);
    }
    
    if (!!password && !!confirmPassword && password.match(confirmPassword)) {
      setLoadText("");
      setLoadingState(true);
      setTimeout(() => {
        history.push("/");
      }, 5000);
    }
  };

  return (
    <Box className="create-account-form-container" height="100%">
      <Box
        pad={{ horizontal: "large", vertical: "xlarge" }}
        justify="between"
        height="100%"
        tag="form"
        className={isLoading && "hidden"}
      >
        <Box gap="small">
          <Heading level="2" color="primaryText" margin="none">
            Login
          </Heading>
          <Text color="secondaryText" size="small">
            Already have an account?{" "}
            <Anchor className="help-text" onClick={handleRouteToSignin}>
              Sign in
            </Anchor>
          </Text>
        </Box>

        <Box className={firstInputStateClassName}>
          <Box gap="small">
            <Text size="xsmall" color="primaryText" weight={600}>
              Your email
            </Text>
            <TextInput
              name="userEmail"
              type="email"
              required
              placeholder="Email.."
              className="input-field"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Box>
          <Box margin={{ top: "medium" }} gap="small">
            <Text size="xsmall" color="primaryText" weight={600}>
              Your organization name
            </Text>
            <TextInput
              name="orgName"
              required
              placeholder="Org name.."
              className="input-field"
              onChange={(e) => setOrgName(e.target.value)}
            />
          </Box>
        </Box>

        <Box className={secondInputStateClassName}>
          <Box gap="small">
            <Text size="xsmall" color="primaryText" weight={600}>
              Your password
            </Text>
            <TextInput
              name="userPassword"
              type="password"
              required
              placeholder="Password.."
              className="input-field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box margin={{ top: "medium" }} gap="small">
            <Text size="xsmall" color="primaryText" weight={600}>
              Confirm password
            </Text>
            <TextInput
              name="userConfirmPassword"
              type="password"
              required
              placeholder="Confirm password.."
              className="input-field"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>
        </Box>

        <Box direction="row" justify="between" wrap>
          <Button
            className="button sign-in-google"
            margin={{ bottom: "small" }}
          >
            <Box direction="row" gap="small" align="center">
              <Google color="plain" />
              <Text size="small">Or Sign in with Google</Text>
            </Box>
          </Button>
          <Button
            className="button sign-in"
            margin={{ bottom: "small" }}
            onClick={handleNextInputStateTransition}
          >
            <Box direction="row" gap="small" align="center">
              <Text size="small">Next: Set up password</Text>
              <FormNext color="white" />
            </Box>
          </Button>
        </Box>
      </Box>

      <Box
        direction="column"
        align="center"
        justify="center"
        height="100%"
        className={!isLoading && "hidden"}
      >
        <Box gap="medium">
          <PacmanLoader loading={isLoading} color="#DADADA" size="20px" />
          <Text size="small" color="secondaryText" textAlign="center">
            {loadText}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateAccountForm;
