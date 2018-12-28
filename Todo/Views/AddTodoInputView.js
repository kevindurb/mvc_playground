import { View } from '/lib/View.js';

export class AddTodoInputView extends View {
}

AddTodoInputView.template = `
  <input
    type="text"
    data-outlet="input"
  />
  <button
    data-outlet="addButton"
  >
  Add
  </button>
`;
