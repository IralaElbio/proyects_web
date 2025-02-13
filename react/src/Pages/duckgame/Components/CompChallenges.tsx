import React from "react";
import { Box, Typography } from "@mui/material";
import { SubSectionTitle, TextBody } from "../DuckGameStyles";

interface ChallengeSolution {
  title: string;
  challenge: string;
  solution: string;
}

interface ChallengesAndSolutionsProps {
  data: ChallengeSolution[];
}

const ChallengesAndSolutions: React.FC<ChallengesAndSolutionsProps> = ({
  data,
}) => {
  return (
    <Box>
      <SubSectionTitle>Challanges and Solutions</SubSectionTitle>
      {data.map((item, index) => (
        <Box key={index}>
          <Typography
            fontWeight="bold"
            color="white"
            variant="h6"
            sx={{ fontSize: "clamp(0.8rem, 2vw, 1.5rem)" }}
          >
            {" "}
            {item.title}{" "}
          </Typography>
          <TextBody>
            <strong>Challenge:</strong> {item.challenge}
            <br />
            <strong>Solution:</strong> {item.solution}
          </TextBody>
        </Box>
      ))}
    </Box>
  );
};

export default ChallengesAndSolutions;
