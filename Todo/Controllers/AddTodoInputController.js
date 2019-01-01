import { TodoModel } from '/Todo/Models/TodoModel.js';
import { Controller } from '/lib/Controller.js';
import { on, debug } from '/lib/helpers.js';

const log = debug('AddTodoInputController');

export class AddTodoInputController extends Controller {
  initialize() {
    on(this.view.addButton, 'click', this.onAddClick);
  }

  getInputText() {
    return this.view.input.value.trim();
  }

  onAddClick(event) {
    const text = this.getInputText();

    if (text) {
      const todo = new TodoModel();
      todo.name = text;
      this.collection.push(todo);
      log('add', text);
    }
  }
}
