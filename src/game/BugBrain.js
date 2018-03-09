const BugBrain = (entity, rand) => {
    const { move } = entity.components;
    if (!move) console.error("Entity does not have move component!");

    const update = () => {
        const direction = rand.intBetween(0, 3);

        switch (direction) {
            case 0:
                move.up();
                break;
            case 1:
                move.down();
                break;
            case 2:
                move.left();
                break;
            case 3:
                move.right();
                break;
        }
    }

    const brain = {
        type: 'bug',
        update
    }

    Object.assign(
        entity.components,
        {
            brain
        }
    )
}

export default BugBrain;
