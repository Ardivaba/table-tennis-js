import { ClayVerticalNav } from '@clayui/nav';
import React, { useState } from 'react';
import queryString from 'query-string';

import ClayButton from '@clayui/button';
import ClayCardWithInfo, { ClayCardWithUser, ClayCardWithNavigation } from '@clayui/card';
import Repository from '../../services/Repository.js';
import ClayCard from '@clayui/card';
import { spritemap } from '../../constants';
import { ClayIcon } from '@clayui/icon';
import ClayForm, { ClayInput } from '@clayui/form';

function addLeftPoint(gameState, setGameState) {
    const repo = Repository.getInstance();

    setGameState(prevGame => ({
        ...prevGame,
        leftScore: prevGame.leftScore + 1
    }));

    if (gameState.leftScore == 10) {
        setGameState(prevGame => ({
            ...prevGame,
            rightScore: 0,
            leftScore: 0,
            leftWins: prevGame.leftWins + 1
        }));
    }

    setGameState(prevGame => ({
        ...prevGame,
        serveCount: prevGame.serveCount + 1
    }));

    if (gameState.serveCount == 2) {
        setGameState(prevGame => ({
            ...prevGame,
            serveCount: 0,
            leftIsServing: !prevGame.leftIsServing
        }));
    }

    repo.storeGame(gameState.id, gameState);
}

function addRightPoint(gameState, setGameState) {
    const repo = Repository.getInstance();

    setGameState(prevGame => ({
        ...prevGame,
        rightScore: prevGame.rightScore + 1
    }));

    if (gameState.rightScore == 10) {
        setGameState(prevGame => ({
            ...prevGame,
            rightScore: 0,
            leftScore: 0,
            rightWins: prevGame.rightWins + 1
        }));
    }

    if (gameState.rightScore == 10) {
        setGameState(prevGame => ({
            ...prevGame,
            rightScore: 0,
            leftScore: 0,
            rightWins: prevGame.rightWins + 1
        }));
    }

    setGameState(prevGame => ({
        ...prevGame,
        serveCount: prevGame.serveCount + 1
    }));

    if (gameState.serveCount == 2) {
        setGameState(prevGame => ({
            ...prevGame,
            serveCount: 0,
            leftIsServing: !prevGame.leftIsServing
        }));
    }

    repo.storeGame(gameState.id, gameState);
}

export default function GameDetailView(props) {
    const gameId = parseInt(window.location.pathname.split('/')[2]);

    const repo = Repository.getInstance();

    const game = repo.getGame(gameId);

    const leftPlayer = repo.getPlayer(game.leftPlayer);
    const rightPlayer = repo.getPlayer(game.rightPlayer);

    const [gameState, setGameState] = useState({
        id: game.id,
        name: game.name,
        description: game.description,
        leftPlayer: game.leftPlayer,
        rightPlayer: game.rightPlayer,
        leftScore: game.leftScore,
        rightScore: game.rightScore,
        leftWins: game.leftWins,
        rightWins: game.rightWins,
        leftIsServing: game.leftIsServing,
        serveCount: game.serveCount
    });

    return (
        <div className="row">
            <div className="col-md-6">
                <ClayCardWithUser
                    name={leftPlayer.name}
                    description={leftPlayer.jobTitle}
                    userImageSrc={leftPlayer.image}
                />
                <ClayCard>
                    <ClayCard.Body>
                        Score: {game.leftScore}
                    </ClayCard.Body>
                </ClayCard>
                <ClayCard>
                    <ClayCard.Body>
                        Wins: {game.leftWins}
                    </ClayCard.Body>
                </ClayCard>
                { !game.leftIsServing ? <ClayCard>
                    <ClayCard.Body>
                        Serving
                    </ClayCard.Body>
                </ClayCard> : null }
                <ClayButton onClick={() => { addLeftPoint(gameState, setGameState) }}>Add point</ClayButton>
            </div>
            <div className="col-md-6">
                <ClayCardWithUser
                    name={rightPlayer.name}
                    description={rightPlayer.jobTitle}
                    userImageSrc={rightPlayer.image}
                />
                <ClayCard>
                    <ClayCard.Body>
                        Score: {game.rightScore}
                    </ClayCard.Body>
                </ClayCard>
                <ClayCard>
                    <ClayCard.Body>
                        Wins: {game.rightWins}
                    </ClayCard.Body>
                </ClayCard>
                { game.leftIsServing ? <ClayCard>
                    <ClayCard.Body>
                        Serving
                    </ClayCard.Body>
                </ClayCard> : null }
                <ClayButton onClick={() => { addRightPoint(gameState, setGameState) }} className="float-right">Add point</ClayButton>
            </div>
        </div>
    );
}