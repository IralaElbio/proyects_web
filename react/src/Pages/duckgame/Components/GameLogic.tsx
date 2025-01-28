import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GameLogic = () => {
    return (
        <Box sx={{}}>
            {/* Title */}
            <Typography variant="h4" gutterBottom>
                Game Logic
            </Typography>

            {/* General Description */}
            <Typography variant="body1" paragraph>
                Este componente gestiona múltiples aspectos clave del juego, incluyendo la interacción
                con los jugadores, las plataformas, las balas y los elementos del mapa. A continuación,
                se detalla su funcionamiento y los principales componentes que lo conforman.
            </Typography>

            {/* Challenges and Solutions */}
            <Typography variant="h5" gutterBottom>
                Retos afrontados y soluciones realizadas
            </Typography>
            <Typography variant="body1" paragraph>
                Garantizar un manejo eficiente de colisiones, la sincronización de las acciones de los
                jugadores y la actualización en tiempo real de los elementos del mapa representaron los
                principales desafíos. Estos fueron resueltos mediante el uso de estructuras optimizadas
                y clases especializadas, como CollisionManager y CollisionEventManager.
            </Typography>

            {/* Additional Information */}
            <Typography variant="h5" gutterBottom>
                Información adicional
            </Typography>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>GameMap</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Representa el mapa del juego y gestiona las plataformas, balas activas, posiciones
                        iniciales de los jugadores, límites del mapa y los ItemSpawners. Es clave para
                        mantener la integridad del entorno de juego y coordinar las interacciones.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>CollisionManager</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Identifica colisiones entre objetos con colliders usando el modelo AABB. Proporciona
                        resultados detallados a través del struct CollisionResult, que incluye información
                        sobre el área de colisión (superior, inferior, etc.).
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>CollisionEventManager</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Resuelve colisiones detectadas por CollisionManager. Maneja posiciones correctas de
                        jugadores al colisionar, gestiona interacciones de balas con jugadores y plataformas,
                        y aplica efectos específicos según el tipo de colisión.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>GameLoop</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Coordina las acciones de los jugadores e interactúa con otras clases como GameMap
                        y PlayerController. Realiza tareas en un orden específico, como manejar las acciones
                        de los jugadores, actualizar estados, resolver posiciones incorrectas, procesar
                        disparos y generar mensajes del estado del juego.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>GameStateMessage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Contiene los datos actualizados del juego y se utiliza para comunicar el estado a
                        todos los jugadores. Incluye información procesada por el GameLoop y PlayerController.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default GameLogic;
