import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { UserObjAtom } from "../atoms";
import LoadingPage from "./LoadingPage/LoadingPage";
import "./App.scss";

const PageWithAppBar = lazy(() => import("./PageWithAppBar/PageWithAppBar"));
const LoginPage = lazy(() => import("./LoginPage/LoginPage"));

const App = () => {
  const currentLoggedUserObject = useRecoilValue(UserObjAtom);

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
