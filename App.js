import { h, app } from 'hyperapp';

import './src/css/App.scss';

import Game from './src/game/Game';
import Tile from './src/components/Tile';

const game = new Game();

const state = {
  tiles: game.grid.tiles
}

const actions = {
  render: tiles => state => ({ tiles })
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

const main = app(state, actions, view, document.body);

game.bindActions({render: main.render});

window.game = game;
