import React from "react";
import { Anchor, Box, Heading, Image, Text } from "grommet";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from "react-google-login";
import { useSetRecoilState } from "recoil";
// eslint-disable-next-line no-unused-vars
import { sendLoginIDToken, getUserObj } from "./LoginPageActions";

import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";
import { IsAdminAtom, UserObjAtom } from "../../atoms";

const CLIENT_ID =
  "700550014345-n104gnlrusrhn5rlj8edg8ugdsvtm0b5.apps.googleusercontent.com";

const LoginPage = () => {
  const setLoggedUserObject = useSetRecoilState(UserObjAtom);
  const setIsAdminState = useSetRecoilState(IsAdminAtom);

  const history = useHistory();

  const onSuccess = async (res) => {
    console.log(res);
    // await sendLoginIDToken(res.tokenObj.id_token);
    try {
      const currentLoggedUserObject = await getUserObj();
      setIsAdminState(currentLoggedUserObject.roleId === 1); // Set admin state
      // setIsAdminState(currentLoggedUserObject.roleId !== 1); // Set user state
      setLoggedUserObject(currentLoggedUserObject);
    } catch (error) {}

    history.push("/");
  };

  const onFailure = (res) => {
    console.log(res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: CLIENT_ID,
  });

  return (
    <Box direction="row" className="login-page-container">
      <Box basis="1/2" background="white" height="100vh">
        <Box pad={{ horizontal: "xlarge", vertical: "large" }}>
          <Heading level="3" margin="none" color="primaryText">
            JRP
          </Heading>
        </Box>
        <Image
          fit="cover"
          src="https://i.imgur.com/VZuP4I5.png"
        />
      </Box>
      <Box
        pad={{ horizontal: "large", vertical: "large" }}
        basis="auto"
        width="100%"
      >
        <Box direction="row" justify="between" pad={{ horizontal: "large" }}>
          <Anchor
            color="secondaryText"
            size="small"
            onClick={() => history.goBack()}
          >
            I just want to view jobs
          </Anchor>
          <Text color="secondaryText" size="small">
            Having issues? <span className="help-text">Get Help</span>
          </Text>
        </Box>
        <LoginForm onSigninWithGoogle={signIn} />
      </Box>
    </Box>
  );
};

export default LoginPage;
