BecomeTjunaFish.Router.map(function () {
  // Add your routes here
  this.resource('index', {path: '/'});
  this.resource('course', { path: ':url'});
  this.resource('lesson', { path: ':lesson_url'});

});

