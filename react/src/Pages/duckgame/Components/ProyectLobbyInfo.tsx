import React from 'react';
import { Box, Typography, Stack, styled } from '@mui/material';
import ChallengesAndSolutions from './ChallengesAndSolutions';
import AccordionListWithHeader from './AccordionList';
import TitleAndDescription from './TitleAndDescription';

const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4, 4),
    background: "grey",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 2),
    },
}));

const lobbyDescription = `
    En esta parte del juego, los jugadores se agrupan en Lobbies antes de comenzar la partida. Los jugadores pueden crear un nuevo lobby o unirse a uno existente, y una vez que todos los jugadores están listos, el sistema, a través de la clase GameManager, coordina la creación del juego y el cierre del lobby. El ClientManager gestiona la conexión y comunicación con cada cliente, asegurando que no haya conflictos de acceso a lobbies que ya estén llenos o cerrados. Cuando la partida termina, los lobbies se eliminan de manera eficiente, permitiendo que el flujo de jugadores sea continuo y organizado.
`;

const challengesAndSolutions = [
    {
        title: 'Gestión de múltiples conexiones simultáneas',
        challenge: 'Aceptar y manejar múltiples clientes sin bloquear las operaciones del servidor.',
        solution: 'Se utilizó un hilo (ClientManager) para cada cliente, permitiendo la gestión simultánea de sus solicitudes y comunicación de manera eficiente y aislada.'
    },
    {
        title: 'Sincronización entre clientes y lobbies',
        challenge: 'Evitar conflictos al permitir que varios clientes interactúen con los mismos recursos (lobbies).',
        solution: 'El GameManager actúa como un monitor, sincronizando el acceso a los lobbies y garantizando que no se produzcan condiciones de carrera o inconsistencias.'
    },
    {
        title: 'Transición del Lobby al Juego',
        challenge: 'Determinar cuándo un lobby está listo para iniciar una instancia de juego y manejar la transición sin interrupciones.',
        solution: 'Cada Lobby notifica al GameManager cuando todos los clientes están listos, lo que desencadena la creación de una instancia de juego y la eliminación del lobby.'
    },
    {
        title: 'Optimización del uso de recursos',
        challenge: 'Gestionar la creación y eliminación de hilos y recursos para evitar sobrecargar el servidor.',
        solution: 'Los hilos de ClientManager y las instancias de lobbies y juegos se eliminan de manera controlada una vez que cumplen su propósito (El cliente pasa del Lobby al juego). '
    }
];


const accordionData = [
    {
        summary: 'ClientManager',
        details: 'Es un thread que se lanza cada vez que un nuevo cliente es aceptado por el acceptor. Gestiona las peticiones de los clientes relacionadas con entrar o crear un lobby. Toda la comunicación del cliente se realiza de manera bloqueante dentro de esta clase, ya que no utiliza threads adicionales. Hay una instancia de esta clase por cada cliente en el servidor, y todas interactúan con el GameManager.',
    },
    {
        summary: 'GameManager',
        details: 'Es un monitor y la clase principal del servidor. Aloja las instancias de juego (GameInstance) y los lobbies. Se encarga de gestionar la creación, entrada y eliminación de lobbies, asegurando que los clientes no accedan a lobbies llenos o cerrados. Además, administra la creación, monitoreo y eliminación de los juegos que han finalizado.',
    },
    {
        summary: 'Lobby',
        details: 'Clase que aloja a los clientes antes de que entren juntos al juego. Notifica al GameManager cuando todos los clientes en el lobby están listos, para proceder con la creación del juego, el cierre del lobby y su posterior eliminación.',
    },
];

const ProyectLobbyInfo = () => {
    return (
        <Stack spacing={3}>
            {/* Summary and UML Diagram */}
            <Stack direction="row" spacing={2}>
                <Container>
                    <TitleAndDescription title="Server - Información del Lobby" description={lobbyDescription} />
                </Container>

                <Box width={3000} height={300} bgcolor="black" display="flex" justifyContent="center" alignItems="center">
                    <Typography>Diagrama UML aquí</Typography>
                </Box>
            </Stack>
            <Container>
                {/* Challenges and Achievements */}
                <ChallengesAndSolutions data={challengesAndSolutions} />
            </Container>

            <Container>
                {/* Additional Information */}
                <AccordionListWithHeader title="Informacion adicional de las clases" data={accordionData} />
            </Container>
        </Stack>
    );
};

export default ProyectLobbyInfo;
