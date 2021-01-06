import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      &copy; {new Date().getFullYear()} FreeAdmin. MIT License.
    </Typography>
  );
}
