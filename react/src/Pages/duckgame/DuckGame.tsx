import ProyectOverview from "./Components/SectionProjectOverview"
import Lobby from "./Components/SectionLobby";
import Game from "./Components/SectionGame";
import HeroSection from "./Components/SectionTitle";
import { SectionTitle, SubSection, SubTitle, SpacedStack, MainContainer, PilarsContainer, PagePillar } from "./DuckGameStyles";
import { Typography } from "@mui/material";

const DuckGamePage = () => {
  return (
    <>
      <HeroSection />

      <PilarsContainer>
        <PagePillar />


        <MainContainer>

          {/* Overview Section */}
          <ProyectOverview />

        </MainContainer>
        <PagePillar />
      </PilarsContainer>

      <MainContainer>

        <SpacedStack>
          <SubTitle>
            Tecnical Information
            <Typography textAlign={"center"} fontWeight={200}>Informacion adicional de clases asi como desafios que presento el proyecto</Typography>
          </SubTitle>

          {/* Lobby Logic Section */}
          <SubSection>
            <SectionTitle> Pre-Game Logic </SectionTitle>
            <Lobby />
          </SubSection>

          {/* Game Logic Section */}
          <SubSection>
            <SectionTitle> In-Game Logic </SectionTitle>
            <Game />
          </SubSection>

        </SpacedStack>
      </MainContainer>
    </>
  );
};

export default DuckGamePage;
