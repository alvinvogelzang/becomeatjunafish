BecomeTjunaFish.Router.map(function () {
  // Add your routes here
  this.resource('index', {path: '/'});
  this.resource('course', { path: ':course_id'}, function(){
  	this.resource('lesson', {path: ':lesson_id'}, function(){
  		this.route('topic', {path: 'topic/:topic_id'});
  		this.route('assignment', {path: 'opdracht/:assignment_id'});
  	});
  });
  this.resource('progress', {path: '/progressie'}, function(){
    this.resource('rewards', {path: 'prestaties'});
  	this.resource('progresscourse', {path: ':course_id'}, function(){
      this.resource('progresslesson', {path: ':lesson_id'}, function(){
        this.route('progresstopic', {path: 'topic/:topic_id'});
        this.route('progressassignment', {path: 'opdracht/:assignment_id'});
      });
    });
  });

});

