import Ember from 'ember';
import layout from '../templates/components/awesome-header';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['awesome-header']
});
