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

export default function GameListView() {
    const repo = Repository.getInstance();

    return (
        <div className="row">
            {repo.getGames().map((game) => {
                return (
                    <div className="col-md-4">
                        <ClayCardWithUser
                            name={game.name}
                            description={game.description}
                            userImageSrc={game.image}
                        />
                    </div>
                );
            })}

            <div className="col-md-4">
                <ClayCard>
                    <ClayCard.Body>
                    <ClayForm>
                        <ClayForm.Group className="form-group-sm">
                            <label htmlFor="basicInput">Name</label>
                            <ClayInput placeholder="Name" type="text"/>
                        </ClayForm.Group>
                        <ClayForm.Group className="form-group-sm">
                            <label htmlFor="basicInput">Job Title</label>
                            <ClayInput placeholder="Job Title" type="text" />
                        </ClayForm.Group>
                        <ClayForm.Group className="form-group-sm">
                            <label htmlFor="basicInput">Image</label>
                            <ClayInput placeholder="http://nope.png" type="text"/>
                        </ClayForm.Group>
                        <ClayButton onClick={handleAddGame} className="col-md-12">Add Player</ClayButton>
                    </ClayForm>
                    </ClayCard.Body>
                </ClayCard>
            </div>
        </div>
    );
}