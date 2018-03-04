import Input from './Input';

class PlayerBrain {

    constructor() {
        const input = new Input(document);
        input.listen('w', () => {console.log('w')});
        input.listen('a', () => {console.log('a')});
        input.listen('s', () => {console.log('s')});
        input.listen('d', () => {console.log('d')});
    }

}

export default PlayerBrain;
