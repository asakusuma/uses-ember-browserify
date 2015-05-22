import Ember from 'ember';
import _ from "npm:underscore";

export default {
  name: 'ember-browserify-test',
  initialize( container, application ) {
    var a = {
      one: 'one',
      two: 'two',
      three: 'three'
    };

    console.log(_.keys(a));

    _.emberBrowserify = 'test';
  }
};