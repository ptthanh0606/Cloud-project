import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import LoadingPage from "../LoadingPage/LoadingPage";

const ManageJobPage = lazy(() => import("../ManageJobPage/ManageJobPage"));
const ManageUserPage = lazy(() => import("../ManageUserPage/ManageUserPage"));
const UserDetailPage = lazy(() => import("../UserDetailPage/UserDetailPage"));
const AllJobPage = lazy(() => import("../AllJobsPage/AllJobsPage"));
const JobDetailPage = lazy(() => import("../JobDetailPage/JobDetailPage"));
const AuthRoute = lazy(() => import("../../routes/Auth"));

const PageWithAppBar = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <AppBar />
      <Switch>
        <Suspense fallback={LoadingPage}>
          <Route path={path} exact render={() => <AllJobPage />} />
          <Route path={`/job/:id/detail`} render={() => <JobDetailPage />} />
          <Route
            path={`/manage-jobs`}
            exact
            render={() => <AuthRoute Component={ManageJobPage} />}
          />
          <Route
            path={`/manage-users`}
            exact
            render={() => <AuthRoute Component={ManageUserPage} />}
          />
          <Route
            path={`/user/:id/user-detail`}
            exact
            render={() => <AuthRoute Component={UserDetailPage} />}
          />
        </Suspense>
      </Switch>
    </>
  );
};

export default PageWithAppBar;
