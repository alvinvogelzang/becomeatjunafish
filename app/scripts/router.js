BecomeTjunaFish.Router.map(function () {
  // Add your routes here
  this.resource('courses', { path: '/'});
  this.resource('basicCourse', { path: 'basis_cursus'});
  this.resource('frontendCourse', { path: 'frontend_cursus'});
  this.resource('backendCourse', { path: 'backend_cursus'});


});

