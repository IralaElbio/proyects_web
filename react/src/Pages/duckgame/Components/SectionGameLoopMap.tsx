import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TitleAndDescription from "./CompDescription";
import AccordionWNode from "./CAccordion"
import ChallengesAndSolutions from "./CompChallenges";
import DescriptionWithImage from "./CDescripWImage";
import ParagraphList from "./CParagraphList";
import ItemList from "./CItemList";

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

const content = [
    {
        title: 'GameMap',
        content: (
            <ParagraphList content={[
                "Representa el mapa interactivo del juego y contiene las plataformas, balas activas, posiciones iniciales de los jugadores, límites del mapa e ItemSpawners. Contiene un metodo de actualizacion en el cual cada vez que se lo llama actualiza 1 frame de las los objetos que contiene, por ejemplo si hubiera balas activas, las llamaria a actualizar su posicion o si las plataformas no fueran estaticas tambien las actualizaria.",
                "Si se produjo alguna colision o estado de inconsistencia (salir de los limites del mapa o que el jugador haya actualizado su posicion para quedar dentro de una plataforma) llamara a la clase correspondiente para solucionarlo."
            ]} />
        )
    },
    {
        title: 'CollisionManager',
        content: (
            <DescriptionWithImage description='Detecta colisiones entre objetos haciendo uso de una pequeña clase Collider que la contienen todo lo que puede interactuar en el juego (jugadores, balas, plataformas y spawners). Usa modelo AABB. Tiene 2 maneras de determinar la colisiones, colision simple, informa con un " si o no" hubo colision y colision detallada, genera un struct que ademas de lo anterior te informa en donde sucedio la colision.' imageSrc="ruta" />
        ),
    },
    {
        title: 'CollisionEventManager',
        content: (
            <Typography>
                Resuelve colisiones detectadas por CollisionManager. Corrige posiciones de jugadores si colisionan con plataformas y les informa si están sobre ellas. Gestiona interacciones de balas con jugadores, accionando según el tipo de bala (hay balas que infringen daño y otras que no), y maneja colisiones de balas con plataformas, tambien accionando segun el tipo de bala.
            </Typography>
        )
    },
    {
        title: 'GameLoop',
        content: (
            <>
                <Typography gutterBottom>
                    Marca un orden el la realizacion de acciones del juego, esta clase no realiza ninguna accion, solo indica un orden, llamara a las clases necesarias para ejecutar las acciones.
                </Typography>
                <ItemList title="Hace las siguientes operaciones de manera ciclica: "
                    titleVariant="inherit" items={[
                        "Obtiene un accion (Moverse o Disparar) de un jugador y Realiza los pasos para ejecutar la accion.",
                        "LLama a Atualizar el estado de todos los jugadores, aqui es donde se actualiza el juego 1 frame.",
                        "LLama a Resolver las Posiciones de los jugadores por si quedaron en un estado invalido por lo anterior (fuera del mapa o colisionando con una plataforma).",
                        "Agrega las balas disparadas por los jugadores al GameMap para que este las pueda procesar como balas activas.",
                        "LLama a actualizar el estado del mapa, aqui es donde pasa 1 frame en el mapa y finalmente generar y enviar el mensaje de estado del juego.",
                        "y por ultimo genera un GameStateMessage para que pueda ser enviado a los jugadores."
                    ]} />
            </>
        )
    },
    {
        title: 'GameStateMessage',
        content: (
            <DescriptionWithImage description='Contiene los datos actualizados del estado del juego, que son enviados a los jugadores.' imageSrc="ruta" />
        ),
    },

];



const GameLoopAndMap = () => {
    return (
        <Stack spacing={3}>
            <TitleAndDescription title="Overview">
                <ParagraphList
                    content={[
                        "GameMap gestiona todos los elementos fundamentales de la partida, desde plataformas y límites del mapa hasta la generación de objetos y el manejo de proyectiles.",

                        "La gestión de colisiones se realiza mediante un sistema dual:",

                        "CollisionManager para la detección de colisiones usando el modelo AABB, y CollisionEventManager para resolver estas interacciones entre los diferentes elementos del juego.",

                        "El núcleo de todo el juego se ejecuta a través del GameLoop, que coordina todas las acciones de los jugadores y actualiza el estado del juego en un orden específico, desde la ejecución de acciones individuales hasta la actualización del estado global del mapa, finalizando con la generación y distribución de mensajes de estado a todos los jugadores."
                    ]}
                />
            </TitleAndDescription>

            <ChallengesAndSolutions data={challengesAndSolutions} />

            <AccordionWNode items={content} titleVariant='inherit' />
        </Stack>
    );
};

export default GameLoopAndMap;
