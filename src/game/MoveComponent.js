import TargetingSystem from "./TargetingSystem";

const MoveComponent = (entity, grid, onEntityCollide) => {
  const isValidMove = (position) => {
    const targetEntity = grid.getEntity(position);

    return grid.isPositionInGrid(position) && !targetEntity;
  };

  const moveTo = (targetPos) => {
    const targetEntity = grid.getEntity(targetPos);

    if (isValidMove(targetPos)) {
      grid.removeEntity(entity.position);
      grid.addEntity(entity, targetPos);
    } else if (targetEntity) {
      onEntityCollide && onEntityCollide({ entity, targetEntity });
    } else {
      console.log("invalid move");
    }
  };

  const targeting = new TargetingSystem(entity);

  const move = {
    up: () => {
      moveTo(targeting.target("up"));
    },
    down: () => {
      moveTo(targeting.target("down"));
    },
    left: () => {
      moveTo(targeting.target("left"));
    },
    right: () => {
      moveTo(targeting.target("right"));
    },
  };

  Object.assign(entity.components, {
    move,
  });
};

export default MoveComponent;
