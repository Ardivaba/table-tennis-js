import { ClayVerticalNav } from '@clayui/nav';
import React, { useState } from 'react';

import ClayButton from '@clayui/button';
import ClayCardWithInfo, { ClayCardWithUser, ClayCardWithNavigation } from '@clayui/card';
import Repository from '../../services/Repository.js';
import ClayCard from '@clayui/card';
import { spritemap } from '../../constants';
import { ClayIcon } from '@clayui/icon';
import ClayForm, { ClaySelect } from '@clayui/form';

function handleAddGame(e) {

}

export default function GameListView() {
    const repo = Repository.getInstance();

    const [game, setGame] = useState({
        name: 'x vs x',
        description: 'After lunch game...',
        leftPlayer: 0,
        rightPlayer: 0,
        leftScore: 0,
        rightScore: 0,
        leftWins: 0,
        rightWins: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGame(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleAddGame = () => {
        console.log(game)
    }

    return (
        <div className="row">
            {repo.getGames().map((game) => {
                return (
                    <div className="col-md-4">
                        <ClayCardWithUser
                            name={game.name}
                            description={`Score: ${game.leftScore}:${game.rightScore} Wins: ${game.leftWins}:${game.rightWins}`}
                            userImageSrc={game.image}
                        />
                    </div>
                );
            })}

            <div className="col-md-4">
                <ClayCard>
                    <ClayCard.Body>
                    <ClayForm>
                        <ClaySelect name="leftPlayer" onChange={handleChange}>
                            {repo.players.map(player => (
                                <ClaySelect.Option
                                    key={player.id}
                                    label={player.name}
                                    value={player.id}
                                />
                            ))}
                        </ClaySelect>
                        <br />
                        <ClaySelect name="rightPlayer" onChange={handleChange}>
                            {repo.players.map(player => (
                                <ClaySelect.Option
                                    key={player.id}
                                    label={player.name}
                                    value={player.id}
                                />
                            ))}
                        </ClaySelect>
                        <br />
                        <ClayButton onClick={handleAddGame} className="col-md-12">Start Game</ClayButton>
                    </ClayForm>
                    </ClayCard.Body>
                </ClayCard>
            </div>
        </div>
    );
}