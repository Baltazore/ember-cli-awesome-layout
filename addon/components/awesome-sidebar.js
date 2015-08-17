import Ember from 'ember';
import layout from '../templates/components/awesome-sidebar';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['awesome-sidebar']
});
