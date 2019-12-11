const compiler = require('./compiler');
const template = require('../wepy/template');
const scriptInjection = require('./scriptInjection');

exports = module.exports = class WepyMaker {
  constructor(options) {
    this.options = options;
  }
  install(compilation) {
    if (!this._installed) {
      compiler.call(compilation);
      template.call(compilation);
      scriptInjection.call(compilation);
      this._installed = true;
    }
  }
};
