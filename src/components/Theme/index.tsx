import createTheme from "@mui/material/styles/createTheme";
import "../../App.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#22C870",
      main: "#2CE080",
      dark: "#20BA68",
      contrastText: "#fff",
    },
    secondary: {
      light: "#DFE8F6",
      main: "#0365F2",
      dark: "#c7a500",
      contrastText: "#000",
    },
    // grey: {
    //   color: "#6C787F",
    // },
  },
  typography: {
    fontFamily: "Cera",
    button: {
      textTransform: "none",
    },
  },
  spacing: [2, 4, 8, 12, 16, 20, 32, 48],
});

export default theme;
