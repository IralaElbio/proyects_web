import React from 'react'
import {
  StyledCard,
  StyledCardMedia,
  StyledCardTitle,
  StyledCardDescription,
  StyledButton,
} from "../Styles/HomeStyles";
import { CardContent, CardActions } from "@mui/material";
import { Link } from "react-router-dom";


interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  isInProgress?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link, isInProgress }) => {
  return (
    <StyledCard>
      <StyledCardMedia image={image} />
      <CardContent>
        <StyledCardTitle gutterBottom variant="h5">
          {title}
        </StyledCardTitle>
        <StyledCardDescription variant="body2">
          {description}
        </StyledCardDescription>
      </CardContent>
      <CardActions>
        {isInProgress ? (
          <StyledButton size="small" disabled>
            In Progress
          </StyledButton>
        ) : (
          <Link to={link!} style={{ textDecoration: "none" }}>
            <StyledButton size="small">Learn More</StyledButton>
          </Link>
        )}
      </CardActions>
    </StyledCard>
  );
};

export default ProjectCard;
