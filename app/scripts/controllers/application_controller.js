BecomeTjunaFish.LessonTopicController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted'),

  actions: {
     nextPost: function(){
      var topic = this.get('controllers');
      console.log(topic);
    }
  }
  
});