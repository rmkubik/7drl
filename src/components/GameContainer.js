import { h } from "hyperapp";

import Game from "../game/Game";

let game;

const initGame = () => {
  game = new Game();

  return game;
};

const GameContainer = ({ state, actions }) => {
  game.setState(state);

  return null;
};

export { initGame };
export default GameContainer;
