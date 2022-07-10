import TargetingSystem from "./TargetingSystem";

const MoveComponent = (entity, grid) => {
  const isValidMove = (position) => {
    return grid.isPositionInGrid(position) && !grid.getEntity(position);
  };

  const moveTo = (targetPos) => {
    if (isValidMove(targetPos)) {
      grid.removeEntity(entity.position);
      grid.addEntity(entity, targetPos);
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
