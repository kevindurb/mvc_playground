import { Controller } from '/lib/Controller.js';
import { on, debug } from '/lib/helpers.js';
import { TodoItemView } from '/Todo/Views/TodoItemView.js';

const log = debug('TodoListController');

export class TodoListController extends Controller {
  initialize() {
    this.renderItems();

    on(this.collection, 'change', this.renderItems);
  }

  renderItem(item) {
    const view = new TodoItemView(this.view);
    view.label.textContent = item.name;

    this.view.appendView(view);
  }

  renderItems() {
    this.view.clear();
    this.collection.forEach(this.renderItem);
  }
}
