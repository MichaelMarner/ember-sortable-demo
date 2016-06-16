import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$('.sortable').sortable();
    Ember.$('.sortable').disableSelection();
  }
});
