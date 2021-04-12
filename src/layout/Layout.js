import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import clsx from "clsx";
import { Box, Link, Button } from "@material-ui/core";
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
import Sidebar from "../components/Sidebar";
import Settingbar from "../components/Settingbar";

// pages
import Dashboard from "../views/dashboard";
// context

function Layout(props) {
  var classes = useStyles();

  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const handleSettingsDrawerOpen = () => {
    setSettingsOpen(true);
  };
  const handleSettingsDrawerClose = React.useCallback(() => {
    setSettingsOpen(false);
  }, []);

  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleSidebarOpen = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);

  //handleSettingsDrawerOpen();

  return (
    <div className={classes.root}>
      <Navbar
        history={props.history}
        onOpenSettingBar={handleSettingsDrawerOpen}
        onToggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarOpened={sidebarOpen} onToggleSidebar={toggleSidebar} />
      <div className={clsx(classes.content)}>
        <div className={classes.fakeToolbar} />
        <Switch>
          <Route path="/app/dashboard" component={Dashboard} />
        </Switch>
        <Box
          mt={5}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
        >
          <Box>
            <Copyright />
          </Box>
          <Box ml={5}>
            <Link
              color={"primary"}
              href={"https://github.com/freeadmin/react-materialui-admin"}
              target={"_blank"}
              className={classes.link}
            >
              About Us
            </Link>
          </Box>
          <Box ml={5}>
            <Link
              color={"primary"}
              href={"https://github.com/freeadmin/react-materialui-admin"}
              target={"_blank"}
              className={classes.link}
            >
              Blog
            </Link>
          </Box>
        </Box>
      </div>
      <Settingbar onClose={handleSettingsDrawerClose} open={settingsOpen} />
    </div>
  );
}

export default withRouter(Layout);
