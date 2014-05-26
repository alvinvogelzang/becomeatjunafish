BecomeTjunaFish.Assignment = DS.Model.extend({
  title: DS.attr('string'),
  progress: DS.attr(),
  course: DS.belongsTo('Lesson', {async: true}),
});

BecomeTjunaFish.Assignment.FIXTURES = [
  {
    id: 1,
    title: 'Opdracht 1',
    progress: 0,
    course: 1
  },
  {
    id: 2,
    title: 'Opdracht 2',
    progress: 0,
    course: 1
  },
  {
    id: 3,
    title: 'Opdracht 3',
    progress: 0,
    course: 1
  }
];
