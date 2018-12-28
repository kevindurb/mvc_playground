export function debug(namespace, type = 'log') {
  return function(...args) {
    console[type](`[${namespace}]`, ...args)
  }
}

const log = debug('helpers');

export function qs(selector, scope) {
  log('.qs', ...arguments);
  return (scope || document).querySelector(selector);
}

export function on(target, type, callback, capture) {
  log('.on', ...arguments);
  return target.addEventListener(type, callback, !!capture);
}
