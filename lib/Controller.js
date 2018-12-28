import autoBind from '/lib/autoBind.js';

export class Controller {
  constructor(view, model) {
    autoBind(this);
    this.view = view;
    this.model = model;
    this.initialize();
  }

  initialize() {}
}
