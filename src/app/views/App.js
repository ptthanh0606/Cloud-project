import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grommet } from "grommet";

import AppBar from "../components/AppBar/AppBar";
import LoadingPage from "./LoadingPage/LoadingPage";
import "./App.scss";

const AllJobPage = lazy(() => import("../views/AllJobsPage/AllJobsPage"));
const CreateAccountPage = lazy(() =>
  import("../views/CreateAccountPage/CreateAccountPage")
);
const JobDetailPage = lazy(() =>
  import("../views/JobDetailPage/JobDetailPage")
);
const LoginPage = lazy(() => import("../views/LoginPage/LoginPage"));
const ManageJobPage = lazy(() =>
  import("../views/ManageJobPage/ManageJobPage")
);
const UserDetailPage = lazy(() =>
  import("../views/UserDetailPage/UserDetailPage")
);

const theme = {
  global: {
    colors: {
      brand: "#6993FF",
      userCircle: "#8950FC",
      primaryText: "#464E5F",
      secondaryText: "#A7A8BB",
    },
    font: {
      family: "Poppins",
      size: "14px",
    },
  },
  card: {
    container: { round: "xsmall", elevation: "small" },
  },
};

const App = () => {
  // const [joblist] = useState([
  //   {
  //     jobtitle: "Intern front-end developer",
  //     jobdesc:
  //       "Outlines keep you honest. If stop  indulging in poorly thought-out metaphors driving and keep structure",
  //     salary: "820",
  //   },
  // ]);

  return (
    <Router>
      <Grommet theme={theme}>
        <AppBar />
        <Switch>
          <Suspense fallback={LoadingPage}>
            <Route path="/" exact render={() => <AllJobPage />} />
            <Route
              path="/create-account"
              exact
              render={() => <CreateAccountPage />}
            />
            <Route path="/job" exact render={() => <JobDetailPage />} />
            <Route path="/login" exact render={() => <LoginPage />} />
            <Route path="/manage-jobs" exact render={() => <ManageJobPage />} />
            <Route
              path="/user-detail"
              exact
              render={() => <UserDetailPage />}
            />
          </Suspense>
        </Switch>
      </Grommet>
    </Router>
  );
};

export default App;
