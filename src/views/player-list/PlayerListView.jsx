import { ClayVerticalNav } from '@clayui/nav';
import React, { useState } from 'react';

import ClayButton from '@clayui/button';
import ClayCardWithInfo, { ClayCardWithUser, ClayCardWithNavigation } from '@clayui/card';
import Repository from '../../services/Repository.js';
import ClayCard from '@clayui/card';
import { spritemap } from '../../constants';
import { ClayIcon } from '@clayui/icon';
import ClayForm, { ClayInput } from '@clayui/form';

function handleAddPlayer(e) {

}

export default function PlayerListView() {
    const repo = Repository.getInstance();

    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [image, setImage] = useState('');

    const player = useState({
        name: '',
        jobTitle: '',
        image: ''
    });

    return (
        <div className="row">
            {repo.getPlayers().map((player) => {
                return (
                    <div className="col-md-4">
                        <ClayCardWithUser
                            name={player.name}
                            description={player.jobTitle}
                            userImageSrc={player.image}
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
                        <ClayButton onClick={handleAddPlayer} className="col-md-12">Add Player</ClayButton>
                    </ClayForm>
                    </ClayCard.Body>
                </ClayCard>
            </div>
        </div>
    );
}