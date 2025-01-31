import React from 'react'
import BeginningGameSect from './SectionBeginningGame'
import GameLoopAndMap from './SectionGameLoopMap'
import Weapons from './SectionWeapons'
import ProjectDetailsSection from './CompProjectDetails'



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
        <ProjectDetailsSection items={GameInfoSection} />
    )
}

export default Game
