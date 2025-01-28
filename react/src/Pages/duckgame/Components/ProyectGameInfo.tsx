import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayerGameLogic from './PlayerGameLogic';
import GameLogic from './GameLogic';
import ChallengesAndSolutions from './ChallengesAndSolutions';

// Styled components
const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4, 4),
    background: "grey",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 2),
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const challengesAndSolutions = [
    {
        title: 'Diseño modular y extensible',
        challenge: 'Crear un sistema que permita agregar fácilmente nuevos tipos de armas, balas y estrategias de disparo sin afectar la funcionalidad existente.',
        solution: 'Se implementó la interfaz ActionableItem y se utilizó el patrón de estrategia (ShootingStrategy) para encapsular comportamientos específicos de disparo. Esto permitió la integración de nuevos tipos de armas y balas sin modificar las clases existentes.'
    },
    {
        title: 'Gestión de comportamientos únicos de las balas',
        challenge: 'Asegurar que cada tipo de bala (normal, explosiva, elástica y especial) tuviera propiedades y efectos únicos, manteniendo un código organizado.',
        solution: 'Se definió una jerarquía de clases para las balas, con una clase base Bullet y subclases específicas que encapsulan comportamientos únicos. Esto simplificó la gestión y reutilización del código.'
    },
    {
        title: 'Creación centralizada de armas',
        challenge: 'Evitar la duplicación de lógica al generar armas con características específicas.',
        solution: 'Se diseñó la clase WeaponFactory, responsable de construir las armas y asignarles la estrategia de disparo correspondiente. Esto centralizó la lógica y facilitó la creación de nuevas armas.'
    },
    {
        title: 'Simulación de acciones mantenidas',
        challenge: 'Gestionar el estado de las armas para soportar acciones como disparos automáticos o mantenidos.',
        solution: 'Se implementó un método de actualización continua en ActionableItem que evalúa el estado del arma y ajusta su comportamiento dinámicamente según su tipo.'
    },
    {
        title: 'Equilibrio entre diversidad y rendimiento',
        challenge: 'Integrar múltiples comportamientos y estrategias sin comprometer el rendimiento del juego.',
        solution: 'Se optimizó el sistema mediante el uso de patrones de diseño y estructuras eficientes, como el contexto de disparo (ShootingContext), para minimizar el procesamiento innecesario.'
    }
];

const ProyectGameInfo = () => {
    return (
        <Stack spacing={3}>
            <PlayerGameLogic></PlayerGameLogic>
            {/* General Description */}
            <Container>
                <SectionTitle variant="h5">Armas - Descripción General</SectionTitle>

                <Typography>
                    La arquitectura se basa en una interfaz común, ActionableItem, que define las acciones básicas de las armas, como disparar, detenerse y actualizar su estado durante el juego.

                    El sistema incluye una jerarquía de armas que abarca tanto armas usadas directamente por los jugadores como objetos arrojadizos, cada uno con comportamientos únicos. Además, utiliza un enfoque basado en estrategias de disparo (ShootingStrategy), permitiendo implementar diferentes estilos de ataque mediante un contexto configurable.

                    El proyecto también incorpora una variedad de tipos de balas, como normales, explosivas, elásticas y especiales, cada una con efectos y comportamientos únicos que enriquecen la experiencia del jugador. La creación y configuración de armas se centralizan en una fábrica (WeaponFactory), simplificando la extensión y personalización del sistema.
                </Typography>
            </Container>

            {/* Challenges and Solutions */}
            <Container>
                <ChallengesAndSolutions data={challengesAndSolutions} />

            </Container>

            {/* Additional Information */}
            <SectionTitle variant="h5">Información Adicional</SectionTitle>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Implementaciones de la Interfaz</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        PlayerWeapon y ThroweableItem son las clases que implementan esta interfaz. Para el caso de ThroweableItem estarán las clases concretas como granada y banana. Por otra parte, PlayerWeapon maneja la lógica más compleja asociada a las distintas armas que los jugadores pueden usar haciendo uso de una estrategia de disparo.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>ShootingStrategy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Esta clase modela una estrategia de disparo usada por la clase PlayerWeapon y actúa como clase base para todas las estrategias de disparo específicas. Su objetivo es proporcionar un marco común que permita a las clases derivadas implementar distintos comportamientos de disparo.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Tipos de Balas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Cada tipo de bala tiene un comportamiento único, lo que permite diversificar las estrategias de disparo en el juego:
                    </Typography>
                    <ul>
                        <li>Normal: Sigue una trayectoria recta y desaparece al colisionar con una plataforma.</li>
                        <li>Explosive: Viaja en parábola y genera un radio de explosión al impactar.</li>
                        <li>Special: Genera una cáscara de banana que empuja a los jugadores al impactar.</li>
                        <li>Elastic: Rebota al colisionar con plataformas e impacta con daño.</li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>WeaponFactory</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Finalmente, tenemos a la clase WeaponFactory, que tiene lógica de cómo crear cada arma dada su estrategia de disparo. Por esto mismo, será la encargada de crear todos los distintos tipos de armas que hay en el juego.
                    </Typography>
                </AccordionDetails>
            </Accordion>




            <GameLogic></GameLogic>
        </Stack>
    );
};

export default ProyectGameInfo;

