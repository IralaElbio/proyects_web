import React from 'react';
import { Typography } from '@mui/material';
import { SpacedStack, FlexBoxRow, FlexBoxRowContent, SubSectionTitle } from "../DuckGameStyles"
import ChallengesAndSolutions from './CompChallenges';
import AccordionWNode from './CAccordion';
import ParagraphList from './CParagraphList';

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
        solution: 'Los hilos de ClientManager y las instancias de lobbies y juegos se eliminan de manera controlada una vez que cumplen su propósito (El cliente deja el lobby para pasar al juego). '
    }
];


const content = [{
    title: "Lobby",
    content: (
        <SpacedStack>
            <FlexBoxRow>
                <FlexBoxRowContent>
                    <SubSectionTitle>
                        Overview
                    </SubSectionTitle>
                    <ParagraphList
                        content={[
                            "El sistema implementa una arquitectura cliente-servidor donde ClientManager actúa como punto de entrada, manejando las conexiones individuales de los clientes mediante hilos dedicados.",
                            "La coordinación central se realiza a través de GameManager, un monitor que gestiona tanto los lobbies de espera como las instancias activas de juego.",
                            "El proceso de unión de jugadores se maneja a través de Lobbies, que actúan como salas de espera donde los jugadores pueden reunirse antes de comenzar una partida.",
                            "Una vez que un lobby está completo y todos los jugadores están listos, GameManager coordina la creación de una nueva instancia de juego y la transición de los jugadores desde el lobby hacia la partida."
                        ]}
                    />
                </FlexBoxRowContent>

                <FlexBoxRowContent width={1500} height={300} bgcolor="black" display="flex" justifyContent="center" alignItems="center">
                    <Typography>Diagrama UML aquí</Typography>
                </FlexBoxRowContent>
            </FlexBoxRow>
            <ChallengesAndSolutions data={challengesAndSolutions} />
        </SpacedStack>
    ),
},
]

const Lobby = () => {
    return (
        <AccordionWNode items={content} titleVariant='h5' />
    );
};

export default Lobby;
