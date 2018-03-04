const MoveComponent = (entity, grid) => {
    const isValidMove = (position) => {
        return grid.isPositionInGrid(position) && !grid.getEntity(position);
    }

    const moveTo = (targetPos) => {
        if (isValidMove(targetPos)) {
            grid.removeEntity(entity.position);
            grid.addEntity(entity, targetPos);
        } else {
            console.log('invalid move');
        }
    }

    const move = {
        up: () => {
            const targetPos = {
                x: entity.position.x,
                y: entity.position.y - 1
            }
            moveTo(targetPos);
        },
        down: () => {
            const targetPos = {
                x: entity.position.x,
                y: entity.position.y + 1
            }
            moveTo(targetPos);
        },
        left: () => {
            const targetPos = {
                x: entity.position.x - 1,
                y: entity.position.y
            }
            moveTo(targetPos);
        },
        right: () => {
            const targetPos = {
                x: entity.position.x + 1,
                y: entity.position.y
            }
            moveTo(targetPos);
        }
    };

    Object.assign(
        entity.components,
        {
            move
        }
    )
}

export default MoveComponent;
