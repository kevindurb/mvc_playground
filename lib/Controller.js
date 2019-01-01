import autoBind from '/lib/autoBind.js';
import { Collection } from '/lib/Collection.js';

export class Controller {
  constructor(view, data) {
    autoBind(this);
    this.view = view;
    if (data instanceof Collection) {
      this.collection = data;
    } else {
      this.model = data;
    }
    this.initialize();
  }

  initialize() {}
}
