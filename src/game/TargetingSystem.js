class TargetingSystem {

    directions = ['up', 'down', 'left', 'right'];

    constructor(entity) {
        this.entity = entity;
    }

    target = (target) => {
        let x;
        let y;
        const {position} = this.entity;
        switch (target) {
            case 'up':
                x = position.x,
                y = position.y - 1
                break;

            case 'down':
                x = position.x,
                y = position.y + 1
                break;

            case 'left':
                x = position.x - 1,
                y = position.y
                break;

            case 'right':
                x = position.x + 1,
                y = position.y
                break;
        }
        return {x, y};
    }
}

export default TargetingSystem;
