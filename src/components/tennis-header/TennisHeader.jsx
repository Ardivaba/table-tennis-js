import React from 'react';

import ClayNav, { Item } from '@clayui/nav';

export default function TennisHeader() {
    return (
        <ClayNav>
            <ClayNav.Item>
                <ClayNav.Link active href="/players">
                    {"Players"}
                </ClayNav.Link>
            </ClayNav.Item>
            <ClayNav.Item>
                <ClayNav.Link href="/games">{"Games"}</ClayNav.Link>
            </ClayNav.Item>
        </ClayNav>
    );
}