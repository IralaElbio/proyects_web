import React from "react";
import backgroundImage from "./Assets/duckgame.jpg";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProyectOverview from "./Components/SectionProjectOverview"
import Lobby from "./Components/SectionLobby";
import Game from "./Components/SectionGame";

// Background image styling
const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed", // Hace que el fondo no se mueva al hacer scroll
  height: "100%", // Ocupa toda la altura disponible
  color: "white",
  padding: theme.spacing(4),
}));


const ProjectTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
}));

const InfoSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const SubSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));


const MainContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 4),
  background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 2),
  },
}));

const DuckGamePage = () => {
  return (
    <BackgroundContainer>
      <MainContainer>
        {/* Title Section */}
        <ProjectTitle variant="h2">DuckGame Proyect - Back End</ProjectTitle>
        <ProjectTitle variant="h4" gutterBottom> Multiplayer Game Engine Development</ProjectTitle>

        <ProyectOverview />

        {/* Information Section */}
        <InfoSection>

          <ProjectTitle variant="h4" gutterBottom>
            Project Details
          </ProjectTitle>

          {/* Lobby Logic Section */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            Pre-Game Logic
          </Typography>

          <SubSection>
            <Lobby />
          </SubSection>

          {/* Game Logic Section */}
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            In-Game Logic
          </Typography>
          <SubSection>
            <Game />
          </SubSection>
        </InfoSection>
      </MainContainer>
    </BackgroundContainer>
  );
};

export default DuckGamePage;
