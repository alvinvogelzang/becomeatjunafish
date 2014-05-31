BecomeTjunaFish.Lesson = DS.Model.extend({
  title: DS.attr('string'),
  progress: DS.attr('number'),
  goal: DS.attr('string'),
  targetGroup: DS.attr('string'),
  prerequisites: DS.attr('string'),
  lesson_level: DS.attr('string'),
  lesson_time_indication: DS.attr('string'),
  lesson_url: DS.attr('string'),
  course: DS.belongsTo('Course', {async: true}),
  topics: DS.hasMany('Topic', {async: true}),
  lesson_authors: DS.hasMany('Authors', {async: true}),
  assignments: DS.hasMany('Assignment', {async: true})
});

BecomeTjunaFish.Lesson.FIXTURES = [
  {
    id: 1,
    title: 'HTML Basis',
    progress: 60,
    goal: 'HTML basis concepten beheersen',
    targetGroup: 'frontend developers in wording',
    prerequisites: 'geen',
    lesson_level: 'Beginner',
    lesson_time_indication: '45 minuten',
    lesson_url: 'html_basis_les',
    course: 1,
    topics: [1,2,3],
    lesson_authors: [1, 2],
    assignments: [1],

  },
  {
    id: 2,
    title: 'CSS Basis',
    progress: 85,
    lesson_url: 'css_basis_les',
    course: 1
  },
  {
    id: 3,
    title: 'Conventies',
    progress: 10,
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
