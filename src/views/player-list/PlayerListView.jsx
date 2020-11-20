import React, { useState } from 'react';

import ClayButton from '@clayui/button';
import { ClayCardWithUser } from '@clayui/card';
import Repository from '../../services/Repository.js';
import ClayCard from '@clayui/card';
import { ClayIcon } from '@clayui/icon';
import ClayForm, { ClayInput } from '@clayui/form';

function handleAddPlayer(e) {

}

export default function PlayerListView() {
    const repo = Repository.getInstance();

    const [player, setPlayer] = useState({
        name: '',
        jobTitle: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayer(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleAddPlayer = () => {
        console.log(player)
    }

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
                            <ClayInput name="name" placeholder="Name" type="text" onChange={handleChange}/>
                        </ClayForm.Group>
                        <ClayForm.Group className="form-group-sm">
                            <label htmlFor="basicInput">Job Title</label>
                            <ClayInput name="jobTitle" placeholder="Job Title" type="text"onChange={handleChange}/>
                        </ClayForm.Group>
                        <ClayForm.Group className="form-group-sm">
                            <label htmlFor="basicInput">Image</label>
                            <ClayInput name="image" placeholder="http://nope.png" type="text" onChange={handleChange}/>
                        </ClayForm.Group>
                        <ClayButton onClick={handleAddPlayer} className="col-md-12">Add Player</ClayButton>
                    </ClayForm>
                    </ClayCard.Body>
                </ClayCard>
            </div>
        </div>
    );
}