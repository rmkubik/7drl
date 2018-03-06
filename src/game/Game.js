import Grid from './Grid';
import Entity from './Entity';
import MoveComponent from './MoveComponent';
import PlayerBrain from './PlayerBrain';

class Game {

    constructor() {
        const w = 9;
        const h = 9;
        this.grid = new Grid(w, h);
        this.grid.addEntity(new Entity('👩🏻‍🎨'), {x: 4, y: 4});
        MoveComponent(this.grid.tiles[4][4].entity, this.grid);

        this.grid.addEntity(new Entity('🐞'), {x: 3, y: 2});
        this.grid.addEntity(new Entity('🐞'), {x: 1, y: 7});
        this.grid.addEntity(new Entity('🐞'), {x: 4, y: 8});
        this.grid.addEntity(new Entity('🐞'), {x: 2, y: 2});
    }

    bindActions(actions) {
        PlayerBrain(this.grid.tiles[4][4].entity, actions);
    }
}

export default Game;
