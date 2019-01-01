import { EventEmitter } from '/lib/EventEmitter.js';

export class Collection extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
  }

  push(item) {
    this.items.push(item);
    this.emit('change');
  }

  forEach(fn) {
    this.items.forEach(fn);
  }

  map(fn) {
    return this.items.map(fn);
  }
}
