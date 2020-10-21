import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "../atoms";

const AuthRoute = ({ Component }) => {
  const isLogin = useRecoilValue(isLoginAtom);

  return <>{isLogin ? <Component /> : <Redirect to="/login" />}</>;
};

export default AuthRoute;
