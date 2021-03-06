import * as React from "react";
import PropTypes from "prop-types";
import { fade, withStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import FormatTextdirectionLToRIcon from "@material-ui/icons/FormatTextdirectionLToR";
import FormatTextdirectionRToLIcon from "@material-ui/icons/FormatTextdirectionRToL";
import Link from "@material-ui/core/Link";
import { useTranslate } from "../../utils/i18n";
import { changeTheme } from "../../context/LayoutContext";
import { getCookie } from "../../utils/helpers";

const styles = (theme) => ({
  paper: {
    width: 352,
    backgroundColor: theme.palette.background.level1,
  },
  heading: {
    margin: "16px 0 8px",
  },
  toggleButtonGroup: {
    width: "100%",
  },
  toggleButton: {
    width: "100%",
    color: theme.palette.text.secondary,
    "&$toggleButtonSelected": {
      color: `${theme.palette.primary.main}`,
      backgroundColor: fade(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity,
      ),
      "&:hover": {
        backgroundColor: fade(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
  toggleButtonSelected: {},
  icon: {
    marginRight: 8,
  },
});

function AppSettingsDrawer(props) {
  const { classes, onClose, open = false, ...other } = props;
  const t = useTranslate();
  const theme = useTheme();
  const [mode, setMode] = React.useState(getCookie("paletteMode") || "system");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const preferredMode = prefersDarkMode ? "dark" : "light";

  const handleChangeThemeMode = (event, paletteMode) => {
    if (paletteMode === null) {
      paletteMode = mode;
    }

    if (paletteMode === "system") {
      setMode("system");
      document.cookie = "paletteMode=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      changeTheme({ paletteMode: preferredMode });
    } else {
      setMode(paletteMode);
      document.cookie = `paletteMode=${paletteMode};path=/;max-age=31536000`;
      changeTheme({ paletteMode });
    }
  };

  const handleChangeDirection = (event, direction) => {
    if (direction === null) {
      direction = theme.direction;
    }

    changeTheme({ direction });
  };

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      classes={{
        paper: classes.paper,
      }}
      {...other}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography variant="h5">{t("settings.settings")}</Typography>
        <IconButton color="inherit" onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box pl={2} pr={2}>
        <Typography gutterBottom id="settings-mode" className={classes.heading}>
          {t("settings.mode")}
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={mode}
          onChange={handleChangeThemeMode}
          aria-labelledby="settings-mode"
          className={classes.toggleButtonGroup}
        >
          <ToggleButton
            value="light"
            aria-label={t("settings.light")}
            data-ga-event-category="settings"
            data-ga-event-action="light"
            classes={{
              root: classes.toggleButton,
              selected: classes.toggleButtonSelected,
            }}
          >
            <Box display="flex" width="100%" justifyContent="center">
              <Brightness7Icon className={classes.icon} />
              {t("settings.light")}
            </Box>
          </ToggleButton>
          <ToggleButton
            value="system"
            aria-label={t("settings.system")}
            data-ga-event-category="settings"
            data-ga-event-action="system"
            classes={{
              root: classes.toggleButton,
              selected: classes.toggleButtonSelected,
            }}
          >
            <Box display="flex" width="100%" justifyContent="center">
              <SettingsBrightnessIcon className={classes.icon} />
              {t("settings.system")}
            </Box>
          </ToggleButton>
          <ToggleButton
            value="dark"
            aria-label={t("settings.dark")}
            data-ga-event-category="settings"
            data-ga-event-action="dark"
            classes={{
              root: classes.toggleButton,
              selected: classes.toggleButtonSelected,
            }}
          >
            <Box display="flex" width="100%" justifyContent="center">
              <Brightness4Icon className={classes.icon} />
              {t("settings.dark")}
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography
          gutterBottom
          id="settings-direction"
          className={classes.heading}
        >
          {t("settings.direction")}
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={theme.direction}
          onChange={handleChangeDirection}
          aria-labelledby="settings-direction"
          className={classes.toggleButtonGroup}
        >
          <ToggleButton
            value="ltr"
            aria-label={t("settings.light")}
            data-ga-event-category="settings"
            data-ga-event-action="ltr"
            classes={{
              root: classes.toggleButton,
              selected: classes.toggleButtonSelected,
            }}
          >
            <Box display="flex" width="100%" justifyContent="center">
              <FormatTextdirectionLToRIcon className={classes.icon} />
              {t("settings.ltr")}
            </Box>
          </ToggleButton>
          <ToggleButton
            value="rtl"
            aria-label={t("settings.system")}
            data-ga-event-category="settings"
            data-ga-event-action="rtl"
            classes={{
              root: classes.toggleButton,
              selected: classes.toggleButtonSelected,
            }}
          >
            <Box display="flex" width="100%" justifyContent="center">
              <FormatTextdirectionRToLIcon className={classes.icon} />
              {t("settings.rtl")}
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography gutterBottom className={classes.heading}>
          {t("settings.color")}
        </Typography>
        <Link
          href="/customization/color/#playground"
          data-ga-event-category="settings"
          data-ga-event-action="colors"
          variant="body1"
        >
          {t("settings.editWebsiteColors")}
        </Link>
      </Box>
    </Drawer>
  );
}

AppSettingsDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default withStyles(styles)(AppSettingsDrawer);
