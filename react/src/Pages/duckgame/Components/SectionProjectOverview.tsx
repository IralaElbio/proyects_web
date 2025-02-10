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
    fontSize: "1rem",
    height: "30px",
    "& .MuiChip-icon": {
        color: theme.palette.primary.light,
        fontSize: "1rem",
    },
    "@media (max-width: 700px)": {
        fontSize: "0.6rem",
        height: "18px",
        "& .MuiChip-icon": {
            fontSize: ".6rem",
        },
    },
}));

const ProjectOverviewVideo = styled(Box)(() => ({
    flex: 1,
    width: "100%",
    aspectRatio: "16/9",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
}));

const technologies = [
    { name: "C++", icon: <CodeIcon /> },
    { name: "Multithreading", icon: <MediationIcon /> },
    { name: "Sockets", icon: <Hub /> },
];

const achievements = [
    "Designed and implemented a multithreaded game architecture managing concurrent player actions, physics calculations, and state synchronization.",
    "Built a custom physics engine with configurable parameters for movement simulation, including friction and gravity effects.",
    "Developed an advanced weapon system featuring polymorphic interfaces and multiple projectile types, each with unique behavior patterns.",
    "Implemented a collision detection and resolution system using AABB (Axis-Aligned Bounding Box) methodology.",
    "Created a dynamic game state management system handling real-time updates and maintaining game consistency across multiple players."
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
            <FlexBoxRow marginBottom={6}>
                <FlexBoxRowContent>
                    <SubSectionTitle>
                        Project Overview
                    </SubSectionTitle>
                    <TextBody>
                        Developed the server-side infrastructure for a real-time multiplayer action game,
                        a replica of Duck Game, implementing client-server communication from scratch
                        using C++ and sockets.
                        Designed a multithreaded system to manage player connections,
                        synchronize game state, and handle data transmission efficiently,
                        ensuring all players receive real-time updates.
                    </TextBody>
                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={1} gap={0.5}>
                        {technologies.map((tech) => (
                            <StyledChip key={tech.name} label={tech.name} icon={tech.icon} variant="outlined" />
                        ))}
                    </Stack>
                </FlexBoxRowContent>
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
