export default class Repository {
    constructor() {
        this.players = [
            {
                name: 'Ardi',
                jobTitle: 'Programmer',
                image: 'https://picsum.photos/id/1/600/600'
            },
            {
                name: 'Aladdin',
                jobTitle: 'Programmer',
                image: 'https://picsum.photos/id/2/600/600'
            },
            {
                name: 'Ahti',
                jobTitle: 'CTO',
                image: 'https://picsum.photos/id/3/600/600'
            },
            {
                name: 'Sten-Mark',
                jobTitle: 'Programmer',
                image: 'https://picsum.photos/id/4/600/600'
            },
            {
                name: 'Raigo',
                jobTitle: 'Programmer',
                image: 'https://picsum.photos/id/5/600/600'
            },
            {
                name: 'Natanel',
                jobTitle: 'Project Manager',
                image: 'https://picsum.photos/id/6/600/600'
            }
        ]
    }

    getPlayers() {
        return this.players;
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new Repository();
        }

        return this.instance;
    }
}