import TinyQueue from 'tinyqueue';

class Turns {

    constructor(entities, render) {
        this.waitingForInput = false;
        this.render = render;
        this.entities = entities;
        this.newTurn();
    }

    newTurn() {
        this.currentTurn = new Turn([...this.entities], this, this.render);
        this.resumeTurn();
    }

    resumeTurn(newTurnCallback) {
        this.waitingForInput = false;
        if (this.currentTurn.isTurnOver()) {
            newTurnCallback();
            this.newTurn();
        } else {
            this.currentTurn.update();
        }
    }

}

class Turn {

    constructor(entities, turns, render) {
        this.entities = new TinyQueue(entities, this.entityCompatator);
        this.turns = turns;
        this.render = render;
    }

    update() {
        while (!this.isTurnOver() && !this.turns.waitingForInput) {
            const { brain } = this.getNextEntity().components;

            if (brain) {
                switch(brain.type) {
                    case 'player':
                        this.turns.waitingForInput = true;
                        break;

                    default:
                        brain.update();
                        break;
                }
                this.render();
            }
        }
    }

    entityCompatator = (a, b) => (
        b.stats.initiative.current - a.stats.initiative.current
    );

    getNextEntity = () => this.entities.pop();

    isTurnOver = () => this.entities.peek() === undefined && !this.turns.waitingForInput;
}

export default Turns;
