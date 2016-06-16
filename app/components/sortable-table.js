import Ember from 'ember';

export default Ember.Component.extend({
  updateSortedOrder(indices) {
    this.beginPropertyChanges();
    let tracks = this.get('model').forEach((note) => {
      var index = indices[note.get('id')];
      if (note.get('index') !== index) {
        note.set('index',index);
        note.save();
      }
    });
    this.endPropertyChanges();
  },

  didInsertElement: function() {

    let component = this;
    Ember.$('.sortable').sortable({
      update: function(e, ui) {
        let indices = {};

        $(this).children().each( (index, item) => {
          indices[$(item).data('id')] = index+1;
        });

        component.updateSortedOrder(indices);
      }
    });

    Ember.$('.sortable').disableSelection();
  }
});
