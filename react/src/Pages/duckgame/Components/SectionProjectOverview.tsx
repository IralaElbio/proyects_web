import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Stack, Box, Chip } from "@mui/material";
import { FlexBoxRow, FlexBoxRowContent, StyledStackContainer, SubSectionTitle, TextBody } from "../DuckGameStyles";
import { Hub } from "@mui/icons-material";
import MediationIcon from '@mui/icons-material/Mediation';
import CodeIcon from '@mui/icons-material/Code';
import ItemList from "./CItemList";

const StyledChip = styled(Chip)(({ theme }) => ({
    borderColor: theme.palette.primary.light,
    color: theme.palette.primary.light,
    "& .MuiChip-icon": {
        color: theme.palette.primary.light,
    },
}));

const ProjectOverviewContent = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
}));

const ProjectOverviewVideo = styled(Box)(() => ({
    flex: 1,
    width: "100%",
    aspectRatio: "16/9",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

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
    return (
        <StyledStackContainer>
            <FlexBoxRow>
                <ProjectOverviewContent>
                    <SubSectionTitle>
                        Project Overview
                    </SubSectionTitle>
                    <TextBody>
                        Developed a comprehensive backend system for a real-time multiplayer action game,
                        implementing a robust multithreaded architecture that handles complex game mechanics
                        and player interactions. The project showcases advanced software engineering
                        principles and pattern implementations while delivering smooth gameplay experiences.
                    </TextBody>
                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                        {technologies.map((tech) => (
                            <StyledChip key={tech.name} label={tech.name} icon={tech.icon} variant="outlined" />
                        ))}
                    </Stack>
                </ProjectOverviewContent>
                <ProjectOverviewVideo>
                    <Typography>Video Placeholder</Typography>
                </ProjectOverviewVideo>
            </FlexBoxRow>

            <ItemList title="Key Technical Achievements" items={achievements} />

            <ItemList title="Technical Implementation Highlights" items={technicalHighlights} />

        </StyledStackContainer>
    );
}

export default ProjectOverview
