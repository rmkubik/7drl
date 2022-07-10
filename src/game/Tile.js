import Entity from "./Entity";

class Tile {
  constructor(entity) {
    this.entity = entity;
    this.targeted = false;
  }

  // draw() {
  //     if (this.entity) {
  //         return {
  //             unit: this.entity.icon,
  //             targeted: this.targeted
  //         }
  //     }
  // }

  draw() {
    return {
      unit: this.entity ? this.entity.icon : undefined,
      entity: this.entity,
      unitImage: this.entity ? this.entity.image : undefined,
      unitFrameWidth: this.entity ? this.entity.frameWidth : undefined,
      unitFrameHeight: this.entity ? this.entity.frameHeight : undefined,
      targeted: this.targeted,
    };
  }
}

export default Tile;
