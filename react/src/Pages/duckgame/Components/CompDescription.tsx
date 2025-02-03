import React from "react";
import { Typography, Box } from "@mui/material";

interface TitleAndDescriptionProps {
    title: string;
    children: React.ReactNode;
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({ title, children }) => {
    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {title}
            </Typography>
            <Typography variant="body1">{children}</Typography>
        </Box>
    );
};

export default TitleAndDescription;
