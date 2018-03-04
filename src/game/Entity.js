class Entity {

    constructor(icon) {
        this.icon = icon;
        this.brain = {}; // player or other npc behavior
        this.stats = {
            health: 5
        };
        this.abilities = {
            move: 1
        }
    }

}

export default Entity;
