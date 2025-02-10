import { Typography } from '@mui/material';
import { SpacedStack, FlexBoxRow, FlexBoxRowContent, SubSectionTitle, StyledBox } from "../DuckGameStyles"
import ChallengesAndSolutions from './CompChallenges';
import AccordionWNode from './CAccordion';
import ParagraphList from './CParagraphList';
import DescriptionWithImage from './CDescripWImage';
import lobbyUML from "../Assets/LobbyUML.jpeg"

const challengesAndSolutions = [
    {
        title: 'Managing Multiple Simultaneous Connections',
        challenge: 'Accepting and handling multiple clients without blocking server operations.',
        solution: 'A dedicated thread (ClientManager) was assigned to each client, allowing simultaneous request handling and efficient, isolated communication.'
    },
    {
        title: 'Synchronization Between Clients and Lobbies',
        challenge: 'Preventing conflicts when multiple clients interact with shared resources (lobbies)',
        solution: 'GameManager acts as a monitor, synchronizing access to lobbies and ensuring no race conditions or inconsistencies occur.'
    },
    {
        title: 'Transition from Lobby to Game',
        challenge: 'Determining when a lobby is ready to start a game instance and managing a seamless transition.',
        solution: 'Each Lobby notifies GameManager when all clients are ready, triggering the creation of a game instance and the removal of the lobby.'
    },
    {
        title: 'Resource Usage Optimization',
        challenge: 'Managing thread and resource creation/deletion to prevent server overload.',
        solution: 'ClientManager threads, along with lobby and game instances, are properly disposed of once they have fulfilled their purpose (when clients leave the lobby to join the game).'
    }
];


const content = [{
    title: "Lobby",
    content: (
        <SpacedStack>
            <StyledBox>

                <FlexBoxRow>
                    <FlexBoxRowContent>
                        <SubSectionTitle>
                            Overview
                        </SubSectionTitle>
                        <ParagraphList
                            content={[
                                "The system follows a client-server architecture where ClientManager acts as the entry point, handling individual client connections through dedicated threads.",
                                "Central coordination is managed by GameManager, a monitor responsible for overseeing both waiting lobbies and active game instances.",
                                "Player matchmaking is handled through Lobbies, which serve as waiting rooms where players can gather before starting a match.",
                                "Once a lobby is full and all players are ready, GameManager coordinates the creation of a new game instance and transitions players from the lobby into the match."
                            ]}
                        />
                    </FlexBoxRowContent>
                    <FlexBoxRowContent>
                        <DescriptionWithImage description='' imageSrc={lobbyUML} />
                    </FlexBoxRowContent>
                </FlexBoxRow>
            </StyledBox>
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
