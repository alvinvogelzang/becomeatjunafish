BecomeTjunaFish.Lessons = DS.Model.extend({
  title: DS.attr('string'),
  progress: DS.attr(),
  lesson_url: DS.attr('string'),
  course: DS.belongsTo('Course', {async: true})
});

BecomeTjunaFish.Lessons.FIXTURES = [
  {
    id: 1,
    title: 'HTML Basis',
    progress: 0,
    lesson_url: 'html_basis_les',
    course: 1
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
