import gen from 'random-seed';

import Grid from './Grid';
import Entity from './Entity';
import MoveComponent from './MoveComponent';
import BugBrain from './BugBrain';
import PlayerBrain from './PlayerBrain';


class Game {

    entities = [];
    actions = {};
    seed = 1;

    constructor() {
        this.rand = new gen(this.seed);

        const w = 9;
        const h = 9;
        this.grid = new Grid(w, h);

        this.addEntity(new Entity('👩🏻‍🎨'), {x: 4, y: 4});
        MoveComponent(this.entities[0], this.grid);
        PlayerBrain(this.entities[0], this.render);

        this.addEntity(new Entity('🐞'), {x: 3, y: 2});
        MoveComponent(this.entities[1], this.grid);
        BugBrain(this.entities[1], this.rand);

        this.addEntity(new Entity('🐞'), {x: 1, y: 7});
        this.addEntity(new Entity('🐞'), {x: 4, y: 8});
        this.addEntity(new Entity('🐞'), {x: 2, y: 2});
    }

    update() {
        // update game state every time player makes an action
        // update all game entities, brain assigns update action?
        this.entities.forEach((entity) => {
            if (entity.components.brain) {
                entity.components.brain.update();
                this.render();
            }
        });
        // ^^^ turn this into a priority queue based on initiative?
        // ^^^ when you hit a player brain, wait for input
    }

    render = () => {
        this.actions.render(this.grid.tiles);
    }

    bindActions = (actions) => {
        this.actions = actions;
    }

    addEntity(entity, position) {
        this.entities.push(entity);
        this.grid.addEntity(entity, position);
    }
}

export default Game;
