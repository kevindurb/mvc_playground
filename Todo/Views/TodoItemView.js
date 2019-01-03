import { View } from '/lib/View.js';

export class TodoItemView extends View {
}

TodoItemView.template = `
  <input type="checkbox" data-outlet="checkbox" />
  <label data-outlet="label"></label>
  <button data-outlet="removeButton">remove</button>
`;
