import { Stack } from "@mui/material";
import {
  Container,
  Title,
} from "../Styles/HomeStyles";
import duckGameImg from "../assets/DuckGame_img.png";
import workInProgres from "../assets/WorkInProgress.png";
import ProjectCard from "../Components/ProjectCard";
import projectBoxSimulator from "../Assets/BoxSimulator_img.jpeg";
import projectKaggle from "../Assets/KaggleComp_img.jpeg";
import projectStore from "../Assets/StoreSimulator_img.jpeg";
import projectLambda from "../Assets/InterpreteLambda_img.png";
import projectMonopoly from "../Assets/Monopoly_img.jpg";
import projcetAssembler from "../Assets/ZorroYOcas_img.png"

function Home() {
  return (
    <Container>
      <Title variant="h3" gutterBottom>
        Projects
      </Title>
      <Stack spacing={1}>
        <ProjectCard
          image={duckGameImg}
          title="Duck Game"
          description="In this project, I worked on the back end to develop a copy of the game DuckGame from scratch, using only C++ and sockets, as part of a university project. My task was to create the server to synchronize the players and manage the game's physics and logic."
          link="/duckgame"
        />

        <ProjectCard
          image={projectKaggle}
          title="VPN Proxy Classification - Kaggle Competition"
          description="In this Kaggle competition, I trained three machine learning models to classify IP addresses as VPN or Proxy using crowdsourced data from the Crowdsec cybersecurity engine. I experimented with a Perceptron model as a baseline, followed by Random Forest and XGBoost models. The XGBoost model achieved the highest score of 0.73, securing 9th place in the competition.
          I used Google Notebooks, pandas, Matplotlib, and Plotly for data analysis. The dataset was a massive 8 GB CSV containing approximately 60 million records, requiring efficient data processing and visualization techniques."
          isInProgress={true}
        />

        <ProjectCard
          image={projectBoxSimulator}
          title="Multi-threaded Game Server Simulator"
          description="In this project, I built a multiplayer game simulator where players use console commands to interact with collectable boxes. I created both the server that manages the game state and the client program that players use to connect and send commands. The server handles multiple players simultaneously, keeping track of item boxes that respawn after being collected and notifying all players about game events. The implementation uses C++ with POSIX sockets and a designed protocol for network communication, multiple threads to handle concurrent player connections efficiently. Each client connection is managed by dedicated threads for sending and receiving data, while thread-safe queues ensure reliable communication between game components."
          isInProgress={true}
        />

        <ProjectCard
          image={projectStore}
          title="Weapon Marketplace Simulator"
          description="In this project, I developed a client-server system that simulates a weapons marketplace. The server manages a virtual armory where players can purchase and equip weapons and ammunition, with all transactions logged. The system uses a custom binary protocol for client-server communication, supporting message types for purchase orders, equipment updates, and ammunition counts. Players interact through a command-line interface, equipping primary and secondary weapons or toggling knife equipment. "
          isInProgress={true}
        />

        <ProjectCard
          image={projectLambda}
          title="Lambda Calculus Interpreter"
          description="Collaboratively developed a Lambda Calculus interpreter in Scala, adhering strictly to functional programming paradigms. The system implements both call-by-name and call-by-value reduction strategies for λ-expressions, along with free variable identification capabilities. I was responsible for implementing the Parser component, which generates an Abstract Syntax Tree (AST) from pre-generated input tokens, facilitating structured representation of λ-terms. The Parser utilizes recursive descent techniques to handle nested expressions and maintains proper variable scope binding."
          isInProgress={true}
        />

        <ProjectCard
          image={projectMonopoly}
          title="Monopoly Game with Text-Based Interface in Java"
          description="Collaborated in developing a complete Monopoly game implementation in Java from scratch. The project follows Object-Oriented Programming principles to model the game's core mechanics and state management. I was responsible for designing and implementing the Command-Line Interface (CLI), which handles user input/output operations and game state visualization. The CLI component features game state representation, and command system for player actions. The interface communicates game events, property management, and player transactions through a text-based display system."
          isInProgress={true}
        />

        <ProjectCard
          image={projcetAssembler}
          title="Fox and Geese Game Assembly Implementation"
          description="Co-developed a complete implementation of the Fox and Geese board game in Assembly language. I was responsible for developing the display interface to render the game board and statistics. Additionally, contributed to the game's core logic implementation, including move validation and game flow control."
          isInProgress={true}
        />

        <ProjectCard
          image={workInProgres}
          title="Work In Progress..."
          description=""
          isInProgress={true}
        />
      </Stack>
    </Container>
  );
}

export default Home;
