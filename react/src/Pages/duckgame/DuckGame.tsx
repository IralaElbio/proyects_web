import ProyectOverview from "./Components/SectionProjectOverview";
import Lobby from "./Components/SectionLobby";
import Game from "./Components/SectionGame";
import HeroSection from "./Components/SectionTitle";
import {
  SectionTitle,
  SectionContainer,
  Title,
  OverviewContainer,
  PilarsContainer,
  PagePillar,
  InfoContainer,
} from "./DuckGameStyles";
import { Typography, Stack } from "@mui/material";

const DuckGamePage = () => {
  return (
    <>
      <HeroSection />

      <PilarsContainer>
        <PagePillar />

        <OverviewContainer>
          {/* Overview Section */}
          <ProyectOverview />
        </OverviewContainer>
        <PagePillar />
      </PilarsContainer>

      <InfoContainer>
        <Stack spacing={1}>
          <Title>
            Tecnical Information
            <Typography
              fontStyle={"italic"}
              textAlign={"center"}
              fontWeight={200}
            >
              Details on classes and challenges encountered in the project
            </Typography>
          </Title>

          {/* Lobby Logic Section */}
          <SectionContainer>
            <SectionTitle> Pre-Game Logic </SectionTitle>
            <Lobby />
          </SectionContainer>

          {/* Game Logic Section */}
          <SectionContainer>
            <SectionTitle> In-Game Logic </SectionTitle>
            <Game />
          </SectionContainer>
        </Stack>
      </InfoContainer>
    </>
  );
};

export default DuckGamePage;
