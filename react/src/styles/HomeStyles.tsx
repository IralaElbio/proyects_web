import { styled } from "@mui/material/styles";
import { Box, Typography, Card, CardMedia, Button } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(8, 4),
  background: "#121212",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 2),
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 700,
  fontSize: "3rem",
  marginBottom: theme.spacing(6),
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: 0,
    width: "60px",
    height: "4px",
    background: "rgb(0, 180, 216)",
    borderRadius: "2px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

export const StyledCard = styled(Card)(() => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  height: 250,
  maxWidth: 400,
  borderRadius: "15px 15px 0 0",
  objectFit: "fill",
}));

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 600,
  fontSize: "1.5rem",
  marginBottom: theme.spacing(2),
}));

export const StyledCardDescription = styled(Typography)(() => ({
  color: "rgba(255, 255, 255, 0.7)",
  lineHeight: 1.6,
  fontSize: "1rem",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: theme.spacing(1, 3),
  background: "linear-gradient(45deg,rgb(38, 38, 43) 30%,rgb(43, 43, 43) 90%)",
  color: "white",
  fontWeight: 500,
  borderRadius: "10px",
  marginTop: "auto",
  "&:hover": {
    background: "linear-gradient(45deg,#1976d2 30%,rgb(0, 180, 216) 90%)",
    transform: "scale(1.05)",
  },
  "&.Mui-disabled": {
    background: "linear-gradient(45deg, #555 30%, #444 90%)",
    color: "#aaa",
    cursor: "not-allowed",
  },
}));
