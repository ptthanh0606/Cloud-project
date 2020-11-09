import React, { useEffect, useState } from "react";
import { Box, Heading, Button } from "grommet";
import { Route, useHistory, useLocation } from "react-router-dom";
import { useGoogleLogout } from "react-google-login";

import FunctionCard from "./FunctionCard/FunctionCard";
import "./AppBar.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserObjAtom, IsAdminAtom } from "../../atoms";
import Cookies from "js-cookie";

const CLIENT_ID =
  "700550014345-n104gnlrusrhn5rlj8edg8ugdsvtm0b5.apps.googleusercontent.com";

const AppBar = () => {
  const [currentLoggedUserObject, setCurrentLoggerUserObject] = useRecoilState(
    UserObjAtom
  );
  const isAdmin = useRecoilValue(IsAdminAtom);
  const [appBarClassName, setAppBarClassName] = useState("app-bar-container");

  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/login") {
      setAppBarClassName("app-bar-container hidden");
    } else setAppBarClassName("app-bar-container");
  }, [pathname]);

  const onLogoutSuccess = () => {
    setCurrentLoggerUserObject(null);
    Cookies.remove("BREAER_ACCESS_TOKEN");
    alert("Sign out completed!");
    
    history.push("/login");
  };

  const onLogoutFailure = () => {
    console.log("Sign out failed!");
  };

  const { signOut } = useGoogleLogout({
    clientId: CLIENT_ID,
    onLogoutSuccess: onLogoutSuccess,
    onFailure: onLogoutFailure,
  });

  const handleRouteToSignInPage = () => {
    history.push("/login");
  };

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
        </Box>
        {currentLoggedUserObject ? (
          <Button
            primary
            label="Log out"
            size="medium"
            className="button-create-account"
            onClick={signOut}
          />
        ) : (
          <Button
            primary
            label="Sign in"
            size="medium"
            className="button-create-account"
            onClick={handleRouteToSignInPage}
          />
        )}
      </Box>
      <Box
        tag="header"
        background="white"
        direction="row"
        align="center"
        pad={{ left: "xlarge", right: "xlarge", vertical: "medium" }}
      >
        <Route
          path={`/`}
          exact
          children={({ match }) => (
            <FunctionCard
              title="All jobs"
              subtitle="Posted by organizations"
              to={`/`}
              selected={!!match}
            />
          )}
        />
        {currentLoggedUserObject && (
          <>
            <Route
              path={`/manage-jobs`}
              exact
              children={({ match }) => (
                <FunctionCard
                  title="Manage posts"
                  subtitle="View and update your posts"
                  to={`/manage-jobs`}
                  selected={!!match}
                />
              )}
            />
            {isAdmin && (
              <Route
                path={`/manage-users`}
                exact
                children={({ match }) => (
                  <FunctionCard
                    title="Manage users"
                    subtitle="Manage user in this website"
                    to={`/manage-users`}
                    selected={!!match}
                  />
                )}
              />
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default AppBar;
