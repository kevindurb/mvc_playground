import { Controller } from '/lib/Controller.js';
import { TodoListView } from '/Todo/Views/TodoListView.js';
import { on, debug } from '/lib/helpers.js';
import { TodoItemController } from '/Todo/Controllers/TodoItemController.js';

const log = debug('TodoListController');

export class TodoListController extends Controller {
  initialize() {
    this.renderItems();

    on(this.collection, 'change', this.renderItems);
  }

  renderItem(item) {
    const controller = new TodoItemController({
      model: item,
      collection: this.collection,
    });

    this.view.appendView(controller.view);
  }

  renderItems() {
    this.view.clear();
    this.collection.forEach(this.renderItem);
  }
}

TodoListController.viewClass = TodoListView;
