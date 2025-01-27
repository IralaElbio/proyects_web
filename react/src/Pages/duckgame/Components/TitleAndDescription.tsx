import React from 'react';
import { Typography, Box } from '@mui/material';

interface TitleAndDescriptionProps {
    title: string;
    description: string;
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({ title, description }) => {
    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
        </Box>
    );
};

export default TitleAndDescription;
