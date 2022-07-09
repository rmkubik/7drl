import { h, app } from "hyperapp";

import "./src/css/App.scss";

import Game from "./src/game/Game";
import GameContainer, { initGame } from "./src/components/GameContainer";
import Tile from "./src/components/Tile";

// const game = new Game();
const game = initGame();

const state = {
  tiles: game.grid.tiles,
  turnNumber: 0,
};

const actions = {
  render: (tiles) => (state) => ({ tiles }),
  incrementTurnNumber: () => (state) => ({ turnNumber: state.turnNumber + 1 }),
};

const view = (state, actions) => (
  <div class="app">
    <GameContainer state={state} actions={actions} />
    {state.tiles.map((row) => (
      <div class="row">
        {row.map((tile) => (
          <Tile {...tile.draw()} />
        ))}
      </div>
    ))}
    <p>Turn: {state.turnNumber}</p>
  </div>
);

const main = app(state, actions, view, document.body);

game.setState(state);
game.bindActions({
  render: main.render,
  incrementTurnNumber: main.incrementTurnNumber,
});

window.game = game;
