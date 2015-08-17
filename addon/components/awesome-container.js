import Ember from 'ember';
import layout from '../templates/components/awesome-container';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['awesome-container'],
  classNameBindings: ['classes'],
  classes: 'fifty'
});
