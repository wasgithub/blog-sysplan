import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#375f9b",
    },
    secondary: {
      main: "#cd201f",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#EBEBEB",
    },
  },
});

export default theme;
