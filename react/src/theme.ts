import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFC107", // Amarillo brillante, representativo del tema "pato".
            light: "#FFD740", // Amarillo claro para elementos destacados.
            dark: "#FFA000", // Amarillo oscuro para contrastes.
        },
        secondary: {
            main: "#757575", // Gris cálido para complementar el amarillo.
            light: "#A4A4A4", // Gris más claro para detalles secundarios.
            dark: "#494949", // Gris oscuro para un toque moderno.
        },
        background: {
            default: "#212121", // Negro grisáceo para el fondo general.
            paper: "#303030", // Gris oscuro para tarjetas y elementos elevados.
        },
        text: {
            primary: "#F5F5F5", // Blanco ligeramente roto para un buen contraste.
            secondary: "#BDBDBD", // Gris claro para texto secundario.
        },
        warning: {
            main: "#FFA726", // Naranja suave para elementos de advertencia.
        },
        error: {
            main: "#D32F2F", // Rojo intenso para errores.
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
