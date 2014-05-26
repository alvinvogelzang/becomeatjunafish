BecomeTjunaFish.Router.map(function () {
  // Add your routes here
  this.resource('index', {path: '/'});
  this.resource('course', { path: ':course_id'}, function(){
  	this.resource('lesson', {path: ':lesson_id'}, function(){
  		this.resource('topic', {path: 'topic/:topic_id'});
  		this.resource('assignment', {path: 'opdracht/:assignment_id'});
  	});
  });

});

