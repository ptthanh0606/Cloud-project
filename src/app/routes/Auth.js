import React from "react";
import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserObjAtom } from "../atoms";

const AuthRoute = ({ Component }) => {
  const currentLoggedUserObj = useRecoilValue(UserObjAtom);

  return <>{currentLoggedUserObj ? <Component /> : <Redirect to="/login" />}</>;
};

export default AuthRoute;
