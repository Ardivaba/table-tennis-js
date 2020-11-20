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
                id: 0,
                name: 'Ardi vs. Aladdin',
                description: 'After lunch game...',
                leftPlayer: 0,
                rightPlayer: 1,
                leftScore: 0,
                rightScore: 0,
                leftWins: 0,
                rightWins: 0,
                leftIsServing: true
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

    getPlayerByName(name) {
        for(const player of this.players) {
            if (player.name == name) {
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

    getGame(gameId) {
        for(const game of this.games) {
            if (game.id == gameId) {
                return game;
            }
        }

        return null;
    }

    storeGame(gameId, gameState) {
        for(const i in this.games) {
            if (this.games[i].id == gameId) {
                this.games[i] = gameState;
            }
        }
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new Repository();
        }

        return this.instance;
    }
}