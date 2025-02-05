import React from "react";
import { Box, Stack } from "@mui/material";
import { TextBody } from "../DuckGameStyles"

interface DescriptionWithImageProps {
    description: string;
    imageSrc?: string;
}

const DescriptionWithImage: React.FC<DescriptionWithImageProps> = ({ description, imageSrc }) => {
    return (
        <Stack spacing={2}>
            {description.split("\n").map((line, index) => (
                <TextBody key={index}>
                    {line}
                </TextBody>
            ))}
            <Box
                maxWidth={500}
                maxHeight={500}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <img src={imageSrc} alt="Imagen" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </Box>
        </Stack>
    );
};

export default DescriptionWithImage;
