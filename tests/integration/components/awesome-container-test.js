import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('awesome-container', 'Integration | Component | awesome container', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{awesome-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#awesome-container}}
      template block text
    {{/awesome-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it assigns default width class', function(assert) {
  assert.expect(1);

  this.render(hbs`{{awesome-container}}`);

  assert.equal(this.$('.awesome-container').attr('class'),
               'ember-view awesome-container fifty');
});

test('it assigns passed width class', function(assert) {
  assert.expect(1);

  this.render(hbs`{{awesome-container classes='twenty'}}`);

  assert.equal(this.$('.awesome-container').attr('class'),
               'ember-view awesome-container twenty');
});
