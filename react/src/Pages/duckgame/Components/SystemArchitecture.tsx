import React from "react";
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface ArchitectureComponent {
    title: string;
    description: string;
    details: string[];
}

interface SystemArchitectureProps {
    components: ArchitectureComponent[];
}

function SystemArchitecture({ components }: SystemArchitectureProps) {
    return (
        <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.95)", marginBottom: "20px" }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    System Architecture
                </Typography>
                {components.map((component, index) => (
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMore />} aria-labelledby={`panel-${index}`}>
                            <Typography id={`panel-${index}`} variant="h6">
                                {component.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" gutterBottom>{component.description}</Typography>
                            <Typography variant="body2">{component.details.join(", ")}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </CardContent>
        </Card>
    );
}

export default SystemArchitecture
