import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingLeft: theme.spacing(2),
  },
  avatar: {
    border: `3px solid ${theme.palette.background.default}`,
    marginLeft: theme.spacing(-1.5),
    "&:hover": {
      zIndex: 2,
    },
  },
  noImage: {
    backgroundColor: theme.palette.primary.main,
  },
  more: {
    backgroundColor: theme.palette.secondary.main,
    height: "2.5rem",
    width: "2.5rem",
  },
  avatarText: {
    color: theme.palette.text.primary,
    fontWeight: "bold",
    fontSize: ".875rem",
    lineHeight: "1.25",
  },
  fadedImage: {
    filter: "grayscale(1)",
  },
}));
