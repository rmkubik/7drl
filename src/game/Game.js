import gen from 'random-seed';
import fsm from 'javascript-state-machine';

import Grid from './Grid';
import Entity from './Entity';
import Input from './Input';
import Turns from './Turns';
import MoveComponent from './MoveComponent';
import BugBrain from './BugBrain';
import PlayerBrain from './PlayerBrain';


class Game {

    entities = [];
    actions = {};
    seed = 1;

    constructor() {
        this.rand = new gen(this.seed);
        const input = new Input(document, () => {
            this.turns.resumeTurn(() => {
                const randPos = this.grid.getRandomEdgePosition(this.rand);
                console.log(randPos);
                addBug(randPos.x, randPos.y);
            });
            this.render();
        });

        const w = 9;
        const h = 9;
        this.grid = new Grid(w, h);

        const player = new Entity('👩🏻‍🎨');
        this.addEntity(player, {x: 4, y: 4});
        MoveComponent(player, this.grid);
        PlayerBrain(player, input);
        player.stats.initiative.current = -1;

        const addBug = (x, y) => {
            const bug = new Entity('🐞');
            this.addEntity(bug, {x, y});
            MoveComponent(bug, this.grid);
            BugBrain(bug, this.rand);
        }

        addBug(3, 2);
        addBug(1, 7);
        addBug(4, 8);
        addBug(2, 2);

    }

    render = () => {
        this.actions.render(this.grid.tiles);
    }

    bindActions = (actions) => {
        this.actions = actions;
        this.turns = new Turns(this.entities, this.render);
    }

    addEntity(entity, position) {
        this.entities.push(entity);
        this.grid.addEntity(entity, position);
    }
}

export default Game;
