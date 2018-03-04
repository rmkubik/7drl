import { h, app } from 'hyperapp';

import './src/css/App.scss';

import Game from './src/game/Game';
import PlayerBrain from './src/game/PlayerBrain';
import Tile from './src/components/Tile';

const game = new Game();
const playerBrain = new PlayerBrain();

const state = {
  tiles: game.grid.tiles
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
  <div class="app">
    {state.tiles.map(row => (
        <div class="row">
            {row.map(tile => (
                <Tile unit={tile.draw()} />
            ))}
        </div>
    ))}
  </div>
)

app(state, actions, view, document.body);
