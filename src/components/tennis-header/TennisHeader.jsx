import React from 'react';

import { Nav } from '@clayui/nav';

export default function TennisHeader() {
    return (
        <ClayNav>
            <ClayNav.Item>
                <ClayNav.Link active href="#">
                    {"Active"}
                </ClayNav.Link>
            </ClayNav.Item>
            <ClayNav.Item>
                <ClayNav.Link href="#">{"Normal"}</ClayNav.Link>
            </ClayNav.Item>
            <ClayNav.Item>
                <ClayNav.Link disabled href="#">
                    {"Disabled"}
                </ClayNav.Link>
            </ClayNav.Item>
        </ClayNav>
    );
}