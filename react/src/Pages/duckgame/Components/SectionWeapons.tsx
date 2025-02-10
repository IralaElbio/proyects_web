import { Stack } from '@mui/material';
import ChallengesAndSolutions from './CompChallenges';
import AccordionWNode from "./CAccordion"
import ItemList from './CItemList';
import DescriptionWithImage from "./CDescripWImage";
import ParagraphList from './CParagraphList';
import { SubSectionTitle, StyledBox } from '../DuckGameStyles';
import iActionableItem from "../Assets/IActionableItem.jpeg"
import shootingStrategy from "../Assets/ShootingStrategy.jpeg"
import bulletType from "../Assets/BulletType.jpeg"

const challengesAndSolutions = [
    {
        title: 'Modular and Extensible Weapon Design',
        challenge: 'Create a system that allows for easy addition of new weapon types and shooting strategies without affecting existing functionality.',
        solution: 'The IActionableItem interface is implemented and the Strategy pattern (ShootingStrategy) is used to encapsulate specific shooting behaviors. This allows the integration of new weapon types without modifying existing classes.'
    },
    {
        title: 'Management of Unique Bullet Behaviors',
        challenge: 'Ensure that each bullet type (normal, explosive, bouncy, and special) has unique properties and effects while maintaining organized code.',
        solution: 'A class hierarchy for bullets is defined, with a base Bullet class and specific subclasses that encapsulate unique behaviors. This simplifies code management and reuse.'
    },
    {
        title: 'Centralized Weapon Creation',
        challenge: 'Avoid logic duplication when creating weapons with specific characteristics.',
        solution: 'The WeaponFactory class was designed to be responsible for constructing weapons and assigning the corresponding shooting strategy. This centralizes the logic and makes it easier to create new weapons.'
    },
    {
        title: 'Simulation of Sustained Actions (Continuous Shooting)',
        challenge: 'Manage the weapon state to support actions like automatic, semi-automatic or sustained shooting.',
        solution: 'A continuous update method was implemented in IActionableItem, which evaluates the weapon’s state and adjusts its behavior dynamically based on its type.'
    },
];


const bulletTypes = [
    "Normal: Follows a straight trajectory, deals damage when hitting players, and disappears upon colliding with platforms or reaching a certain range of the weapon.",
    "Explosive: Travels in a parabola, explodes in an area causing damage to nearby players, and does not disappear until it explodes.",
    "Special: Moves like the explosive bullet, but this one pushes the player it touches. It does not disappear until a player collides with it.",
    "Elastic: Bounces when colliding with platforms and deals damage when hitting players, disappearing after a certain number of bounces."
];


const content = [
    {
        title: 'IActionableItem',
        content: (
            <DescriptionWithImage description='This interface is implemented by all 
            the weapons in the game and defines the methods necessary to manage their actions. 
            It includes functionalities such as: action on key press, 
            action on key release, and weapon state update. 
            It allows each weapon to have unique behaviors depending on its type. 
            PlayerWeapon and ThrowableItem are the classes that implement this interface. 
            ThrowableItem covers throwable objects, while 
            PlayerWeapon handles the more complex logic associated with player weapons.' imageSrc={iActionableItem} />
        ),
    },
    {
        title: 'ShootingStrategy',
        content: (
            <DescriptionWithImage description='Class that models a shooting strategy used by PlayerWeapon. 
            It acts as a base class for implementing specific shooting behaviors. 
            It uses a context (ShootingContext struct) that contains the necessary information to shoot. 
            Derived strategies can modify this context to adapt it to their particular shooting style. 
            Each strategy can be associated with a bullet type, allowing for unique behaviors.' imageSrc={shootingStrategy} />
        ),
    },
    {
        title: 'Types of Bullets',
        content: (
            <Stack>
                <ItemList title="There are four types of bullets:" items={bulletTypes} titleVariant='h6' />
                <DescriptionWithImage description='' imageSrc={bulletType} />
            </Stack>
        ),
    },
]

function Weapons() {
    return (
        <>
            <StyledBox>
                <SubSectionTitle> Overview </SubSectionTitle>
                <ParagraphList content={[
                    "A modular design is implemented for weapons, using the IActionableItem interface as the base for all interactions.",

                    "The implementation is divided into two main branches: ThrowableItem for throwable objects like grenades, and PlayerWeapon for more complex weapons that use custom shooting strategies.",

                    "Weapon behavior is defined through the Strategy pattern, called ShootingStrategy, to customize each type of shot. Additionally, an abstract Bullet class is used to create different types of projectiles:",

                    "Straight trajectory bullets, Explosive bullets with area damage, Special bullets that affect player movement, and Bouncy bullets that ricochet off surfaces.",

                    "The creation of these weapons is centralized in WeaponFactory, which manages the instantiation of each specific type based on its shooting strategy."
                ]} />
            </StyledBox>


            <ChallengesAndSolutions data={challengesAndSolutions} />

            <SubSectionTitle>Class Information</SubSectionTitle>
            <AccordionWNode items={content} titleVariant='h6' />
        </>
    )
}

export default Weapons


