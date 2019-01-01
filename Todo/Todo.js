import { AddTodoInputController } from '/Todo/Controllers/AddTodoInputController.js';
import { AddTodoInputView } from '/Todo/Views/AddTodoInputView.js';

import { TodoListController } from '/Todo/Controllers/TodoListController.js';
import { TodoListView } from '/Todo/Views/TodoListView.js';

import { TodoCollection } from '/Todo/Models/TodoCollection.js';

export class Todo {
  constructor() {
    this.$container = document.body;
    this.todoCollection = new TodoCollection();

    this.addTodoInputController = new AddTodoInputController({
      collection: this.todoCollection,
    });

    this.todoListController = new TodoListController({
      collection: this.todoCollection,
    });

    this.$container.appendChild(this.addTodoInputController.view.$el);
    this.$container.appendChild(this.todoListController.view.$el);
  }
}
