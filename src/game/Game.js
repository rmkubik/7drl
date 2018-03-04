import Grid from './Grid';
import Entity from './Entity';
import MoveComponent from './MoveComponent';

class Game {

    constructor() {
        const w = 9;
        const h = 9;
        this.grid = new Grid(w, h);
        this.grid.addEntity(new Entity('👩🏻‍🎨'), {x: 4, y: 4});
        MoveComponent(this.grid.tiles[4][4].entity, this.grid);
        this.grid.tiles[4][4].entity.components.move.up();
        this.grid.tiles[3][4].entity.components.move.up();
        this.grid.tiles[2][4].entity.components.move.up();
        this.grid.tiles[1][4].entity.components.move.up();
        this.grid.tiles[0][4].entity.components.move.up();
        this.grid.tiles[0][4].entity.components.move.left();
        this.grid.tiles[0][3].entity.components.move.right();
        this.grid.tiles[0][4].entity.components.move.right();
        this.grid.tiles[0][5].entity.components.move.down();
    }

}

export default Game;
