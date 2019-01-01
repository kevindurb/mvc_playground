import { EventEmitter } from '/lib/EventEmitter.js';

export class Model extends EventEmitter {
  constructor() {
    super();
    const self = this.constructor;
    this.values = self.props;

    return new Proxy(this, this);
  }

  get(target, prop, receiver) {
    return Reflect.get(target.values, prop);
  }

  set(target, prop, value) {
    return Reflect.set(target.values, prop, value);
  }
}

Model.props = {};
