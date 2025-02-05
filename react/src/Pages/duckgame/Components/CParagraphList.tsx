import React from "react";
import { Typography } from "@mui/material";
import { TextBody } from "../DuckGameStyles";

interface ParagraphListProps {
    content: string[];
}

const ParagraphList: React.FC<ParagraphListProps> = ({ content }) => {
    return (
        <>
            {content.map((paragraph, index) => (
                <TextBody key={index}>
                    {paragraph}
                </TextBody>
            ))}
        </>
    );
};

export default ParagraphList;
