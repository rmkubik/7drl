class Entity {
  constructor(icon, spritesheet) {
    this.components = {};

    this.icon = icon;

    if (spritesheet) {
      this.image = spritesheet.src;
      this.frameWidth = spritesheet.frameWidth;
      this.frameHeight = spritesheet.frameHeight;
    }

    this.stats = {
      health: {
        current: 5,
        default: 5,
        max: 10,
      },
      attack: {
        current: 1,
        default: 1,
      },
      initiative: {
        current: 0,
        default: 0,
        max: 10,
      },
    };
  }
}

export default Entity;
