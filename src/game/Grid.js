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

    width = () => this.tiles.length;

    height = () => this.tiles[0].length;
}

export default Grid;
