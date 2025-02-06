import { createTheme } from "@mui/material/styles";

// Tema personalizado con colores fríos y oscuros
const theme = createTheme({
    palette: {
        primary: {
            main: "#4A90E2", // Azul frío
        },
        secondary: {
            main: "#7B61FF", // Morado elegante
        },
        background: {
            default: "#121212", // Negro azulado oscuro
            paper: "#1E1E1E", // Gris oscuro
        },
        text: {
            primary: "#E0E0E0", // Blanco grisáceo
            secondary: "#B0B0B0", // Gris claro
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    spacing: 8, // Espaciado base
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px", // Bordes redondeados en botones
                    textTransform: "none",
                },
            },
        },
    },
});


export default theme;
