import Tile from './Tile';

class Grid {

    constructor(width, height) {
        this.tiles = this._initTiles(width, height);

    }

    _initTiles(width, height) {
        const tiles = [];
        for(let x = 0; x < width; x++) {
            tiles.push([]);
            for(let y = 0; y < height; y++) {
                tiles[x].push(new Tile());
            }
        }
        return tiles;
    }

    isPositionInGrid(position) {
        return position.x >= 0 && position.x < this.width()
            && position.y >= 0 && position.y < this.height();
    }

    getEntity(position) {
        if (this.isPositionInGrid(position)) {
            return this.tiles[position.y][position.x].entity;
        }
    }

    addEntity(entity, position) {
        this.tiles[position.y][position.x].entity = entity;
        entity.position = position;
    }

    removeEntity(position) {
        const {entity} = this.tiles[position.y][position.x];
        this.tiles[position.y][position.x].entity = undefined;
        return entity;
    }

    width = () => this.tiles.length;

    height = () => this.tiles[0].length;
}

export default Grid;
