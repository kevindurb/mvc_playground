import { TodoModel } from '/Todo/Models/TodoModel.js';
import { AddTodoInputView } from '/Todo/Views/AddTodoInputView.js';
import { Controller } from '/lib/Controller.js';
import { on, debug, keyCodes } from '/lib/helpers.js';

const log = debug('AddTodoInputController');

export class AddTodoInputController extends Controller {
  initialize() {
    on(this.view.addButton, 'click', this.onAddClick);
    on(this.view.input, 'keypress', this.onEnterPress);
  }

  getInputText() {
    return this.view.input.value.trim();
  }

  clearInput() {
    this.view.input.value = '';
  }

  addNewTodo() {
    const text = this.getInputText();

    if (text) {
      const todo = new TodoModel({ name: text });
      this.collection.push(todo);
      this.clearInput();
      log('add', text);
    }
  }

  onEnterPress(event) {
    if (event.keyCode === keyCodes.ENTER) {
      this.addNewTodo();
    }
  }

  onAddClick(event) {
    this.addNewTodo();
  }
}

AddTodoInputController.viewClass = AddTodoInputView;
