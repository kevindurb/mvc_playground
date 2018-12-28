export class View {
  constructor($container) {
    const self = this.constructor;
    this.eventListeners = [];
    this.$container = $container;
    this.$el = document.createElement(self.tagName);
    this.$el.innerHTML = self.template;
    this.$container.appendChild(this.$el);

    this.bindOutlets();
  }

  bindOutlets() {
    const els = this.$el.querySelectorAll('[data-outlet]');

    els.forEach((el) => {
      this[el.dataset.outlet] = el;
    });
  }
}

View.tagName = 'div';
View.template = '';
