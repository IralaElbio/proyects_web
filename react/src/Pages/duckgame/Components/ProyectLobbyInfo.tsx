import React from 'react';
import { Box, Typography, Stack, Accordion, AccordionSummary, AccordionDetails, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4, 4),
    background: "grey",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 2),
    },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: 'transparent', // Fondo transparente
    boxShadow: 'none',             // Sin sombras
    color: "white",
    border: '1px solid rgba(255, 255, 255, 0.3)', // Borde opcional
}));


const ProyectLobbyInfo = () => {
    return (
        <Stack spacing={3}>
            {/* Summary and UML Diagram */}
            <Typography variant="h5" gutterBottom>
                Server - Información del Lobby
            </Typography>
            <Stack direction="row" spacing={2}>
                <Container>

                    <Typography>
                        Desarrollé la lógica del lobby para un servidor multijugador usando C++, garantizando que los jugadores puedan unirse a un lobby de manera sincronizada antes de iniciar una partida. Implementé un sistema robusto para gestionar clientes, lobbies y sincronización con instancias de juego.
                    </Typography>

                </Container>

                <Box width={3000} height={300} bgcolor="black" display="flex" justifyContent="center" alignItems="center">
                    <Typography>Diagrama UML aquí</Typography>
                </Box>
            </Stack>

            <Container>
                {/* Challenges and Achievements */}
                <Typography variant="h6" gutterBottom>Retos y Logros Conseguidos</Typography>
                <Typography>
                    Reto: Evitar conflictos en la sincronización cuando varios clientes intentan acceder al mismo lobby.
                    <br />
                    Solución: Utilicé un sistema de monitor en GameManager para sincronizar el acceso de los clientes, asegurando la consistencia en los datos compartidos.
                </Typography>
                <Typography>
                    Reto: Manejar múltiples clientes de manera escalable y eficiente.
                    <br />
                    Solución: Diseñé un modelo basado en hilos (ClientManager) que permite procesar conexiones individuales sin afectar el rendimiento general del servidor.
                </Typography>

            </Container>


            <Container>
                {/* Classes Subtitle */}
                <Typography variant="h6">Clases Creadas</Typography>
                {/* Expandable Class Information */}
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                        <Typography>ClientManager</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Diseñé un hilo que gestiona la conexión y las peticiones de cada cliente que desea unirse o crear un lobby. Implementé comunicaciones bloqueantes para simplificar la interacción con clientes sin threads adicionales. Garantizo una instancia de ClientManager independiente por cliente, permitiendo la escalabilidad y la interacción fluida con el GameManager.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>

                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                        <Typography>GameManager</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Construí la clase raíz del servidor, que aloja y sincroniza los lobbies y las instancias de juego. Implementé lógica para crear, gestionar y eliminar lobbies, sincronizar la entrada de clientes y monitorear las instancias de juego terminadas.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>

                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                        <Typography>Lobby</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Creé una clase que gestiona grupos de clientes dentro de un lobby antes de iniciar una partida. Implementé notificaciones al GameManager para confirmar cuándo todos los jugadores están listos, permitiendo la creación de una instancia de juego y el cierre seguro del lobby.
                        </Typography>
                    </AccordionDetails>
                </StyledAccordion>
            </Container>
        </Stack>
    );
};

export default ProyectLobbyInfo;
