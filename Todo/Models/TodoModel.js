import { Model } from '/lib/Model.js';

export class TodoModel extends Model {
}

TodoModel.props = {
  name: '',
  done: false,
};
