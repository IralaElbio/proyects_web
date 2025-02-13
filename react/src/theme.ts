import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC107",
      light: "#FFD740",
      dark: "#FFA000",
    },
    secondary: {
      main: "#757575",
      light: "#A4A4A4",
      dark: "#494949",
    },
    background: {
      default: "#212121",
      paper: "#303030",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#BDBDBD",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
