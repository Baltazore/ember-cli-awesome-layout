/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-awesome-layout',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/css/ember-cli-awesome-layout.css');
  }
};
