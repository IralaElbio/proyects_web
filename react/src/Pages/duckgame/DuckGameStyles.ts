import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// Contenedor para colocar pilares
export const PilarsContainer = styled(Box)(() => ({
  display: "flex",
  background: `linear-gradient(to bottom, rgba(73, 73, 70, 0.9), #212121)`,
  minHeight: "100vh",
}));

// Pilar
export const PagePillar = styled(Box)(() => ({
  flex: "1",
}));

// Contenedor para secciones
export const SectionContainer = styled(Box)(({ theme }) => ({
  boxShadow: "inset 0px 2px 5px rgb(116, 114, 114)",
  padding: theme.spacing(3),
  borderRadius: "12px",
}));

// Contenedor para Overview
export const OverviewContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  borderTop: `2px solid ${theme.palette.secondary.main}`,
  flex: "12",
  padding: theme.spacing(4),
  borderRadius: "30px",
}));

// Contenedor para la Informacion adicional
export const InfoContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(4),
  borderRadius: "30px",
}));

// Contenedor para agrupar por row, principalmente usado para un texto al lado de la imagen
export const FlexBoxRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

// Contenido que se usa en FlexBoxRow
export const FlexBoxRowContent = styled(Box)(({ theme }) => ({
  flex: "1",
  padding: theme.spacing(2),
}));

// Box para contener zonas principales de información
export const StyledBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to bottom, rgba(1, 16, 37, 0.3), rgba(5, 10, 20, 0.3))`,
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderTop: `2px solid ${theme.palette.secondary.dark}`,
  borderRadius: "14px",
}));

// Título
export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
  fontWeight: "600",
  textAlign: "center",
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

// Titulo para secciones
export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(1rem, 2vw, 1.8rem)",
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: 0,
    width: "60px",
    height: "4px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
  },
}));

// Títulos secundarios de Secciones (ej. Overview)
export const SubSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(0.9rem, 2vw, 1.6rem)",
  fontWeight: "600",
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

// Estilo para los párrafos de texto
export const TextBody = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(0.6rem, 2vw, 1.2rem)",
  lineHeight: "1.5",
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.secondary,
}));
