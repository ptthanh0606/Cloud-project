import React, { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { checkLogin } from "./AppActions";
import Cookies from "js-cookie";

import "./App.scss";
import LoadingPage from "./LoadingPage/LoadingPage";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginAtom, UserObjAtom } from "../atoms";
const PageWithAppBar = lazy(() => import("./PageWithAppBar/PageWithAppBar"));
const LoginPage = lazy(() => import("./LoginPage/LoginPage"));

const App = () => {
  const setUserObj = useSetRecoilState(UserObjAtom);
  const setLoginState = useSetRecoilState(isLoginAtom);
  const isLogin = useRecoilValue(isLoginAtom);
  const history = useHistory();

  useEffect(() => {
    checkLogin(Cookies.get("id_token"))
      .then((response) => {
        console.log(response);
        if (response) {
          setUserObj(response);
          setLoginState(true);
        } else {
          setLoginState(false);
        }
      })
      .catch((error) => {
        setLoginState(false);
      });
  }, [setLoginState, setUserObj]);

  useEffect(() => {
    history.listen(() => {
      checkLogin(Cookies.get("id_token"))
        .then((response) => {
          console.log(response);
          if (response) {
            setUserObj(response);
            setLoginState(true);
          } else {
            setLoginState(false);
          }
        })
        .catch((error) => {
          setLoginState(false);
        });
    });
  }, [setUserObj, history, setLoginState]);

  return (
    <Switch>
      <Suspense fallback={LoadingPage}>
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <LoginPage />)}
        />
        <Route path="/" render={() => <PageWithAppBar isLoginProp={isLogin}/>} />
      </Suspense>
    </Switch>
  );
};

export default App;
