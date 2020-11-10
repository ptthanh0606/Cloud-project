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
    // await sendLoginIDToken(res.tokenObj.id_token);
    const currentLoggedUserObject = await getUserObj();
    setIsAdminState(currentLoggedUserObject.roleId === 1); // Set admin state
    // setIsAdminState(currentLoggedUserObject.roleId !== 1); // Set user state
    setLoggedUserObject(currentLoggedUserObject);

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
          src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.15752-9/120844145_362682444920138_1497833907144410006_n.png?_nc_cat=102&_nc_sid=ae9488&_nc_ohc=ZGAnATey4ZgAX_6CiEl&_nc_ht=scontent.fsgn5-4.fna&oh=d705147f9a45000c0637a9bb9e122154&oe=5FA423E0"
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
