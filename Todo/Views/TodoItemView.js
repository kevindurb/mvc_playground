import { View } from '/lib/View.js';

export class TodoItemView extends View {
}

TodoItemView.template = `
  <label data-outlet="label"></label>
  <button data-outlet="removeButton">remove</button>
  <button data-outlet="doneButton">done</button>
`;
