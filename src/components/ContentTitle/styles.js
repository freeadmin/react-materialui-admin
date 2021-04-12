import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  contentTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(0),
  },
  typo: {
    color: theme.palette.text.hint,
    fontWeight: 400,
    fontSize: `calc(${theme.typography['h2'].fontSize} * 0.8)`,
  },
  button: {
    boxShadow: theme.customShadows.widget,
    textTransform: "none",
    "&:active": {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
}));
