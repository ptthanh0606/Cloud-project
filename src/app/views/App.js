import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IsAdminAtom, UserObjAtom } from "../atoms";
import LoadingPage from "./LoadingPage/LoadingPage";
import "./App.scss";
import { getUserObj } from "./AppActions";

const PageWithAppBar = lazy(() => import("./PageWithAppBar/PageWithAppBar"));
const LoginPage = lazy(() => import("./LoginPage/LoginPage"));

const App = () => {
  const setIsAdminState = useSetRecoilState(IsAdminAtom);
  const [currentLoggedUserObject, setCurrentLoggedUserObject] = useRecoilState(
    UserObjAtom
  );

  useEffect(() => {
    if (Cookies.get("BREAER_ACCESS_TOKEN")) {
      getUserObj().then((response) => {
        setCurrentLoggedUserObject(response);
        setIsAdminState(response.roleId === 2); // Set admin state
      });
    }
  }, [setCurrentLoggedUserObject, setIsAdminState]);

  return (
    <Switch>
      <Suspense fallback={LoadingPage}>
        <Route
          path="/login"
          render={() =>
            currentLoggedUserObject ? <Redirect to="/" /> : <LoginPage />
          }
        />
        <Route
          path="/"
          render={() => (
            <PageWithAppBar isLoginProp={!!currentLoggedUserObject} />
          )}
        />
      </Suspense>
    </Switch>
  );
};

export default App;
