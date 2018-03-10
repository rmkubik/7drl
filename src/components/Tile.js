import { h } from 'hyperapp';

const Tile = ({unit, targeted}) => (
    <div class={`tile${targeted ? ' targeted' : ''}`}>
        <p>{unit}</p>
    </div>
)

export default Tile;
