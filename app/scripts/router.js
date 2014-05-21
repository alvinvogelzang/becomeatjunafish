BecomeTjunaFish.Router.map(function () {
  // Add your routes here
  this.resource('courses', {path: '/'});
  this.resource('course', { path: ':url'});

});

