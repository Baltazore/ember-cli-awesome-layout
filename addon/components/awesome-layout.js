import Ember from 'ember';
import layout from '../templates/components/awesome-layout';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['awesome-layout']
});
