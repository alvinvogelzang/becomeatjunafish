BecomeTjunaFish.Router.map(function () {
  // Add your routes here
  this.resource('index', {path: '/'});
  this.resource('course', { path: ':id'});
  this.resource('lesson', {path: 'cursus/:id'});
  this.resource('topic', {path: 'cursus/les/:id'});

});

