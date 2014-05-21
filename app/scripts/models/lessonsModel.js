BecomeTjunaFish.Lesson = DS.Model.extend({
  title: DS.attr('string'),
  progress: DS.attr(),
  url: DS.attr('string'),
  course_id: DS.attr(),
  courses: DS.belongsTo('BecomeTjunaFish.Courses')
});

BecomeTjunaFish.Lesson.FIXTURES = [
  {
    id: 1,
    title: 'HTML Basis',
    progress: 0,
    url: 'html_basis_les',
    course_id: 1
  },
  {
    id: 2,
    title: 'CSS Basis',
    progress: 0,
    url: 'css_basis_les',
    course_id: 1
  },
  {
    id: 3,
    title: 'Conventies',
    progress: 0,
    url: 'conventies_les',
    course_id: 1
  }
];
