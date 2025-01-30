import { Box, Stack, styled } from '@mui/material';
import React from 'react'
import ChallengesAndSolutions from './ChallengesAndSolutions';
import TitleAndDescription from './TitleAndDescription';
import AccordionListWithHeader from './AccordionList';



const Container = styled(Box)(({ theme }) => ({
    margin: 1,
    background: "transparent",
}));


const WeaponDescription = `
Para las armas se implementa un diseño modular, utilizando la interfaz IActionableItem 
como base para todas las interacciones. La implementación se divide en dos ramas principales: 
ThrowableItem para objetos arrojables como granadas, y PlayerWeapon para armas más complejas que 
utilizan estrategias de disparo personalizadas.
El comportamiento de las armas se define a través del patrón Strategy con ShootingStrategy para poder personalizar cada tipo de disparo, ademas se usa una clase abstracta Bullet para lograr 
diferentes tipos de proyectiles: balas normales de trayectoria recta, explosivas con daño en área, 
especiales que afectan el movimiento del jugador, y elásticas que rebotan en las superficies. La creación 
de estas armas está centralizada en WeaponFactory, que gestiona la instanciación de cada tipo específico 
según su estrategia de disparo.`;


const challengesAndSolutions = [
    {
        title: 'Armas con Diseño modular y extensible',
        challenge: 'Crear un sistema que permita agregar fácilmente nuevos tipos de armas y estrategias de disparo sin afectar la funcionalidad existente.',
        solution: 'Se implementa la interfaz ActionableItem y se utiliza el patrón de estrategia (ShootingStrategy) para encapsular comportamientos específicos de disparo. Esto permite la integración de nuevos tipos de armas sin modificar las clases existentes.'
    },
    {
        title: 'Gestión de comportamientos únicos de las balas',
        challenge: 'Asegurar que cada tipo de bala (normal, explosiva, elástica y especial) tenga propiedades y efectos únicos, manteniendo un código organizado.',
        solution: 'Se definie una jerarquía de clases para las balas, con una clase base Bullet y subclases específicas que encapsulan comportamientos únicos. Esto simplifica la gestión y reutilización del código.'
    },
    {
        title: 'Creación centralizada de armas',
        challenge: 'Evitar la duplicación de lógica al generar armas con características específicas.',
        solution: 'Se diseñó la clase WeaponFactory, responsable de construir las armas y asignarles la estrategia de disparo correspondiente. Esto centraliza la lógica y facilita la creación de nuevas armas.'
    },
    {
        title: 'Simulación de acciones mantenidas (Disparos continuos)',
        challenge: 'Gestionar el estado de las armas para soportar acciones como disparos automáticos o mantenidos.',
        solution: 'Se implementó un método de actualización continua en ActionableItem que evalúa el estado del arma y ajusta su comportamiento dinámicamente según su tipo.'
    },
];


const accordionData = [
    {
        summary: 'IActionableItem (armas)',
        details: 'Esta interfaz es implementada por todas las armas del juego y define los métodos necesarios para gestionar sus acciones. Incluye funcionalidades como: acción al presionar la tecla, acción al soltar la tecla y actualización del estado del arma. Permite que cada arma tenga comportamientos únicos dependiendo de su tipo. PlayerWeapon y ThroweableItem son las clases que implementan esta interfaz. ThroweableItem abarca objetos que son lanzables, mientras que PlayerWeapon maneja la lógica más compleja asociada a las armas de los jugadores.',
    },
    {
        summary: 'ShootingStrategy',
        details: 'Clase que modela una estrategia de disparo utilizada por PlayerWeapon. Actúa como clase base para implementar comportamientos específicos de disparo. Usa un contexto (struct ShootingContext) que contiene la información necesaria para disparar. Las estrategias derivadas pueden modificar este contexto para adaptarlo a su estilo de disparo particular. Cada estrategia puede estar asociada a un "tipo de bala", lo que permite comportamientos únicos.',
    },
    {
        summary: 'Tipos de Balas',
        details: 'Existen cuatro tipos de balas: \n- **Normal**: Sigue una trayectoria recta, causa daño al impactar con jugadores y desaparece al colisionar con plataformas.\n- **Explosive**: Viaja en parábola, explota en un área causando daño a jugadores cercanos, y pierde velocidad al colisionar lateralmente con plataformas.\n- **Special**: Similar a la explosiva, pero genera una cáscara de banana que empuja a los jugadores al impactar. Al colisionar lateralmente con plataformas, pierde velocidad y cae.\n- **Elastic**: Rebota al colisionar con plataformas y causa daño al impactar con jugadores.',
    },
    {
        summary: 'WeaponFactory',
        details: 'Clase encargada de la creación de armas según su estrategia de disparo. Contiene la lógica necesaria para fabricar todas las armas del juego, integrando las estrategias y tipos de bala correspondientes.',
    },
];



function WeaponGameLogic() {
    return (
        <Stack spacing={3}>
            <Container>
                <TitleAndDescription title="Overview"
                    description={WeaponDescription} />
            </Container>

            <Container>
                <ChallengesAndSolutions data={challengesAndSolutions} />
            </Container>

            <Container>
                <AccordionListWithHeader title="Informacion adicional de las clases" data={accordionData} />
            </Container>
        </Stack>
    )
}

export default WeaponGameLogic


