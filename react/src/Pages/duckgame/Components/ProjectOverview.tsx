import React from "react";
import { Typography, Chip, Stack, Box } from "@mui/material";
import { Hub } from "@mui/icons-material";
import MediationIcon from '@mui/icons-material/Mediation';
import CodeIcon from '@mui/icons-material/Code';

const technologies = [
    { name: "C++", icon: <CodeIcon /> },
    { name: "Multithreading", icon: <MediationIcon /> },
    { name: "Sockets", icon: <Hub /> },
];
function ProjectOverview() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px"
        }}>
            <Box flex={1}>
                <Typography variant="h4" gutterBottom>
                    Project Overview
                </Typography>
                <Typography variant="body1">
                    Full backend development for a real-time multiplayer game,
                    implementing a multithreaded architecture with physics systems,
                    collision detection, and game state management.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
                    {technologies.map((tech) => (
                        <Chip key={tech.name} label={tech.name} icon={tech.icon} variant="outlined" sx={{
                            backgroundColor: "#ddd",
                        }} />
                    ))}
                </Stack>
            </Box>
            <Box flex={1}>
                {/* Replace with a video component or iframe */}
                <Box
                    sx={{
                        width: "100%",
                        aspectRatio: "16/9",
                        backgroundColor: "black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography>Video Placeholder</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ProjectOverview
