BecomeTjunaFish.IndexRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return this.store.find('course');
    }

});

BecomeTjunaFish.CourseRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function (params) {
        return this.store.find('course', params.id);
    }

});

BecomeTjunaFish.LessonRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function (params) {
        return this.store.find('lesson', params.id);
    }

});

BecomeTjunaFish.TopicRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function (params) {
        return this.store.find('topic', params.id);
    }

});









