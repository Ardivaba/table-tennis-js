import logo from './logo.svg';

import TennisHeader from './components/tennis-header/TennisHeader';
import PlayerListView from './views/player-list/PlayerListView';
import GameListView from './views/games-list/GamesListView';

import './App.css';

import "@clayui/css/lib/css/atlas.css";

function App() {
  return (
    <div className="container">
      <TennisHeader />
      <GameListView />
    </div>
  );
}

export default App;
