import { Anchor, Box, Heading, Image, Text } from "grommet";
import React from "react";
import { useHistory } from "react-router-dom";
import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import "./CreateAccountPage.scss";

const CreateAccountPage = () => {
  const history = useHistory();

  return (
    <Box direction="row" className="create-account-page-container">
      <Box basis="1/2" background="white" height="100vh" className="image-left">
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
            onClick={() => history.push("/")}
          >
            I just want to view jobs
          </Anchor>
          <Text color="secondaryText" size="small">
            Having issues? <span className="help-text">Get Help</span>
          </Text>
        </Box>
        <CreateAccountForm />
      </Box>
    </Box>
  );
};

export default CreateAccountPage;
