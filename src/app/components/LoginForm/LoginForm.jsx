import { Anchor, Box, Button, Heading, Text, TextInput } from "grommet";
import { FormNext } from "grommet-icons/icons/FormNext";
import { Google } from "grommet-icons/icons/Google";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import "./LoginForm.scss";

const LoginForm = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setLoadingState] = useState(false);
  const [loadText, setLoadText] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userEmail, userPassword);
    setLoadText("Login in");
    setLoadingState(true);
    setTimeout(() => {
      history.push("/");
    }, 5000);
  };

  const handleRouteToCreateAccount = () => {
    setLoadText("");
    setLoadingState(true);
    setTimeout(() => {
      history.push("create-account");
    }, 1000);
  };

  return (
    <Box className="login-form-container" height="100%">
      <Box
        pad={{ horizontal: "large", vertical: "xlarge" }}
        justify="between"
        height="100%"
        tag="form"
        method="POST"
        onSubmit={handleLogin}
        className={isLoading && "hidden"}
      >
        <Box gap="small">
          <Heading level="2" color="primaryText" margin="none">
            Login
          </Heading>
          <Text color="secondaryText" size="small">
            Don't have an account?{" "}
            <Anchor className="help-text" onClick={handleRouteToCreateAccount}>
              Create an account
            </Anchor>
          </Text>
        </Box>

        <Box>
          <Box gap="small">
            <Text size="xsmall" color="primaryText" weight={600}>
              Your email
            </Text>
            <TextInput
              type="email"
              placeholder="Email.."
              className="input-field"
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Box>
          <Box margin={{ top: "medium" }} gap="small">
            <Text size="xsmall" color="primaryText" weight={600}>
              Your password
            </Text>
            <TextInput
              type="password"
              placeholder="Password.."
              className="input-field"
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
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
            type="submit"
          >
            <Box direction="row" gap="small" align="center">
              <Text size="small">Log me in</Text>
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

export default LoginForm;
