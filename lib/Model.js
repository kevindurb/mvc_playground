import { EventEmitter } from '/lib/EventEmitter.js';

export class Model extends EventEmitter {
  constructor(values) {
    super();
    const self = this.constructor;
    this.values = Object.assign({}, self.props, values);
  }

  get(prop) {
    return this.values[prop];
  }

  set(prop, value) {
    this.values[prop] = value;
    this.emit('change');
  }
}

Model.props = {};
