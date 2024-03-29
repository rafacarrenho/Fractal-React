import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#122A4E",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
