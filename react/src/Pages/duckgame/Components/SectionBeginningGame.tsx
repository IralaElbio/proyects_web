import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import TitleAndDescription from "./CompDescription";
import ChallengesAndSolutions from "./CompChallenges";
import AccordionWNode from "./CAccordion"
import DescriptionWithImage from "./CDescripWImage";
import physicsConfigImage from "../Assets/PyshicsConfig.png";
import ParagraphList from "./CParagraphList";

const challengesAndSolutions = [
    {
        title: 'Sincronización de la Entrada de Jugadores',
        challenge: 'Sincronización de la entrada de jugadores y el inicio del juego.',
        solution: 'GameInstance asegura que todos los jugadores estén conectados antes de iniciar el juego, evitando que el juego comience hasta que todos estén listos.'
    },
    {
        title: 'Manejo de Física de Movimiento',
        challenge: 'Manejar los movimientos de los jugadores en el entorno del juego para que sean fluidos y personalizables.',
        solution: 'El PhysicsEngine se encarga de calcular los movimientos de los jugadores, simular la fricción y gestionar su interaccion con el suelo. Ademas implementa un struct para hacer que los movimientos sean mas personalizables.'
    },
    {
        title: 'Comunicación Eficiente entre Jugador y Servidor',
        challenge: 'Envio y recepcion de datos eficiente, poder enviar y recibir datos al mismo tiempo.',
        solution: 'La clase Player gestiona las acciones del jugador mediante hilos dedicados para enviar y recibir datos, asegurando que las interacciones se manejen de manera eficiente sin bloquear el proceso de juego.'
    }
];

const content = [
    {
        title: 'GameInstance',
        content: (
            <Typography>
                Incluye el bucle principal del juego (GameLoop), la clase que administra a los jugadores de la partida (PlayerController) y el motor de físicas (PhysicsEngine) que los jugadores utilizarán al comenzar la partida. Es el "contenedor" (tiene todos los datos y clases) de la partida del juego, una partida del juego se ejecuta dentro de un GameInstance lo que hace que cada partida (si se quiere) pueda tener sus propias reglas de fisicas (modificando la configuracion de PhysicsEngine).
            </Typography>
        )
    },
    {
        title: 'Player',
        content: (
            <Typography>
                Clase encargada de gestionar las acciones de los jugadores (Disparar y moverse), con métodos específicos para realizar dichas acciones. Contiene toda la informacion del jugador en un momento especifico del juego (esta disparando o no, esta corriendo o no, velocidad en algun eje, etc.), para que las demas clases puedan usar dicha informacion para modificar su estado.
            </Typography>
        ),
    },
    {
        title: 'PhysicsEngine',
        content: (
            <Stack spacing={3}>
                <DescriptionWithImage
                    description="Clase encargada de realizar los movimientos del jugador, pre-configurada con los datos de los valores de las físicas en un struct (estructura de datos llamada PhysicsConfig)."
                    imageSrc={physicsConfigImage}
                />

                <DescriptionWithImage
                    description="Proporciona un struct (PhysicsState) personal para cada Player que contiene los datos necesarios para entender el estado del movimiento del jugador en cada momento."
                    imageSrc={physicsConfigImage}
                />

                <DescriptionWithImage
                    description="Gracias a estas dos estructuras de datos es que puede simular las físicas del juego para los jugadores."
                />
            </Stack>
        ),
    },
];


const BeginningGameSect = () => {
    return (
        <Stack spacing={3}>
            <TitleAndDescription title="Overview" >
                <ParagraphList
                    content={[
                        " El sistema implementa un servidor de juego multijugador donde cada partida es manejada por una GameInstance, que actúa como el núcleo central coordinando todos los aspectos del juego. Este componente gestiona la sincronización de los jugadores y controla el inicio de las partidas mediante un sistema de múltiples hilos que manejan el bucle principal del juego y la comunicación con cada jugador.",
                        "El sistema incorpora un motor de físicas personalizado que gobierna los movimientos de los jugadores y sus interacciones con el entorno.",
                        "Cada jugador opera con sus propios hilos de envío y recepción de datos, mientras que un sistema de estados físicos y configuraciones preestablecidas garantiza la consistencia del movimiento y las colisiones durante la partida.",
                    ]}
                />
            </TitleAndDescription>

            <ChallengesAndSolutions data={challengesAndSolutions} />

            <AccordionWNode items={content} titleVariant='inherit' />
        </Stack>
    );
};

export default BeginningGameSect;
