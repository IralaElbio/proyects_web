import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, IconButton, Stack, Box } from "@mui/material";
import { TextBody } from "../DuckGameStyles";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const ImageContainer = styled(Box)(({ theme }) => ({
    maxWidth: 600,
    maxHeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
    "&:hover": {
        transform: "scale(1.01)",
    },
}));

const CloseButton = styled(IconButton)({
    position: "absolute",
    top: 8,
    right: 8,
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    "&:hover": {
        background: "rgba(0, 0, 0, 0.7)",
    },
});

interface DescriptionWithImageProps {
    description: string;
    imageSrc?: string;
}

const DescriptionWithImage: React.FC<DescriptionWithImageProps> = ({ description, imageSrc }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Stack spacing={2}>
                {description.split("\n").map((line, index) => (
                    <TextBody key={index}>{line}</TextBody>
                ))}

                <ImageContainer onClick={() => setOpen(true)}>
                    <img src={imageSrc} alt="Imagen" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </ImageContainer>
            </Stack>

            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">
                <DialogContent sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
                    <CloseButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </CloseButton>
                    <img src={imageSrc} alt="Imagen ampliada" style={{ maxWidth: "90vw", maxHeight: "90vh" }} />
                </DialogContent>
            </Dialog>
        </>
    );
};



export default DescriptionWithImage;
