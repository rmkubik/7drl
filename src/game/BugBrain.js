import TargetingSystem from "./TargetingSystem";

const BugBrain = (entity, rand) => {
  const { move } = entity.components;
  if (!move) console.error("Entity does not have move component!");

  const targeting = new TargetingSystem(entity);

  let nextDirection;

  const update = () => {
    move[targeting.directions[nextDirection]]();
  };

  const telegraph = () => {
    nextDirection = rand.intBetween(0, 3);
    return targeting.target(targeting.directions[nextDirection]);
  };

  const brain = {
    type: "bug",
    update,
    telegraph,
  };

  Object.assign(entity.components, {
    brain,
  });
};

export default BugBrain;
