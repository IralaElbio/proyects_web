import React from "react";
import { Typography, Box, Stack } from "@mui/material";

interface DescriptionWithImageProps {
    description: string;
    imageSrc?: string;
}

const DescriptionWithImage: React.FC<DescriptionWithImageProps> = ({ description, imageSrc }) => {
    return (
        <Stack spacing={2}>
            {description.split("\n").map((line, index) => (
                <Typography key={index} variant="body1" paragraph>
                    {line}
                </Typography>
            ))}
            <Box
                maxWidth={500}
                maxHeight={500}
                bgcolor="grey"
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
