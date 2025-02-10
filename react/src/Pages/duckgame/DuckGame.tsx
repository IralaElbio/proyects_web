import ProyectOverview from "./Components/SectionProjectOverview"
import Lobby from "./Components/SectionLobby";
import Game from "./Components/SectionGame";
import HeroSection from "./Components/SectionTitle";
import { SectionTitle, SubSection, SubTitle, SpacedStack, MainContainer, PilarsContainer, PagePillar, PageContainer } from "./DuckGameStyles";
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

      <PageContainer >

        <SpacedStack>
          <SubTitle>
            Tecnical Information
            <Typography fontStyle={"italic"} textAlign={"center"} fontWeight={200}>Details on classes and challenges encountered in the project</Typography>
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
      </PageContainer>
    </>
  );
};

export default DuckGamePage;
