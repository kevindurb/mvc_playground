import { AddTodoInputController } from '/Todo/Controllers/AddTodoInputController.js';
import { AddTodoInputView } from '/Todo/Views/AddTodoInputView.js';
import { TodoCollection } from '/Todo/Models/TodoCollection.js';

export class Todo {
  constructor() {
    this.$container = document.body;
    this.todoCollection = new TodoCollection();
    this.addTodoInputView = new AddTodoInputView(this.$container);
    this.addTodoInputController = new AddTodoInputController(
      this.addTodoInputView,
      this.todoCollection,
    );
  }
}
