import Entity from './Entity';

class Tile {

    constructor(entity) {
        this.entity = entity;
        this.targeted = false;
    }

    // draw() {
    //     if (this.entity) {
    //         return {
    //             unit: this.entity.icon,
    //             targeted: this.targeted
    //         }
    //     }
    // }

    draw() {
        return {
            unit: this.entity ? this.entity.icon : undefined,
            targeted: this.targeted
        };
    }

}

export default Tile;
