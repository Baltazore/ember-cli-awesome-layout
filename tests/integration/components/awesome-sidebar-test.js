import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('awesome-sidebar', 'Integration | Component | awesome sidebar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{awesome-sidebar}}`);

  assert.equal(this.$().text().trim(), 'hello from sidebar');
});
