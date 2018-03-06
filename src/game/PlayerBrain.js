import Input from './Input';

const playerKeys = {
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd'
}

// entity needs moveComponent
const PlayerBrain = (entity, actions) => {
    const {move} = entity.components;
    const input = new Input(document);
    input.listen(playerKeys.up, () => { move.up(); actions.render(); });
    input.listen(playerKeys.down, () => { move.down(); actions.render(); });
    input.listen(playerKeys.left, () => { move.left(); actions.render(); });
    input.listen(playerKeys.right, () => { move.right(); actions.render(); });

    const brain = () => {

    }
    // add input listeners to entity
    // corresponding listeners should call corresponding moves
    Object.assign(
        entity.components,
        {
            brain
        }
    )
}

export default PlayerBrain;
