import { ClayVerticalNav } from '@clayui/nav';
import React, { useState } from 'react';

import ClayButton from '@clayui/button';
import ClayCardWithInfo, { ClayCardWithUser, ClayCardWithNavigation } from '@clayui/card';
import Repository from '../../services/Repository.js';
import ClayCard from '@clayui/card';
import { spritemap } from '../../constants';
import { ClayIcon } from '@clayui/icon';
import ClayForm, { ClayInput } from '@clayui/form';

function handleAddGame(e) {

}

export default function GameDetailView(props) {
    const repo = Repository.getInstance();

    const game = repo.getGame(props.gameId);

    const leftPlayer = repo.getPlayer(game.leftPlayer);
    const rightPlayer = repo.getPlayer(game.rightPlayer);

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
                <ClayButton>Add point</ClayButton>
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
                <ClayButton className="float-right">Add point</ClayButton>
            </div>
        </div>
    );
}