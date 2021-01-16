import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Fab,
  Link,
  Tooltip,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
  Settings as SettingsIcon,
} from "@material-ui/icons";
import clsx from "clsx";

// styles
import useStyles from "./styles";

// components
import { Badge, Typography, Button } from "@material-ui/core";
import Notification from "../Notification/Notification";
import UserAvatar from "../UserAvatar/UserAvatar";
import Search from "../Search";
// context
import { useUserDispatch, signOut } from "../../context/UserContext";

// svg
import { ReactComponent as FreeAdminLogo } from "../../assets/FreeAdmin.svg";

// util
import { TITLE, SOURCE_CODE_REPO } from "../../utils/constants";
import { useTranslate } from "../../utils/i18n";

const messages = [
  {
    id: 0,
    variant: "warning",
    name: "Jane Hew",
    message: "Hey! How is it going?",
    time: "9:32",
  },
  {
    id: 1,
    variant: "success",
    name: "Lloyd Brown",
    message: "Check out my new Dashboard",
    time: "9:18",
  },
  {
    id: 2,
    variant: "primary",
    name: "Mark Winstein",
    message: "I want rearrange the appointment",
    time: "9:15",
  },
  {
    id: 3,
    variant: "secondary",
    name: "Liana Dutti",
    message: "Good news from sale department",
    time: "9:09",
  },
];

const notifications = [
  { id: 0, color: "warning", message: "Check out this awesome ticket" },
  {
    id: 1,
    color: "success",
    type: "info",
    message: "What is the best way to get ...",
  },
  {
    id: 2,
    color: "secondary",
    type: "notification",
    message: "This is just a simple notification",
  },
  {
    id: 3,
    color: "primary",
    type: "e-commerce",
    message: "12 new orders has arrived today",
  },
];

function Navbar(props) {
  const { onOpenSettingBar } = props;

  const t = useTranslate();
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [mailMenu, setMailMenu] = useState(null);
  var [isMailsUnread, setIsMailsUnread] = useState(true);
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  var [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  var [profileMenu, setProfileMenu] = useState(null);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => {}}
          className={clsx(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {false ? (
            <ArrowBackIcon
              classes={{
                root: clsx(classes.headerIcon, classes.headerIconCollapse),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: clsx(classes.headerIcon, classes.headerIconCollapse),
              }}
            />
          )}
        </IconButton>
        <Box mr={2.5} display="flex" alignItems="center">
          <FreeAdminLogo width={32} height={32} />
        </Box>
        <Typography variant="h4" className={classes.logotype}>
          {TITLE}
        </Typography>
        <div className={classes.grow} />
        <Button
          component={Link}
          href={SOURCE_CODE_REPO}
          className={classes.docBtn}
        >
          {t("document")}
        </Button>
        <Search />
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={(e) => {
            setNotificationsMenu(e.currentTarget);
            setIsNotificationsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge
            badgeContent={isNotificationsUnread ? notifications.length : null}
            classes={{ badge: classes.messageNotificationBadgeColor }}
          >
            <NotificationsIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={(e) => {
            setMailMenu(e.currentTarget);
            setIsMailsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge
            badgeContent={isMailsUnread ? messages.length : null}
            classes={{ badge: classes.mailBadgeColor }}
          >
            <MailIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <Tooltip title={t("layout.toggleSettings")} enterDelay={300}>
          <IconButton
            color="inherit"
            className={classes.headerMenuButton}
            onClick={onOpenSettingBar}
          >
            <SettingsIcon classes={{ root: classes.headerIcon }} />
          </IconButton>
        </Tooltip>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={(e) => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>
        <Menu
          id="mail-menu"
          open={Boolean(mailMenu)}
          anchorEl={mailMenu}
          onClose={() => setMailMenu(null)}
          MenuListProps={{ className: classes.headerMenuList }}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h6" weight="medium">
              {t("layout.newMessage")}
            </Typography>
            <Typography
              variant="body2"
              className={classes.profileMenuLink}
              component="a"
              color="secondary"
            >
              {messages.length} {t("layout.newMessage")}
            </Typography>
          </div>
          {messages.map((message) => (
            <MenuItem key={message.id} className={classes.messageNotification}>
              <div className={classes.messageNotificationSide}>
                <UserAvatar color={message.variant} name={message.name} />
                <Typography variant="body2" color="textPrimary">
                  {message.time}
                </Typography>
              </div>
              <div
                className={clsx(
                  classes.messageNotificationSide,
                  classes.messageNotificationBodySide,
                )}
              >
                <Typography variant="body1" weight="medium" gutterBottom>
                  {message.name}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {message.message}
                </Typography>
              </div>
            </MenuItem>
          ))}
          <Fab
            variant="extended"
            color="primary"
            aria-label="Add"
            className={classes.sendMessageButton}
          >
            {t("layout.sendNewMessage")}
            <SendIcon className={classes.sendButtonIcon} />
          </Fab>
        </Menu>
        <Menu
          id="notifications-menu"
          open={Boolean(notificationsMenu)}
          anchorEl={notificationsMenu}
          onClose={() => setNotificationsMenu(null)}
          className={classes.headerMenu}
          disableAutoFocusItem
        >
          {notifications.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={() => setNotificationsMenu(null)}
              className={classes.headerMenuItem}
            >
              <Notification {...notification} typographyVariant="body2" />
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h6" weight="medium">
              John Smith
            </Typography>
            <Typography
              variant="body2"
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href="https://github.com/freeadmin/react-materialui-admin"
            >
              FreeAdmin
            </Typography>
          </div>
          <MenuItem
            className={clsx(classes.profileMenuItem, classes.headerMenuItem)}
          >
            <AccountIcon className={classes.profileMenuIcon} />{" "}
            <Typography variant="body2">Profile</Typography>
          </MenuItem>
          <MenuItem
            className={clsx(classes.profileMenuItem, classes.headerMenuItem)}
          >
            <AccountIcon className={classes.profileMenuIcon} />{" "}
            <Typography variant="body2">Tasks</Typography>
          </MenuItem>
          <MenuItem
            className={clsx(classes.profileMenuItem, classes.headerMenuItem)}
          >
            <AccountIcon className={classes.profileMenuIcon} />{" "}
            <Typography variant="body2">Messages</Typography>
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography
              variant="body2"
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => signOut(userDispatch, props.history)}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propType = {
  classes: PropTypes.object.isRequired,
  onOpenSettingBar: PropTypes.func.isRequired,
};

export default Navbar;
