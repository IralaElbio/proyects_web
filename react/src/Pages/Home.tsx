import { Stack, CardContent, CardActions } from "@mui/material";
import {
  Container,
  Title,
  StyledCard,
  StyledCardMedia,
  StyledCardTitle,
  StyledCardDescription,
  StyledButton,
} from "../styles/HomeStyles";
import duckGameImg from "../assets/DuckGame_img.png";
import workInProgres from "../assets/WorkInProgress.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Title variant="h3" gutterBottom>
        Projects
      </Title>
      <Stack spacing={1}>
        <StyledCard>
          <StyledCardMedia image={duckGameImg} />
          <CardContent>
            <StyledCardTitle gutterBottom variant="h5">
              Duck Game - Proyect
            </StyledCardTitle>
            <StyledCardDescription variant="body2">
              In this project, I worked on the back end to develop a copy of the
              game DuckGame from scratch, using only C++ and sockets, as part of
              a university project. My task was to create the server to
              synchronize the players and manage the game's physics and logic.
            </StyledCardDescription>
          </CardContent>
          <CardActions>
            <Link to="/duckgame" style={{ textDecoration: "none" }}>
              <StyledButton size="small">Learn More</StyledButton>
            </Link>
          </CardActions>
        </StyledCard>

        <StyledCard>
          <StyledCardMedia image={workInProgres} />
          <CardContent>
            <StyledCardTitle gutterBottom variant="h5">
              Project 2
            </StyledCardTitle>
            <StyledCardDescription variant="body2">
              Work in progress... adding more of my projects soon.
            </StyledCardDescription>
          </CardContent>
          <CardActions>
            <StyledButton size="small">Learn More</StyledButton>
          </CardActions>
        </StyledCard>
      </Stack>
    </Container>
  );
}

export default Home;
