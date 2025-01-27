import React from 'react';
import { Box, Typography } from '@mui/material';

interface ChallengeSolution {
    title: string;
    challenge: string;
    solution: string;
}

interface ChallengesAndSolutionsProps {
    data: ChallengeSolution[];
}

const ChallengesAndSolutions: React.FC<ChallengesAndSolutionsProps> = ({ data }) => {
    return (
        <Box>
            {data.map((item, index) => (
                <Box key={index} mb={3}>
                    <Typography variant="body1" fontWeight="bold">
                        {item.title}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Reto:</strong> {item.challenge}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Solución:</strong> {item.solution}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default ChallengesAndSolutions;
