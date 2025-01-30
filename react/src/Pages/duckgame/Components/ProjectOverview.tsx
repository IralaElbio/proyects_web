import React from "react";
import { Typography, Chip, Stack, Box, List, ListItem, ListItemText } from "@mui/material";
import { Hub } from "@mui/icons-material";
import MediationIcon from '@mui/icons-material/Mediation';
import CodeIcon from '@mui/icons-material/Code';

const technologies = [
    { name: "C++", icon: <CodeIcon /> },
    { name: "Multithreading", icon: <MediationIcon /> },
    { name: "Sockets", icon: <Hub /> },
];
function ProjectOverview() {
    return (<>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "0px"
        }}>
            <Box flex={1}>
                <Typography variant="h5" gutterBottom>
                    Proyect Overview
                </Typography>
                <Typography variant="body1">
                    Developed a comprehensive backend system for a real-time multiplayer action game,
                    implementing a robust multithreaded architecture that handles complex game mechanics
                    and player interactions. The project showcases advanced software engineering
                    principles and pattern implementations while delivering smooth gameplay experiences.
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

        <Typography variant="h5" gutterBottom>
            Key Technical Achievements
        </Typography>
        <Box component="ul" sx={{ marginBottom: 3, paddingLeft: 2 }}>
            <Typography component="li" variant="body1">
                Designed and implemented a multithreaded game loop architecture managing concurrent player actions, physics calculations, and state synchronization.
            </Typography>
            <Typography component="li" variant="body1">
                Built a custom physics engine with configurable parameters for realistic movement simulation, including friction and gravity effects.
            </Typography>
            <Typography component="li" variant="body1">
                Developed an advanced weapon system featuring polymorphic interfaces and multiple projectile types, each with unique behavior patterns.
            </Typography>
            <Typography component="li" variant="body1">
                Implemented a sophisticated collision detection and resolution system using AABB (Axis-Aligned Bounding Box) methodology.
            </Typography>
            <Typography component="li" variant="body1">
                Created a dynamic game state management system handling real-time updates and maintaining game consistency across multiple players.
            </Typography>
            <Typography component="li" variant="body1">
                Engineered a modular weapon factory system supporting runtime weapon creation and distribution through spawn points.
            </Typography>
        </Box>

        <Typography variant="h5" gutterBottom>
            Technical Implementation Highlights
        </Typography>
        <Box component="ul" sx={{ marginBottom: 3, paddingLeft: 2 }}>
            <Typography component="li" variant="body1">
                Utilized design patterns including Strategy Pattern for weapon behaviors and Factory Pattern for dynamic object creation.
            </Typography>
            <Typography component="li" variant="body1">
                Implemented thread-safe communication protocols between game components ensuring data consistency.
            </Typography>
            <Typography component="li" variant="body1">
                Developed a comprehensive event system managing game physics, collisions, and player interactions.
            </Typography>
            <Typography component="li" variant="body1">
                Created an extensible architecture supporting easy addition of new weapons and game mechanics.
            </Typography>
        </Box>
    </>
    );
}

export default ProjectOverview
