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
      log('add', text);
    }
  }
}
