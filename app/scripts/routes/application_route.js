BecomeTjunaFish.IndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('course');
    }

});

BecomeTjunaFish.CourseRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('course', params.course_id);
    }

});

BecomeTjunaFish.CourseIndexRoute = Ember.Route.extend({
   model: function () {
      return this.modelFor('course');
   },
   renderTemplate: function() {
       this.render('course', { into: 'application'})
    }

});

BecomeTjunaFish.LessonRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('lesson', params.lesson_id);
    }

});

BecomeTjunaFish.LessonIndexRoute = Ember.Route.extend({
   model: function () {
      return this.modelFor("lesson");
   },
   renderTemplate: function() {
       this.render('lesson', { into: 'application'})
    }
});

BecomeTjunaFish.LessonTopicRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('topic', params.topic_id);
    },
    renderTemplate: function() {
        this.render('topic', { into: 'application'})
    }

});


BecomeTjunaFish.LessonAssignmentRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('assignment', params.assignment_id);
    },
    renderTemplate: function() {
        this.render('assignment', { into: 'application'})
    }

});

BecomeTjunaFish.ProgressRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('course', params.course_id);
    }
    ,
    redirect: function() {
      var firstCourse = this.modelFor('progress').get('firstObject');
      this.transitionTo('progresscourse', firstCourse);
      console.log(firstCourse);
    }

});









