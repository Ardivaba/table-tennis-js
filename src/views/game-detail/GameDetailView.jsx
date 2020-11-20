import { ClayVerticalNav } from '@clayui/nav';
import React, { useState } from 'react';

import ClayButton from '@clayui/button';
import ClayCardWithInfo, { ClayCardWithUser, ClayCardWithNavigation } from '@clayui/card';
import Repository from '../../services/Repository.js';
import ClayCard from '@clayui/card';
import { spritemap } from '../../constants';
import { ClayIcon } from '@clayui/icon';
import ClayForm, { ClayInput } from '@clayui/form';

function addLeftPoint(game, setGame) {
    const repo = Repository.getInstance();

    setGame(prevGame => ({
        ...prevGame,
        [leftScore]: prevGame.leftScore + 1
    }));

    repo.storeGame(game.id, game);
}

function addRightPoint(game, setGame) {
    const repo = Repository.getInstance();

    setGame(prevGame => ({
        ...prevGame,
        [rightScore]: prevGame.rightScore + 1
    }));

    repo.storeGame(game.id, game);
}

export default function GameDetailView(props) {
    const repo = Repository.getInstance();

    const game = repo.getGame(props.gameId);

    const leftPlayer = repo.getPlayer(game.leftPlayer);
    const rightPlayer = repo.getPlayer(game.rightPlayer);

    const [game, setGame] = useState(game);

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
                        Score:
                    </ClayCard.Body>
                </ClayCard>
                <ClayCard>
                    <ClayCard.Body>
                        Wins:
                    </ClayCard.Body>
                </ClayCard>
                <ClayButton onClick={() => { addLeftPoint(game, setGame) }}>Add point</ClayButton>
            </div>
            <div className="col-md-6">
                <ClayCardWithUser
                    name={rightPlayer.name}
                    description={rightPlayer.jobTitle}
                    userImageSrc={rightPlayer.image}
                />
                <ClayCard>
                    <ClayCard.Body>
                        Score:
                    </ClayCard.Body>
                </ClayCard>
                <ClayCard>
                    <ClayCard.Body>
                        Wins:
                    </ClayCard.Body>
                </ClayCard>
                <ClayButton onClick={() => { addRightPoint(game, setGame) }} className="float-right">Add point</ClayButton>
            </div>
        </div>
    );
}