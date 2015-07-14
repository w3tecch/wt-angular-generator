'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');

var Generator = module.exports = function Generator() {
  this.askForModule = true;
  ScriptBase.apply(this, arguments);
  this.generatorName = 'constant';
  this.dirName = 'constants';
};

util.inherits(Generator, ScriptBase);

Generator.prototype.init = function () {
  this.classedName = this.classedName + 'Constant';
  this.readModules();
};

Generator.prototype.prompting = function () {
  this.modulePrompt();
};

Generator.prototype.initComponents = function () {
  this.readComponents(this.module, this.dirName);
};

Generator.prototype.createFiles = function createFiles() {
  this.appTemplate(this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
  this.testTemplate('unit', this.generatorName, path.join(this.module, this.dirName, this.name + '.' + this.generatorName));
  if (!this.env.options.typescript) {
    this.appTemplate('sub.module', path.join(this.module, this.dirName, this.dirName + '.module'));
  }
};

Generator.prototype.end = function createFiles() {
  this.say(this.generatorName);
};
