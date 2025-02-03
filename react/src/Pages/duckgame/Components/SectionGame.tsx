import React from 'react'
import BeginningGameSect from './SectionBeginningGame'
import GameLoopAndMap from './SectionGameLoopMap'
import Weapons from './SectionWeapons'
import AccordionWNode from './CAccordion'



const GameInfoSection = [{
    title: "Begining of the game -  Game Instance and Players",
    content: <BeginningGameSect />,
},
{
    title: "GameLoop and Map",
    content: <GameLoopAndMap />,
},
{
    title: "Weapons",
    content: <Weapons />,
},
]

function Game() {
    return (
        <AccordionWNode items={GameInfoSection} titleVariant='h5' />
    )
}

export default Game
