import React from "react";
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
import proyectImage from "../assets/image_proyect.jpg";

function Home() {
  return (
    <Container>
      <Title variant="h3" gutterBottom>
        Projects
      </Title>
      <Stack spacing={1}>
        <StyledCard>
          <StyledCardMedia image={proyectImage} />
          <CardContent>
            <StyledCardTitle gutterBottom variant="h5">
              Project 1
            </StyledCardTitle>
            <StyledCardDescription variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ea laborum dolore sapiente fugiat beatae, soluta, libero
              recusandae quo repellat culpa. Perferendis minima laboriosam atque
              dolores.
            </StyledCardDescription>
          </CardContent>
          <CardActions>
            <StyledButton size="small">Learn More</StyledButton>
          </CardActions>
        </StyledCard>

        <StyledCard>
          <StyledCardMedia image={proyectImage} />
          <CardContent>
            <StyledCardTitle gutterBottom variant="h5">
              Project 2
            </StyledCardTitle>
            <StyledCardDescription variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ea laborum dolore sapiente fugiat beatae, soluta, libero
              recusandae quo repellat culpa. Perferendis minima laboriosam atque
              dolores.
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
