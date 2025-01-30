import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

import PlayerGameLogic from './PlayerGameLogic';
import GameLogic from './GameLogic';
import WeaponGameLogic from './WeaponGameLogic';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const ProyectGameInfo = () => {
    return (
        <>
            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                    <Typography variant="h5" gutterBottom>Begining of the game -  Game Instance and Players</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PlayerGameLogic />
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                    <Typography variant="h5" gutterBottom>GameLoop and Map</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <GameLogic />
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                    <Typography variant="h5" gutterBottom>Weapons</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <WeaponGameLogic />
                </AccordionDetails>
            </Accordion>

        </>
    );
};

export default ProyectGameInfo;

