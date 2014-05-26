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

Ember.Route.reopen({
  getParentRoute: function(){
    var route = this;
    var handlerInfos = route.router.router.currentHandlerInfos;
    var parent, current;

    for (var i=0, l=handlerInfos.length; i<l; i++) {
      current = handlerInfos[i].handler;
      if((current.routeName == route.routeName)||(current.routeName.match(/./) && current.routeName.split('.')[1] == route.routeName )){
        return parent.routeName;
      }
      parent = current;
    }
  }
})

BecomeTjunaFish.LessonIndexRoute = Ember.Route.extend({
   model: function () {
      return this.modelFor("lesson");
   },
   renderTemplate: function() {
       this.render('lesson', { into: 'application'})
    }
});
BecomeTjunaFish.TopicRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('topic', params.topic_id);
    },
    renderTemplate: function() {
        this.render('topic', { into: 'application'})
    }

});

BecomeTjunaFish.TopicController = Ember.ObjectController.extend({
  needs: ['lesson'],
  
    actions: {
        nextPost: function(){
        var posts = this.get('model');
        console.log(posts);
        }
    }
   
     
});

BecomeTjunaFish.AssignmentRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('assignment', params.assignment_id);
    },
    renderTemplate: function() {
        this.render('assignment', { into: 'application'})
    }

});









