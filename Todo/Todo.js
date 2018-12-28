import { AddTodoInputController } from '/Todo/Controllers/AddTodoInputController.js';
import { AddTodoInputView } from '/Todo/Views/AddTodoInputView.js';

export class Todo {
  constructor() {
    this.$container = document.body;
    this.addTodoInputView = new AddTodoInputView(this.$container);
    this.addTodoInputController = new AddTodoInputController(
      this.addTodoInputView,
    );
  }
}
