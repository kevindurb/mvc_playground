import { Controller } from '/lib/Controller.js';
import { TodoItemView } from '/Todo/Views/TodoItemView.js';
import { on, debug } from '/lib/helpers.js';

const log = debug('TodoItemController');

export class TodoItemController extends Controller {
  initialize() {
    on(this.view.removeButton, 'click', this.remove);
    on(this.view.doneButton, 'click', this.done);
    on(this.model, 'change', this.render);

    this.render();
  }

  remove() {
    this.collection.remove(this.model);
  }

  done() {
    this.model.set('done', true);
  }

  render() {
    this.view.label.textContent = this.model.get('name');
    this.view.$el.setAttribute('disabled', this.model.get('done'));
  }
}

TodoItemController.viewClass = TodoItemView;
