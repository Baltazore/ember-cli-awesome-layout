import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('awesome-layout', 'Integration | Component | awesome layout', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(5);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{awesome-layout}}`);

  assert.equal(this.$('.awesome-header').text().trim(), 'Hello from header');
  assert.equal(this.$('.awesome-sidebar').text().trim(), 'hello from sidebar');

  // Template block usage:
  this.render(hbs`
    {{#awesome-layout}}
      <p>template block text</p>
    {{/awesome-layout}}
  `);

  assert.equal(this.$('.awesome-header').text().trim(), 'Hello from header');
  assert.equal(this.$('.awesome-sidebar').text().trim(), 'hello from sidebar');
  assert.equal(this.$('p').text().trim(), 'template block text');
});
