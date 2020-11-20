export default class Repository {
    constructor() {
        this.players = [
            {
                id: 0,
                name: 'Ardi',
                jobTitle: 'Programmer',
                image: 'https://picsum.photos/id/1/600/600'
            },
            {
                id: 1,
                name: 'Aladdin',
                jobTitle: 'Programmer',
                image: 'https://picsum.photos/id/2/600/600'
            },
            {
                id: 2,
                name: 'Ahti',
                jobTitle: 'CTO',
                image: 'https://picsum.photos/id/3/600/600'
            },
            {
                id: 3,
                name: 'Sten-Mark',
                jobTitle: 'Programmer',
                image: 'https://picsum.photos/id/4/600/600'
            },
            {
                id: 4,
                name: 'Raigo',
                jobTitle: 'Programmer',
                image: 'https://picsum.photos/id/5/600/600'
            },
            {
                id: 5,
                name: 'Natanel',
                jobTitle: 'Project Manager',
                image: 'https://picsum.photos/id/6/600/600'
            }
        ];

        this.games = [
            {
                name: 'Ardi vs. Aladdin',
                description: 'After lunch game...',
                leftPlayers: [
                    0
                ],
                rightPlayers: [
                    1
                ],
                leftScore: 0,
                rightScore: 1,
                leftWins: 0,
                rightWins: 1
            }
        ];
    }

    getPlayer(id) {
        for(const player of this.players) {
            if (player.id == id) {
                return player;
            }
        }

        return null;
    }

    getPlayers() {
        return this.players;
    }

    getGames() {
        return this.games;
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new Repository();
        }

        return this.instance;
    }
}