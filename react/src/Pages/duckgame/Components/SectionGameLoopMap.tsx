import AccordionWNode from "./CAccordion"
import ChallengesAndSolutions from "./CompChallenges";
import DescriptionWithImage from "./CDescripWImage";
import ParagraphList from "./CParagraphList";
import ItemList from "./CItemList";
import { StyledBox, SubSectionTitle, TextBody } from "../DuckGameStyles";
import collisionResult from "../Assets/CollisionResult.jpeg"
import gameStateMessaage from "../Assets/GameStateMessage.jpeg"

const challengesAndSolutions = [
    {
        title: 'Collision Management',
        challenge: 'Detecting and resolving different types of collisions between objects such as players, bullets, platforms, and spawners (Weapon Generators), providing responses based on the interaction type.',
        solution: 'The CollisionManager class is used solely for detecting collisions and determining their type using the AABB model. The CollisionEventManager class is used to resolve these collisions, acting and notifying other classes based on the collision type.'
    },
    {
        title: 'Weapon Spawner Interaction',
        challenge: 'Providing dynamic and random weapons to players on the map.',
        solution: 'The ItemSpawner class was integrated, which players can interact with to obtain weapons. This class generates random weapons through its interaction with a WeaponFactory, which supplies the weapons to the players.'
    },
    {
        title: 'Game Flow Control',
        challenge: 'Coordinating player actions and their interaction with the map, ensuring synchronized updates of the game state.',
        solution: 'The GameLoop class was developed, organizing the game cycle in an orderly manner to prevent inconsistencies in the execution of player and object interactions, ensuring a specific order where each event in the game happens.'
    },
    {
        title: 'Sending Game State',
        challenge: 'Communicating the game state and all player statuses to each player.',
        solution: 'The GameStateMessage data structure was implemented, which contains all the current game state information, including player statuses and game events. This structure compacts all game communication sent by the server to the players.'
    }
];

const content = [
    {
        title: 'GameMap',
        content: (
            <ParagraphList content={[
                "Represents the interactive game map. Contains platforms, active bullets, players' starting positions, map boundaries, and ItemSpawners. It has an update method that, each time it is called, advances the game by one frame, updating all the objects it contains. For example, if there are active bullets, it will call them to update their position, or if the platforms are not static, it will update them as well.",
                "If a collision or any state of inconsistency occurs (such as a player going beyond the map boundaries or a player moving and ending up inside a platform, which requires collision resolution), it will call the corresponding class to resolve it."
            ]} />
        )
    },
    {
        title: 'CollisionManager',
        content: (
            <DescriptionWithImage description='Detects collisions between objects using a small Collider class that contains everything that can interact in the game (players, bullets, platforms, and spawners). It uses the AABB model. It has two ways of determining collisions: simple collision, which reports with a "yes or no" whether a collision occurred, and detailed collision, which generates a struct that, in addition to this, informs where the collision took place.' imageSrc={collisionResult} />
        ),
    },
    {
        title: 'CollisionEventManager',
        content: (
            <TextBody>
                Resolves collisions detected by the CollisionManager.
                It corrects player positions if they collide with platforms and informs them if they are standing on them.
                It manages bullet interactions with players,
                taking action depending on the type of bullet (some bullets deal damage, while others do not),
                and handles bullet collisions with platforms, also taking action based on the bullet type.
            </TextBody>
        )
    },
    {
        title: 'GameLoop',
        content: (
            <>
                <TextBody>
                    Defines the order of game actions. This class does not perform any actions itself, it simply dictates the order and calls the necessary classes to execute them.
                </TextBody>
                <ItemList title="Action Order: "
                    titleVariant="inherit" items={[
                        "It retrieves an action (Move or Shoot) from a player and performs the steps to execute the action.",
                        "Calls to update the state of all players, this is where the game updates by one frame.",
                        "Calls to resolve player positions in case they ended up in an invalid state due to the previous step (such as going outside the map or colliding with a platform).",
                        "Adds the bullets fired by players to the GameMap so that it can process them as active bullets.",
                        "Calls to update the map state, this is where one frame is processed on the map, and finally, generates and sends the game state message.",
                        "Lastly, generates a GameStateMessage so it can be sent to the players."
                    ]} />
            </>
        )
    },
    {
        title: 'GameStateMessage',
        content: (
            <DescriptionWithImage description='Contiene los datos actualizados del estado del juego, que son enviados a los jugadores.' imageSrc={gameStateMessaage} />
        ),
    },

];



const GameLoopAndMap = () => {
    return (
        <>
            <StyledBox>
                <SubSectionTitle> Overview </SubSectionTitle>
                <ParagraphList
                    content={[
                        "GameMap manages all the fundamental elements of the game, from platforms and map boundaries to object generation and projectile handling.",

                        "Collision management is handled through a dual system: CollisionManager for collision detection using the AABB model, and CollisionEventManager for resolving interactions between different game elements.",

                        "The core of the entire game runs through the GameLoop, which coordinates all player actions and updates the game's state in a specific order, from executing individual actions to updating the global map state, ending with the generation and distribution of status messages to all players."
                    ]}
                />
            </StyledBox>

            <ChallengesAndSolutions data={challengesAndSolutions} />

            <SubSectionTitle>Class Information</SubSectionTitle>
            <AccordionWNode items={content} titleVariant='h6' />
        </>
    );
};

export default GameLoopAndMap;
