import { AddTodoInputController } from '/Todo/Controllers/AddTodoInputController.js';
import { AddTodoInputView } from '/Todo/Views/AddTodoInputView.js';

import { TodoListController } from '/Todo/Controllers/TodoListController.js';
import { TodoListView } from '/Todo/Views/TodoListView.js';

import { TodoCollection } from '/Todo/Models/TodoCollection.js';

export class Todo {
  constructor() {
    this.$container = document.body;
    this.todoCollection = new TodoCollection();

    this.addTodoInputView = new AddTodoInputView();
    this.addTodoInputController = new AddTodoInputController(
      this.addTodoInputView,
      this.todoCollection,
    );

    this.todoListView = new TodoListView();
    this.todoListController = new TodoListController(
      this.todoListView,
      this.todoCollection,
    );

    this.$container.appendChild(this.addTodoInputView.$el);
    this.$container.appendChild(this.todoListView.$el);
  }
}
