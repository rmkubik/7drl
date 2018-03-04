import Entity from './Entity';

class Tile {

    constructor(entity) {
        this.entity = entity;
    }

    draw() {
        if (this.entity) {
            return this.entity.icon;
        }
    }

}

export default Tile;
