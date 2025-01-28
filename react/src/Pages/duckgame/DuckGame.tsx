import React from "react";
import backgroundImage from "./Assets/duckgame.jpg";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProyectOverview from "./Components/ProjectOverview"
import ProyectLobbyInfo from "./Components/ProyectLobbyInfo";
import ProyectGameInfo from "./Components/ProyectGameInfo";

// Background image styling
const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
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
  background: "Black",
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

        <ProyectOverview />


        {/* Information Section */}
        <InfoSection>
          <Typography variant="h3" gutterBottom>
            Project Details
          </Typography>

          {/* Lobby Logic Section */}
          <Typography variant="h5" gutterBottom>
            Pre-Game Logic
          </Typography>
          <SubSection>
            <ProyectLobbyInfo />
          </SubSection>

          {/* Game Logic Section */}
          <Typography variant="h5" gutterBottom>
            In-Game Logic
          </Typography>

          <SubSection>
            <ProyectGameInfo></ProyectGameInfo>
          </SubSection>


        </InfoSection>
      </MainContainer>
    </BackgroundContainer>
  );
};

export default DuckGamePage;
