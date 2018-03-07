import Grid from './Grid';
import Entity from './Entity';
import MoveComponent from './MoveComponent';
import PlayerBrain from './PlayerBrain';

class Game {

    entities = [];
    actions = {};

    constructor() {
        const w = 9;
        const h = 9;
        this.grid = new Grid(w, h);
        this.addEntity(new Entity('👩🏻‍🎨'), {x: 4, y: 4});
        MoveComponent(this.grid.tiles[4][4].entity, this.grid);
        PlayerBrain(this.grid.tiles[4][4].entity, this.render);

        this.addEntity(new Entity('🐞'), {x: 3, y: 2});
        this.addEntity(new Entity('🐞'), {x: 1, y: 7});
        this.addEntity(new Entity('🐞'), {x: 4, y: 8});
        this.addEntity(new Entity('🐞'), {x: 2, y: 2});
    }

    update() {
        // update game state every time player makes an action
        // update all game entities, brain assigns update action?
        this.entities.forEach((entity) => {
            entity.update();
            render();
        });
        // ^^^ turn this into a priority queue based on initiative?
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
