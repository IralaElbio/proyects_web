import ProyectOverview from "./Components/SectionProjectOverview"
import Lobby from "./Components/SectionLobby";
import Game from "./Components/SectionGame";
import HeroSection from "./Components/SectionTitle";
import { SectionTitle, SubSection, SubTitle, SpacedStack } from "./DuckGameStyles";

const DuckGamePage = () => {
  return (
    <>
      <HeroSection />

      <SpacedStack>

        {/* Overview Section */}
        <ProyectOverview />

        <SubTitle>
          Tecnical Information
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
    </>
  );
};

export default DuckGamePage;
