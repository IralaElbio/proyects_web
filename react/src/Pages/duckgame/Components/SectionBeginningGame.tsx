import ChallengesAndSolutions from "./CompChallenges";
import AccordionWNode from "./CAccordion";
import DescriptionWithImage from "./CDescripWImage";
import physicsConfigImage from "../Assets/PhysicsConfig.png";
import gameInstanceImg from "../Assets/GameInstance.png";
import gameUML from "../Assets/GameUML.png";
import ParagraphList from "./CParagraphList";
import {
  SubSectionTitle,
  TextBody,
  StyledBox,
  FlexBoxRow,
  FlexBoxRowContent,
} from "../DuckGameStyles";

const challengesAndSolutions = [
  {
    title: "Player Entry Synchronization",
    challenge: "Synchronizing player entry and game start.",
    solution:
      "GameInstance ensures that all players are connected before starting the game, preventing it from beginning until everyone is ready.",
  },
  {
    title: "Handling Movement Physics",
    challenge:
      "Managing player movements within the game environment to ensure smooth and customizable controls.",
    solution:
      "The PhysicsEngine calculates player movement, simulates friction, and manages interactions with the ground. Additionally, it implements a struct to allow more customizable movement.",
  },
  {
    title: "Efficient Player-Server Communication",
    challenge: "Efficiently sending and receiving data simultaneously.",
    solution:
      "The Player class handles player actions using dedicated send and receive threads, ensuring interactions are processed efficiently without blocking the game loop.",
  },
];

const content = [
  {
    title: "GameInstance",
    content: (
      <DescriptionWithImage
        description="It includes the main game loop (GameLoop), the class that manages the players in the match (PlayerController), and the physics engine (PhysicsEngine) that players will use when the match begins. It serves as the 'container' (holding all the data and classes) for the game match, with each match running within a GameInstance, allowing for the possibility of having custom physics rules (by modifying the PhysicsEngine configuration) for each game if desired."
        imageSrc={gameInstanceImg}
      />
    ),
  },
  {
    title: "Player",
    content: (
      <TextBody>
        This class is responsible for managing the player's actions (shooting
        and movement), with specific methods to perform these actions. It holds
        all the player's information at a given moment in the game (whether they
        are shooting or not, whether they are running or not, speed on any axis,
        etc.), so other classes can use this information to modify their state.
      </TextBody>
    ),
  },
  {
    title: "PhysicsEngine",
    content: (
      <DescriptionWithImage
        description="This class is responsible for handling the player's movements, pre-configured with physics values stored in a struct (PhysicsConfig). It provides a custom struct (PhysicsState) for each player, containing the necessary data to understand the player's movement state at any given moment. Thanks to these two data structures, it can simulate the game's physics for the players."
        imageSrc={physicsConfigImage}
      />
    ),
  },
];

const BeginningGameSect = () => {
  return (
    <>
      <StyledBox>
        <FlexBoxRow>
          <FlexBoxRowContent>
            <ParagraphList
              content={[
                "The system implements a multiplayer game server where each match is managed by a GameInstance, acting as the central core that coordinates all aspects of the game. This component handles player synchronization and controls match initialization through a multithreaded system that manages the main game loop and communication with each player.",
                "The system includes a custom physics engine that governs player movements and interactions with the environment.",
                "Each player operates with dedicated send and receive threads, while a physics state system and predefined configurations ensure consistent movement and collisions throughout the match.",
              ]}
            />
          </FlexBoxRowContent>
          <FlexBoxRowContent>
            <DescriptionWithImage description="" imageSrc={gameUML} />
          </FlexBoxRowContent>
        </FlexBoxRow>
        <SubSectionTitle> Overview </SubSectionTitle>
      </StyledBox>

      <ChallengesAndSolutions data={challengesAndSolutions} />

      <SubSectionTitle>Class Information</SubSectionTitle>
      <AccordionWNode items={content} titleVariant="h6" />
    </>
  );
};

export default BeginningGameSect;
