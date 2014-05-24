BecomeTjunaFish.Router.map(function () {
  // Add your routes here
  this.resource('index', {path: '/'});
  this.resource('course', { path: ':course_id'}, function(){
  	this.resource('lesson', {path: ':lesson_id'}, function(){
  		this.resource('topic', {path: ':topic_id'});
  	});
  });

});

