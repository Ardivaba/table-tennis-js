import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TennisHeader from './components/tennis-header/TennisHeader';
import PlayerListView from './views/player-list/PlayerListView';
import PlayerDetailsView from './views/player-details/PlayerDetailsView';
import GameListView from './views/games-list/GamesListView';
import GameDetailView from './views/game-detail/GameDetailView';

import './App.css';

import "@clayui/css/lib/css/atlas.css";

function App() {
  return (
    <div className="container">
        <TennisHeader />
        <Router>
            <Switch>
                <Route path="/players">
                    <PlayerListView />
                </Route>
                <Route path="/player-details">
                    <PlayerDetailsView />
                </Route>
                <Route path="/games/:gameId">
                    <GameDetailView/>
                </Route>
                <Route path="/">
                    <GameListView />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
