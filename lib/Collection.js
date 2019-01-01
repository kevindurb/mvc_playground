import { EventEmitter } from '/lib/EventEmitter.js';

export class Collection extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
  }

  push(item) {
    this.emit('change');
    this.items.push(item);
  }

  forEach(fn) {
    this.items.forEach(fn);
  }

  map(fn) {
    return this.items.map(fn);
  }
}
