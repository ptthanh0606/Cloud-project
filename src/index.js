import React from "react";
import ReactDOM from "react-dom";
import App from "./app/views/App";
import { Grommet } from "grommet";
import { RecoilRoot } from "recoil";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

const theme = {
  global: {
    colors: {
      brand: "#6993FF",
      userCircle: "#8950FC",
      primaryText: "#464E5F",
      secondaryText: "#A7A8BB",
      errorColor: "#F64E60",
    },
    font: {
      family: "Poppins",
      size: "14px",
    },
    drop: {
      border: {
        radius: "10px",
      },
    },
  },
  card: {
    container: { round: "xsmall", elevation: "small" },
  },
  button: {
    border: {
      radius: "3px",
    },
    color: "white"
  },
};

ReactDOM.render(
  <RecoilRoot>
    <Grommet theme={theme}>
      <Router>
        <App />
      </Router>
    </Grommet>
  </RecoilRoot>,
  document.getElementById("root")
);

serviceWorker.unregister();
