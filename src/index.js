import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import "typeface-roboto";

import "./index.css";
import App from "./App";
import Themes from "./themes";
import NProgressBar from "./components/NProgressBar";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <LayoutProvider>
      <UserProvider>
        <ThemeProvider theme={Themes}>
          <NProgressBar />
          <CssBaseline />
          <App />
        </ThemeProvider>
      </UserProvider>
    </LayoutProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
