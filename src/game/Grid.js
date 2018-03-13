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

    getRandomEdgePosition(rand) {
        const side = rand.intBetween(0, 3);

        if (side === 0 || side === 1) {
            const y = rand.intBetween(0, this.width() - 1);
            return { x: side * (this.height() - 1), y }
        } else {
            const x = rand.intBetween(0, this.height() - 1);
            return { x, y: (side - 2) * (this.width() - 1) }
        }
    }

    isPositionInGrid(position) {
        return position.y >= 0 && position.y < this.width()
            && position.x >= 0 && position.x < this.height();
    }

    targetTile(position, targeted) {
        if (this.isPositionInGrid(position)) {
            this.tiles[position.y][position.x].targeted = targeted;
        }
    }

    unTargetAllTiles() {
        this.tiles.forEach((row) => {
            row.forEach((tile) => {
                tile.targeted = false;
            });
        });
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
        const { entity } = this.tiles[position.y][position.x];
        this.tiles[position.y][position.x].entity = undefined;
        return entity;
    }

    width = () => this.tiles.length;

    height = () => this.tiles[0].length;
}

export default Grid;
