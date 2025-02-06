import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack } from "@mui/material";

// Contenedor para una Subsección dentro de una sección
export const SubSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    borderRadius: "12px",
}));

// Contenedor principal de la página
export const MainContainer = styled(Box)(({ theme }) => ({
    maxWidth: "1800px",
    padding: theme.spacing(4),
    alignItems: "center",
    justifyContent: "center",
}));

// Contenedor para agrupar por row, lo uso para contener un texto al lado de la imagen
export const FlexBoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

// Contenido para la imagen
export const FlexBoxRowContent = styled(Box)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(2),
}));

// Box para contener zonas principales de información
export const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    borderRadius: "5px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
}));

// Título de subsecciones
export const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(1rem, 2vw, 1.8rem)",
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-8px',
        left: 0,
        width: '60px',
        height: '4px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '2px',
    },
}));

// Stack Estilizado
export const StyledStackContainer = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
}));

// Títulos secundarios de Secciones (ej. Overview)
export const SubSectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
    fontWeight: "600",
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

// Estilo para los párrafos de texto
export const TextBody = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(0.6rem, 2vw, 1.2rem)",
    lineHeight: "1.5",
    marginBottom: theme.spacing(1.5),
    color: theme.palette.text.primary,
}));

// Stack con espaciado personalizado
export const SpacedStack = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
}));