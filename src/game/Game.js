import gen from "random-seed";
import fsm from "javascript-state-machine";

import Grid from "./Grid";
import Entity from "./Entity";
import Input from "./Input";
import Turns from "./Turns";
import MoveComponent from "./MoveComponent";
import BugBrain from "./BugBrain";
import PlayerBrain from "./PlayerBrain";
import randIntBetween from "../utils/randIntBetween";

import playerSpriteSheet from "../../assets/basic_guy3_x2.png";
import swordSpriteSheet from "../../assets/sword3_x2.png";
import heartsSpriteSheet from "../../assets/hearts_x2.png";
import evilGuy1bSpriteSheet from "../../assets/evil_guy1b_x2.png";

class Game {
  entities = [];
  actions = {};
  seed = 1;

  constructor() {
    this.rand = new gen(this.seed);
    const input = new Input(document, ({ hasListener }) => {
      if (hasListener) {
        this.turns.resumeTurn();
        this.render();
      }
    });

    const w = 9;
    const h = 9;
    this.grid = new Grid(w, h);

    const player = new Entity("👩🏻‍🎨", {
      src: playerSpriteSheet,
      frameWidth: 80,
      frameHeight: 80,
    });
    this.addEntity(player, { x: 4, y: 4 });
    MoveComponent(player, this.grid, ({ entity, targetEntity }) => {
      console.log(`${entity.icon} hit ${targetEntity.icon}`);
    });
    PlayerBrain(player, input);
    player.stats.initiative.current = 1;

    this.addBug = (x, y) => {
      const bug = new Entity("🐞", {
        src: evilGuy1bSpriteSheet,
        frameWidth: 80,
        frameHeight: 80,
      });
      this.addEntity(bug, { x, y });
      MoveComponent(bug, this.grid);
      BugBrain(bug, this.rand);
    };

    this.addSword = (x, y) => {
      const sword = new Entity("🗡", {
        src: swordSpriteSheet,
        frameWidth: 80,
        frameHeight: 80,
      });
      this.addEntity(sword, { x, y });
    };

    this.addHeart = (x, y) => {
      const heart = new Entity("❤️", {
        src: heartsSpriteSheet,
        frameWidth: 80,
        frameHeight: 80,
      });
      this.addEntity(heart, { x, y });
    };

    this.addSword(randIntBetween(0, w - 1), 0);
    this.addHeart(randIntBetween(0, w - 1), h - 1);
  }

  setState = (state) => {
    this.state = state;
  };

  update = () => {
    this.grid.unTargetAllTiles();

    this.entities.forEach((entity) => {
      if (
        entity.components.brain &&
        entity.components.brain.type !== "player"
      ) {
        const tilePos = entity.components.brain.telegraph();
        this.grid.targetTile(tilePos, true);
      }
    });

    this.render();
  };

  render = () => {
    this.actions.render(this.grid.tiles);
  };

  bindActions = (actions) => {
    this.actions = actions;
    this.turns = new Turns(this.entities, this.render, this.update, () => {
      // Spawn every 4 turns starting on 1st turn, not 0th turn
      const { turnNumber } = this.state;

      const BUG_SPAWN_INTERVAL = 4;
      const FIRST_BUG_SPAWN_TURN = 1;

      if ((turnNumber - FIRST_BUG_SPAWN_TURN) % BUG_SPAWN_INTERVAL === 0) {
        const randPos = this.grid.getRandomEdgePosition(this.rand);
        this.addBug(randPos.x, randPos.y);
      }

      this.actions.incrementTurnNumber();
    });
  };

  addEntity(entity, position) {
    this.entities.push(entity);
    this.grid.addEntity(entity, position);
  }
}

export default Game;
