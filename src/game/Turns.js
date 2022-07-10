import TinyQueue from "tinyqueue";

class Turns {
  constructor(entities, render, update, newTurnCallback, { grid }) {
    this.waitingForInput = false;
    this.render = render;
    this.update = update;
    this.entities = entities;
    this.newTurnCallback = newTurnCallback;
    this.grid = grid;
    this.newTurn();
  }

  newTurn = () => {
    this.newTurnCallback();
    this.currentTurn = new Turn(
      [...this.entities],
      this,
      this.render,
      this.update,
      this.newTurn,
      this.newTurnCallback
    );
    this.resumeTurn();
  };

  resumeTurn() {
    this.waitingForInput = false;
    if (this.currentTurn.isTurnOver()) {
      this.newTurn();
    } else {
      this.currentTurn.update();
    }
  }
}

class Turn {
  constructor(entities, turns, render, update, newTurn) {
    this.entities = new TinyQueue(entities, this.entityCompatator);
    update();
    this.turns = turns;
    this.render = render;
    this.newTurn = newTurn;
  }

  update() {
    while (!this.isTurnOver() && !this.turns.waitingForInput) {
      const entity = this.getNextEntity();
      const { brain } = entity.components;

      if (brain) {
        switch (brain.type) {
          case "player":
            this.turns.waitingForInput = true;
            break;

          default:
            brain.update();
            break;
        }
        this.render();
      }

      if (entity.isDead) {
        this.turns.entities = this.turns.entities.filter(
          (otherEntity) => otherEntity !== entity
        );
        this.turns.grid.removeEntity(entity.position);
      }
    }

    if (this.isTurnOver()) {
      this.newTurn();
    }
  }

  entityCompatator = (a, b) =>
    b.stats.initiative.current - a.stats.initiative.current;

  getNextEntity = () => this.entities.pop();

  isTurnOver = () =>
    this.entities.peek() === undefined && !this.turns.waitingForInput;
}

export default Turns;
