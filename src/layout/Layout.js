import React from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box, Link } from "@material-ui/core";
//import Icon from "@mdi/react";

//icons
/*
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from "@mdi/js";
*/

// styles
import useStyles from "./styles";

// components
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
//import Sidebar from "../components/Sidebar";

// pages

// context

function Layout(props) {
  var classes = useStyles();

  return (
    <div className={classes.root}>
      <>
        <Navbar history={props.history} />
        <div className={classnames(classes.content)}>
          <div className={classes.fakeToolbar} />
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
              <Copyright />
            </div>
            <div>
              <Link
                color={"primary"}
                href={"https://flatlogic.com/"}
                target={"_blank"}
                className={classes.link}
              >
                Flatlogic
              </Link>
              <Link
                color={"primary"}
                href={"https://flatlogic.com/about"}
                target={"_blank"}
                className={classes.link}
              >
                About Us
              </Link>
              <Link
                color={"primary"}
                href={"https://flatlogic.com/blog"}
                target={"_blank"}
                className={classes.link}
              >
                Blog
              </Link>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
