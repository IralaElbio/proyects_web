import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0050D0",
            light: "#3578E5",
            dark: "#003A90",
        },
        secondary: {
            main: "#D97700",
            light: "#E68A2E",
            dark: "#A85A00",
        },
        background: {
            default: "#111923",
            paper: "#1A2633",
        },
        text: {
            primary: "#E5E9EC",
            secondary: "#A7B6C2",
        },
    },

    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    textTransform: "none",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#171E24",
                },
            },
        },
    },
});


export default theme;
