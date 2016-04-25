import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('yes-pod', 'Integration | Component | yes pod', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{yes-pod}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#yes-pod}}
      template block text
    {{/yes-pod}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
