import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark", // Tema oscuro (puedes usar "light" si prefieres un tema claro)
        primary: {
            main: "#FFD700", // Amarillo elegante
        },
        secondary: {
            main: "#1E88E5", // Azul moderno
        },
        background: {
            default: "#121212", // Fondo general oscuro
            paper: "#1E1E1E", // Fondos secundarios
        },
        text: {
            primary: "#FFFFFF", // Texto principal
            secondary: "#DCDCDC", // Texto secundario
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Arial', sans-serif",
        h1: {
            fontSize: "3rem",
            fontWeight: 700,
            letterSpacing: "2px",
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: 600,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
        },
        button: {
            textTransform: "none", // Sin mayúsculas automáticas en botones
        },
    },
    spacing: 8, // Define la unidad base de espaciado (8px por defecto)
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px", // Botones con bordes redondeados
                },
            },
        },
    },
});

export default theme;
