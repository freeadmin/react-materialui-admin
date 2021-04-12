import React, { useState } from "react";
import { useTheme } from "@material-ui/styles";

import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
} from "@material-ui/core";

import ContentTitle from "../../components/ContentTitle";

// styles
import useStyles from "./styles";

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
      <ContentTitle
        title="Dashboard"
        button={
          <Button variant="contained" size="medium" color="secondary">
            Latest Reports
          </Button>
        }
      />
    </>
  );
}
