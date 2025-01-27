import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function TechnicalAchievements() {
    return (
        <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.95)", marginBottom: "20px" }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Technical Achievements
                </Typography>
                <Typography variant="body1" component="div">
                    • Successfully implemented a multithreaded architecture to handle multiple simultaneous connections.
                    <br />
                    • Developed a custom physics engine for player movement.
                    <br />
                    • Efficient AABB collision system for interaction detection.
                    <br />
                    • Modular weapon system using design patterns (Strategy, Factory).
                    <br />
                    • Effective synchronization of game state across multiple clients.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TechnicalAchievements
