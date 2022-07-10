import { h } from "hyperapp";

import floorImage from "../../assets/floor1_x2.png";

const Sprite = ({ src, frameWidth, frameHeight, row, col, isBackground }) => {
  return (
    <div
      style={{
        width: frameWidth + "px",
        height: frameHeight + "px",
        position: "absolute",
      }}
    >
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
}) => {
  return (
    <div class={`tile${targeted ? " targeted" : ""}`}>
      <Sprite
        src={floorImage}
        frameWidth={80}
        frameHeight={80}
        row={0}
        col={0}
      />
      {unitImage ? (
        <Sprite
          src={unitImage}
          frameWidth={unitFrameWidth}
          frameHeight={unitFrameHeight}
          row={0}
          col={0}
        />
      ) : (
        <p>{unit}</p>
      )}
    </div>
  );
};

export default Tile;
