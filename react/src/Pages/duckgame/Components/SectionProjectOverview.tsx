import React from "react";
import { Typography, Chip, Stack, Box } from "@mui/material";
import { Hub } from "@mui/icons-material";
import MediationIcon from '@mui/icons-material/Mediation';
import CodeIcon from '@mui/icons-material/Code';
import ItemList from "./CItemList";

const technologies = [
    { name: "C++", icon: <CodeIcon /> },
    { name: "Multithreading", icon: <MediationIcon /> },
    { name: "Sockets", icon: <Hub /> },
];

const achievements = [
    "Designed and implemented a multithreaded game loop architecture managing concurrent player actions, physics calculations, and state synchronization.",
    "Built a custom physics engine with configurable parameters for realistic movement simulation, including friction and gravity effects.",
    "Developed an advanced weapon system featuring polymorphic interfaces and multiple projectile types, each with unique behavior patterns.",
    "Implemented a sophisticated collision detection and resolution system using AABB (Axis-Aligned Bounding Box) methodology.",
    "Created a dynamic game state management system handling real-time updates and maintaining game consistency across multiple players.",
    "Engineered a modular weapon factory system supporting runtime weapon creation and distribution through spawn points."
];

const technicalHighlights = [
    "Utilized design patterns including Strategy Pattern for weapon behaviors and Factory Pattern for dynamic object creation.",
    "Implemented thread-safe communication protocols between game components ensuring data consistency.",
    "Developed a comprehensive event system managing game physics, collisions, and player interactions.",
    "Created an extensible architecture supporting easy addition of new weapons and game mechanics."
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

        <ItemList title="Key Technical Achievements" items={achievements} />

        <ItemList title="Technical Implementation Highlights" items={technicalHighlights} />
    </>
    );
}

export default ProjectOverview
