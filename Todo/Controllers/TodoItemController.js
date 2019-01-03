import { Controller } from '/lib/Controller.js';
import { TodoItemView } from '/Todo/Views/TodoItemView.js';
import { on, debug } from '/lib/helpers.js';

const log = debug('TodoItemController');

export class TodoItemController extends Controller {
  initialize() {
    on(this.view.removeButton, 'click', this.remove);
    on(this.view.checkbox, 'change', this.setDone);
    on(this.model, 'change', this.render);

    this.render();
  }

  remove() {
    this.collection.remove(this.model);
  }

  setDone() {
    this.model.set('done', this.view.checkbox.checked);
  }

  render() {
    this.view.label.textContent = this.model.get('name');
    this.view.checkbox.checked = this.model.get('done');
  }
}

TodoItemController.viewClass = TodoItemView;
