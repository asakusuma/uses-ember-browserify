/* jshint node: true */
'use strict';

var eb = require('ember-browserify');

module.exports = {
  name: 'uses-ember-browserify',
  included: function() {
    eb.included.apply(this, arguments);
  },
  postprocessTree: function() {
    eb.postprocessTree.apply(this, arguments);
  }
};
