BecomeTjunaFish.Authors = DS.Model.extend({
  name: DS.attr('string'),
  lesson: DS.belongsTo('Lesson', {async: true})
});

BecomeTjunaFish.Authors.FIXTURES = [
  {
    id: 1,
    name: 'Vincent Croes',
    lesson: 1

  },
  {
    id: 2,
    name: 'Erik de Groot',
    lesson: 1
  }
];