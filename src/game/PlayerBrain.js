import Input from './Input';

const playerKeys = {
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd'
}

const PlayerBrain = (entity, render) => {
    const { move } = entity.components;
    if (!move) console.error("Entity does not have move component!");

    const input = new Input(document);
    input.listen(playerKeys.up, () => { move.up(); render(); });
    input.listen(playerKeys.down, () => { move.down(); render(); });
    input.listen(playerKeys.left, () => { move.left(); render(); });
    input.listen(playerKeys.right, () => { move.right(); render(); });

    // on input:
    // store action in brain?
    // on update:
    // execute most recently stored action?

    const brain = {
        update: () => { console.log('wait for input'); }
    }

    Object.assign(
        entity.components,
        {
            brain
        }
    )
}

export default PlayerBrain;
