BecomeTjunaFish.LessonController = Ember.ObjectController.extend({

  // progressCalc: function(){
  //   var topicsTotal = this.get('topics.length'),
  //       topicsCompleted = this.get('topics').filterBy('isCompleted', true).get('length'),
  //       assignmentsTotal = this.get('assignments.length'),
  //       assignmentsCompleted = this.get('assignments').filterBy('isCompleted', true).get('length'),
  //       progressResult =  (((topicsCompleted + assignmentsCompleted) / (topicsTotal + assignmentsTotal)) * 100),
  //       progressResultRoundUp = Math.round(progressResult);
  //       this.set('progress', progressResultRoundUp);
  //   return progressResultRoundUp;
  // },

  allCompleted: function() {
    var self = this;
    console.log(self);
    this.get('topics').then(function(topics){
        self.topicsTotal = topics.get('length');
        self.topicsCompleted = topics.filterBy('isCompleted', true).get('length');
    });
    

    this.get('assignments').then(function(assignments){
      self.assignmentsTotal = assignments.get('length'),
      self.assignmentsCompleted = assignments.filterBy('isCompleted', true).get('length');
      console.log(self.topicsTotal);
      console.log(self.topicsCompleted);
      console.log(self.assignmentsTotal);
      console.log(self.assignmentsCompleted);
      if ((self.topicsTotal == self.topicsCompleted) && (self.assignmentsTotal == self.assignmentsCompleted) && self.topicsTotal != 0) {
        $('.lessonBadge').addClass('completed');
        $('.lessonBadge span').css('display', 'block');
      }
    });

    

  }
  
});

BecomeTjunaFish.LessonTopicController = Ember.ObjectController.extend({
  needs: ['lesson'], 
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      if (value === true){
        $('.popUpReward').addClass('show');
      }
      return value;
    }
  }.property('model.isCompleted'),

  nextPost: function() {
    this.advancePost(1);
  },
  nextTopic: function() {
    var topics = this.get('controllers.lesson.topics'),
        index = topics.indexOf(this.get('model')),
        nextObject = topics.objectAt( index + 1 );
        console.log(nextObject);
        return nextObject;
  }.property('id'),
    
  //    nextTopic: function(delta) {
  //   var model = this.get('model'),
  //       id = parseInt(model.get('id')),
  //       nextObject = id + 1;
  //       console.log(nextObject);
  //       return nextObject;
  // }.property('id')
    

});