BecomeTjunaFish.Lesson = DS.Model.extend({
  title: DS.attr('string'),
  progress: DS.attr(),
  goal: DS.attr('string'),
  targetGroup: DS.attr('string'),
  prerequisites: DS.attr('string'),
  lesson_url: DS.attr('string'),
  course: DS.belongsTo('Course', {async: true}),
  topics: DS.hasMany('Topic', {async: true}),
  assignments: DS.hasMany('Assignment', {async: true})
});

BecomeTjunaFish.Lesson.FIXTURES = [
  {
    id: 1,
    title: 'HTML Basis',
    progress: 0,
    goal: 'HTML basis concepten beheersen',
    targetGroup: 'frontend developers in wording',
    prerequisites: 'geen',
    lesson_url: 'html_basis_les',
    course: 1,
    topics: [1,2, 3, 4],
    assignments: [1]
  },
  {
    id: 2,
    title: 'CSS Basis',
    progress: 0,
    lesson_url: 'css_basis_les',
    course: 1
  },
  {
    id: 3,
    title: 'Conventies',
    progress: 0,
    lesson_url: 'css_basis_les',
    course: 1
  },
  {
    id: 4,
    title: 'Bugtracker',
    progress: 0,
    lesson_url: 'css_basis_les',
    course: 1
  }
];
