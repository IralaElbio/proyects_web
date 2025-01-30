import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import TitleAndDescription from "./TitleAndDescription";
import AccordionListWithHeader from "./AccordionList";
import ChallengesAndSolutions from "./ChallengesAndSolutions";


const Container = styled(Box)(({ theme }) => ({
    margin: 1,
    background: "transparent",
}));


const GameDescription = `
    GameMap gestiona todos los elementos 
    fundamentales de la partida, desde plataformas y límites del mapa hasta la generación de objetos y el 
    manejo de proyectiles. La gestión de colisiones se realiza mediante un sistema dual: CollisionManager para 
    la detección de colisiones usando el modelo AABB, y CollisionEventManager para resolver estas 
    interacciones entre los diferentes elementos del juego.
    El núcleo de todo el juego se ejecuta a través del GameLoop, que coordina todas las acciones de los 
    jugadores y actualiza el estado del juego en un orden específico, desde la ejecución de acciones 
    individuales hasta la actualización del estado global del mapa, finalizando con la generación y 
    distribución de mensajes de estado a todos los jugadores.
`;


const challengesAndSolutions = [
    {
        title: 'Gestión de colisiones',
        challenge: 'Detectar y resolver distintos tipos de colisiones entre objetos como jugadores, balas, plataformas y spawners (Generadores de armas), proporcionando respuestas según el tipo de interacción.',
        solution: 'Se usa la clase CollisionManager para solamente detectar colisiones y su tipo mediante el modelo AABB. La clase CollisionEventManager se usa para resolver dichas colisiones, actuando e informando a otras clases segun el tipo de colision.'
    },
    {
        title: 'Interacción con spawners de armas',
        challenge: 'Proveer armas de forma dinámica y aleatoria a los jugadores en el mapa.',
        solution: 'Se integro la clase ItemSpawner, la cual los Players puede interactuar para obtener armas, esta clase genera armas aleatorias gracias a su interacion con una WeaponFactory (Fabrica de armas) para poder entregarselas a los jugadores.'
    },
    {
        title: 'Control del flujo del juego',
        challenge: 'Coordinar las acciones de los jugadores y su interacción con el mapa, asegurando una actualización sincronizada del estado del juego.',
        solution: 'Se desarrolló la clase GameLoop, que organiza el ciclo del juego de manera ordenada para evitar inconsistencias en las ejecuciones de las interacciones de los jugadores y los objetos garantizando siempre un orden especifico donde cada cosa sucede en el juego.'
    },
    {
        title: 'Envio del estado del juego',
        challenge: 'Comunicar el estado del juego y de todos los jugadores a cada jugador.',
        solution: 'Se implementó la estructura de datos GameStateMessage, contiene toda la informacion de estado actual del juego, tanto de jugadores como de eventos del juego, de esta manera toda la comunicacion del juego que envia el sevidor a los jugadores esta compactada en esta estructura.'
    }
];




const accordionData = [
    {
        summary: 'GameMap',
        details: 'Representa el mapa interactivo del juego y contiene las plataformas, balas activas, posiciones iniciales de los jugadores, límites del mapa e ItemSpawners. Contiene un metodo de actualizacion en el cual cada vez que se lo llama actualiza 1 frame de las los objetos que contiene, por ejemplo si hubiera balas activas, las llamaria a actualizar su posicion o si las plataformas no fueran estaticas tambien las actualizaria. Si se produjo alguna colision o estado de inconsistencia (salir de los limites del mapa o que el jugador haya actualizado su posicion para quedar dentro de una plataforma) llamara a la clase correspondiente para solucionarlo.',
    },
    {
        summary: 'CollisionManager',
        details: 'Detecta colisiones entre objetos haciendo uso de una pequeña clase Collider que la contienen todo lo que puede interactuar en el juego (jugadores, balas, plataformas y spawners). Usa modelo AABB. Tiene 2 maneras de determinar la colisiones, colision simple, informa con un "si o no" hubo colision y colision detallada, genera un struct que ademas de lo anterior te informa en donde sucedio la colision FOTO AQUI',
    },
    {
        summary: 'CollisionEventManager',
        details: 'Resuelve colisiones detectadas por CollisionManager. Corrige posiciones de jugadores si colisionan con plataformas y les informa si están sobre ellas. Gestiona interacciones de balas con jugadores, accionando según el tipo de bala (hay balas que infringen daño y otras que no), y maneja colisiones de balas con plataformas, tambien accionando segun el tipo de bala.',
    },
    {
        summary: 'GameLoop',
        details: 'Marca un orden el la realizacion de acciones del juego, esta clase no realiza ninguna accion, solo indica un orden, llamara a las clases necesarias para ejecutar las acciones. El orden es el siguiente: Obtiene un accion (Moverse o Disparar) de un jugador, Realiza los pasos para ejecutar la accion,llama a Atualizar el estado de todos los jugadores, aqui es donde se actualiza el juego 1 frame, luego de esto llama a Resolver las Posiciones de los jugadores por si quedaron en un estado invalido por lo anterior (fuera del mapa o colisionando con una plataforma), Luego Agrega las balas disparadas por los jugadores al GameMap para que este las pueda procesar como balas activas, llama a actualizar el estado del mapa, aqui es donde pasa 1 frame en el mapa y finalmente generar y enviar el mensaje de estado del juego, genera un GameStateMessage para que pueda ser enviado a los jugadores',
    },
    {
        summary: 'GameStateMessage',
        details: 'Contiene los datos actualizados del estado del juego, que son enviados a los jugadores. FOTO AQUI',
    },
];



const GameLogic = () => {
    return (
        <Stack spacing={3}>
            <Container>
                <TitleAndDescription title="Overview"
                    description={GameDescription} />
            </Container>

            <Container>
                <Typography variant="h5" gutterBottom>Challanges and Solutions</Typography>
                <ChallengesAndSolutions data={challengesAndSolutions} />
            </Container>


            <Container>
                <AccordionListWithHeader title="Informacion adicional de las clases" data={accordionData} />
            </Container>

        </Stack>
    );
};

export default GameLogic;
