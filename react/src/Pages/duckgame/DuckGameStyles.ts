import { styled } from "@mui/material/styles";
import { Typography, Box, Container, Stack } from "@mui/material";

// Subsección dentro de una sección
export const SubSection = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1.5),
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
    },
}));

// Contenedor principal de la página
export const MainContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8, 4),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 2),
    },
}));

// ......................... USADOS ACT ...............

export const FlexBoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1),
    minHeight: "300px",
    background: "black",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

export const FlexBoxRowContent = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
}));


// Título de subsecciones
export const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(1.5rem, 3vw, 3rem)",
    fontWeight: 600,
    color: theme.palette.primary.main,
    textAlign: "center",
    marginBottom: theme.spacing(2),
}));


// Título de subsecciones
export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(1rem, 3vw, 2rem)",
    fontWeight: 300,
    color: theme.palette.primary.main,
    textDecoration: "underline",
    marginBottom: theme.spacing(2),
}));

export const SpacedStack = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(3),
}));

// Stack Estilizado
export const StyledStackContainer = styled(Stack)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1.5),
    boxShadow: theme.shadows[2],
}));


// Titulos secundarios de Secciones (ej. Overview)
export const SubSectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(1.5rem, 4vw, 1.8rem)",  // Ajustable según el tamaño de la pantalla
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),  // Espacio debajo del título
}));


// Estilo para los párrafos de texto
export const TextBody = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem",
    color: theme.palette.text.primary,  // Color del texto según el tema
    lineHeight: 1.6,  // Espaciado entre líneas
    marginBottom: theme.spacing(2),  // Espacio entre párrafos
}));
