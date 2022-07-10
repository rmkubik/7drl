class Input {
  keydown = {};
  listeners = {};

  constructor(doc, inputEventCallback) {
    doc.addEventListener("keydown", (event) => {
      if (!this.keydown[event.key]) {
        const hasListener = this.listeners[event.key];
        hasListener && this.listeners[event.key]();
        inputEventCallback({ key: event.key, hasListener });
      }

      this.keydown[event.key] = true;
    });

    doc.addEventListener("keyup", (event) => {
      this.keydown[event.key] = false;
    });
  }

  listen(key, listener) {
    this.listeners[key] = listener;
  }
}

export default Input;
