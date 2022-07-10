const playerKeys = {
  up: "w",
  down: "s",
  left: "a",
  right: "d",
};

const PlayerBrain = (entity, input) => {
  const { move } = entity.components;
  if (!move) console.error("Entity does not have move component!");

  input.listen(playerKeys.up, () => {
    move.up();
  });
  input.listen(playerKeys.down, () => {
    move.down();
  });
  input.listen(playerKeys.left, () => {
    move.left();
  });
  input.listen(playerKeys.right, () => {
    move.right();
  });

  // on input:
  // store action in brain?
  // on update:
  // execute most recently stored action?

  const brain = {
    type: "player",
    update: () => {
      console.log("wait for input");
    },
    telegraph: () => {
      console.log("player telegraph");
    },
  };

  Object.assign(entity.components, {
    brain,
  });
};

export default PlayerBrain;
