class Input {

    keydown = {};
    listeners = {};

    constructor(doc, inputEventCallback) {
        doc.addEventListener('keydown', event => {
            if (!this.keydown[event.key]) {
                this.listeners[event.key] && this.listeners[event.key]();
                inputEventCallback(event.key);
            }
            this.keydown[event.key] = true;
        });

        doc.addEventListener('keyup', event => {
            this.keydown[event.key] = false;
        });
    }

    listen(key, listener) {
        this.listeners[key] = listener;
    }

}

export default Input;
