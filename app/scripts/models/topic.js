BecomeTjunaFish.Topic = DS.Model.extend({
  title: DS.attr('string'),
  progress: DS.attr(),
  course: DS.belongsTo('Lesson', {async: true}),
});

BecomeTjunaFish.Topic.FIXTURES = [
  {
    id: 1,
    title: 'Head element',
    progress: 0,
    course: 1
  },
  {
    id: 2,
    title: 'Div tag',
    progress: 0,
    course: 1
  },
  {
    id: 3,
    title: 'Lists',
    progress: 0,
    course: 1
  }
];
