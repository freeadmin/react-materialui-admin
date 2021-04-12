import React from "react";

// styles
import useStyles from "./styles";

// components
import { Typography } from "@material-ui/core";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.contentTitleContainer}>
      <Typography className={classes.typo} variant="h1">
        {props.title}
      </Typography>
      {props.button && props.button}
    </div>
  );
}
