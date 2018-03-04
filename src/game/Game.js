import Grid from './Grid';
import Entity from './Entity';

class Game {

    constructor() {
        const w = 9;
        const h = 9;
        this.grid = new Grid(w, h);
        this.grid.tiles[4][4].entity = new Entity('👩🏻‍🎨');
    }

}

export default Game;
