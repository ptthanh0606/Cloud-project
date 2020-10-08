import React, { useEffect, useState } from "react";
import { Box, Heading, Button, TextInput } from "grommet";
import { Search } from "grommet-icons";

import FunctionCard from "./FunctionCard/FunctionCard";
import "./AppBar.scss";
import { Route, useHistory } from "react-router-dom";

const AppBar = (props) => {
  let history = useHistory();
  const [appBarClassName, setAppBarClassName] = useState("app-bar-container");

  const handleRouteToSignInPage = () => {
    history.push("login");
  };

  useEffect(() => {
    if (history.location.pathname.includes("login") || history.location.pathname.includes("create-account")) {
      setAppBarClassName("app-bar-container hidden");
    } else setAppBarClassName("app-bar-container");

    history.listen((location) => {
      console.log(location);
      if (location.pathname.includes("login") || history.location.pathname.includes("create-account")) {
        setAppBarClassName("app-bar-container hidden");
      } else setAppBarClassName("app-bar-container");
    });
  }, [history]);

  return (
    <Box className={appBarClassName}>
      <Box
        className="nav-box"
        tag="header"
        direction="row"
        align="center"
        justify="between"
        wrap
        pad={{ left: "xlarge", right: "xlarge", vertical: "small" }}
        style={{ zIndex: "1" }}
        {...props}
      >
        <Box
          tag="div"
          direction="row"
          justify="between"
          basis="large"
          gap="large"
        >
          <Heading level="2" margin="none" color="white">
            JRP
          </Heading>
          <TextInput
            icon={<Search className="white-icon" />}
            placeholder="Search"
            className="search-box"
          />
        </Box>
        <Button
          primary
          label="Sign in"
          size="medium"
          className="button-create-account"
          onClick={handleRouteToSignInPage}
        />
      </Box>
      <Box
        tag="header"
        background="white"
        direction="row"
        align="center"
        pad={{ left: "xlarge", right: "xlarge", vertical: "medium" }}
      >
        <Route
          path="/"
          exact
          children={({ match }) => (
            <FunctionCard
              title="All jobs"
              subtitle="Posted by organizations"
              to="/"
              selected={!!match}
            />
          )}
        />
        <Route
          path="/manage-jobs"
          exact
          children={({ match }) => (
            <FunctionCard
              title="Manage posts"
              subtitle="View and update your posts"
              to="/manage-jobs"
              selected={!!match}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default AppBar;
