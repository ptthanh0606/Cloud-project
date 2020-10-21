import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import LoadingPage from "../LoadingPage/LoadingPage";

const ManageJobPage = lazy(() => import("../ManageJobPage/ManageJobPage"));
const UserDetailPage = lazy(() => import("../UserDetailPage/UserDetailPage"));
const AllJobPage = lazy(() => import("../AllJobsPage/AllJobsPage"));
const JobDetailPage = lazy(() => import("../JobDetailPage/JobDetailPage"));
const AuthRoute = lazy(() => import("../../routes/Auth"));

const PageWithAppBar = ({ isLoginProp }) => {
  const { path } = useRouteMatch();
  return (
    <>
      <AppBar isLoginProp={isLoginProp} />
      <Switch>
        <Suspense fallback={LoadingPage}>
          <Route path={path} exact render={() => <AllJobPage />} />
          <Route path={`/job/detail`} render={() => <JobDetailPage />} />
          <Route
            path={`/manage-jobs`}
            exact
            render={() => <AuthRoute Component={ManageJobPage} />}
          />
          <Route
            path={`/user/user-detail`}
            exact
            render={() => <UserDetailPage />}
          />
        </Suspense>
      </Switch>
    </>
  );
};

export default PageWithAppBar;
