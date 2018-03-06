class Entity {

    constructor(icon) {
        this.components = {};

        this.icon = icon;
        this.brain = {}; // player or other npc behavior
        this.stats = {
            health: 5
        };
    }

}

export default Entity;
