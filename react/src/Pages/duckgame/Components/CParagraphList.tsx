import React from "react";
import { Typography } from "@mui/material";

interface ParagraphListProps {
    content: string[];
}

const ParagraphList: React.FC<ParagraphListProps> = ({ content }) => {
    return (
        <>
            {content.map((paragraph, index) => (
                <Typography key={index} gutterBottom>
                    {paragraph}
                </Typography>
            ))}
        </>
    );
};

export default ParagraphList;
