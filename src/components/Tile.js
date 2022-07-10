import { h } from "hyperapp";

const Sprite = ({ src, frameWidth, frameHeight, row, col }) => {
  return (
    <div style={{ width: frameWidth + "px", height: frameHeight + "px" }}>
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
