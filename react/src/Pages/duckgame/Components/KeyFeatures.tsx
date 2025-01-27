import React from "react";
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface Feature {
    title: string;
    description: string;
    details: string[];
}

interface KeyFeaturesProps {
    features: Feature[];
}

function KeyFeatures({ features }: KeyFeaturesProps) {
    return (
        <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.95)", marginBottom: "20px" }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Key Features
                </Typography>
                {features.map((feature, index) => (
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMore />} aria-labelledby={`feature-${index}`}>
                            <Typography id={`feature-${index}`} variant="h6">
                                {feature.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" gutterBottom>{feature.description}</Typography>
                            <Typography variant="body2">{feature.details.join(", ")}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </CardContent>
        </Card>
    );
}

export default KeyFeatures
