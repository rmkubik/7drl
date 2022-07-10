import { h } from "hyperapp";

import floorImage from "../../assets/floor1_x2.png";
import attackNumbers from "../../assets/attack_numbers/*.png";
import healthNumbers from "../../assets/health_numbers/*.png";

const Sprite = ({
  src,
  frameWidth,
  frameHeight,
  row = 0,
  col = 0,
  containerStyles = {},
}) => {
  const _containerStyles = Object.assign(
    {
      width: frameWidth + "px",
      height: frameHeight + "px",
      position: "absolute",
    },
    containerStyles
  );

  return (
    <div style={_containerStyles}>
      <div
        style={{
          background: `url(${src}) -${col * frameWidth}px -${
            row * frameHeight
          }px`,
          imageRendering: "pixelated",
          width: frameWidth + "px",
          height: frameHeight + "px",
        }}
      ></div>
    </div>
  );
};

const Tile = ({
  unit,
  unitImage,
  unitFrameWidth,
  unitFrameHeight,
  targeted,
  entity,
}) => {
  return (
    <div class={`tile${targeted ? " targeted" : ""}`}>
      <Sprite src={floorImage} frameWidth={80} frameHeight={80} />
      {unitImage ? (
        <Sprite
          src={unitImage}
          frameWidth={unitFrameWidth}
          frameHeight={unitFrameHeight}
        />
      ) : (
        <p>{unit}</p>
      )}
      {unit ? (
        <Sprite
          src={
            attackNumbers[
              `attack_numbers_000${
                entity.stats &&
                entity.stats.attack &&
                entity.stats.attack.current
              }`
            ]
          }
          frameHeight={16}
          frameWidth={16}
          containerStyles={{
            bottom: 0,
            left: 0,
            margin: "3px",
          }}
        />
      ) : null}
      {unit ? (
        <Sprite
          src={
            healthNumbers[
              `health_numbers_000${
                entity.stats &&
                entity.stats.health &&
                entity.stats.health.current
              }`
            ]
          }
          frameHeight={16}
          frameWidth={16}
          containerStyles={{
            bottom: 0,
            right: 0,
            margin: "3px",
          }}
        />
      ) : null}
    </div>
  );
};

export default Tile;
