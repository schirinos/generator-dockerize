'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    this.sourceRoot(this.sourceRoot() +'/../');
  },

  writing: {
    docker: function () {
      this.fs.copy(
        this.templatePath('Dockerfile'),
        this.destinationPath('Dockerfile')
      );
    },

    app: function () {
      this.fs.copy(
        this.templatePath('entrypoint.sh'),
        this.destinationPath('scripts/entrypoint.sh')
      );
    }
  }
});
