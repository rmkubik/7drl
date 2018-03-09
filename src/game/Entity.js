class Entity {

    constructor(icon) {
        this.components = {};

        this.icon = icon;
        this.stats = {
            health: {
                current: 5,
                default: 5,
                max: 10
            },
            initiative: {
                current: 0,
                default: 0,
                max: 10
            }
        };
    }

}

export default Entity;
