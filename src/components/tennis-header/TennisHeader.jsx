import React from 'react';

import ClayNav, { Item } from '@clayui/nav';

export default function TennisHeader() {
    return (
        // <p>Hi</p>
        <ClayNav>
            <ClayNav.Item>
                <ClayNav.Link active href="#">
                    {"Players"}
                </ClayNav.Link>
            </ClayNav.Item>
            <ClayNav.Item>
                <ClayNav.Link href="#">{"Tournaments"}</ClayNav.Link>
            </ClayNav.Item>
        </ClayNav>
    );
}