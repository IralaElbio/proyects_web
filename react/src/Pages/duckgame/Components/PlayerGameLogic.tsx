import React from "react";
import { Box, styled } from '@mui/material';
import TitleAndDescription from "./TitleAndDescription";
import ChallengesAndSolutions from "./ChallengesAndSolutions";
import AccordionListWithHeader from "./AccordionList";


const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4, 4),
    background: "grey",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 2),
    },
}));

const gameInstanceAndPlayersDescription = `
En esta segunda etapa del juego, la clase GameInstance es responsable de gestionar el juego y sus jugadores. Una vez que todos los jugadores se han conectado, el juego inicia y se sincroniza con ellos. GameInstance incluye componentes clave como el GameLoop, que controla el ciclo del juego, el PlayerController, que gestiona las acciones de los jugadores, y el PhysicsEngine, que maneja los movimientos y la física dentro del juego. Además, cada jugador está representado por la clase Player, que gestiona sus acciones, y se comunica a través de hilos dedicados para enviar y recibir datos. 
La física del juego, incluida la simulación de movimientos y colisiones, se gestiona mediante el PhysicsEngine, que calcula las interacciones y movimientos de los jugadores en tiempo real.
`;


const challengesAndSolutions = [
    {
        title: 'Sincronización de la Entrada de Jugadores',
        challenge: 'Sincronización de la entrada de jugadores y el inicio del juego.',
        solution: 'GameInstance asegura que todos los jugadores estén conectados antes de iniciar el juego, evitando que el juego comience hasta que todos estén listos.'
    },
    {
        title: 'Manejo de Física y Movimientos',
        challenge: 'Manejar la física y los movimientos de los jugadores en el entorno del juego.',
        solution: 'El PhysicsEngine se encarga de calcular los movimientos de los jugadores, simular la fricción y gestionar las colisiones, garantizando una experiencia de juego fluida.'
    },
    {
        title: 'Comunicación Eficiente entre Jugador y Servidor',
        challenge: 'Comunicación eficiente entre el jugador y el servidor.',
        solution: 'La clase Player gestiona las acciones del jugador mediante hilos dedicados para enviar y recibir datos, asegurando que las interacciones se manejen de manera eficiente sin bloquear el proceso de juego.'
    }
];

const accordionData = [
    {
        summary: 'GameInstance',
        details: 'Es responsable de contener el juego y los jugadores, y de sincronizar su entrada al juego. El juego no comienza hasta que todos los jugadores necesarios estén conectados, lo que puede generar problemas si algún jugador no se conecta. Incluye el bucle principal del juego (GameLoop), la clase que gestiona a los jugadores (PlayerController) y el motor de físicas (PhysicsEngine). Una vez que las condiciones se cumplen, lanza los hilos correspondientes para el juego y los jugadores.',
    },
    {
        summary: 'Player',
        details: 'Clase encargada de gestionar las acciones de los jugadores, con métodos específicos para realizar dichas acciones. Utiliza un módulo de físicas (PhysicsEngine) y un módulo de colisiones, y a través de una interfaz permite el uso polimórfico de diversas armas.',
    },
    {
        summary: 'PhysicsEngine',
        details: 'Clase encargada de realizar los movimientos del jugador, configurada con los datos en un struct (PhysicsConfig) y proporcionando un struct (PhysicsState) que contiene los datos del jugador en cada momento. Utiliza estos datos y la posición del jugador para realizar movimientos y simular la fricción del jugador.',
    },
];


const PlayerGameLogic = () => {
    return (
        <>
            <Container>
                <TitleAndDescription title="Start of the game and Players Logic"
                    description={gameInstanceAndPlayersDescription} />
            </Container>

            <Container>
                <ChallengesAndSolutions data={challengesAndSolutions} />
            </Container>

            <Container>
                <AccordionListWithHeader title="Informacion adicional de las clases" data={accordionData} />
            </Container>
        </>
    );
};

export default PlayerGameLogic;
