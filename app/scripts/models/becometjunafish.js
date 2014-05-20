BecomeTjunaFish.Course = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

BecomeTjunaFish.Course.FIXTURES = [
  {
    id: 1,
    title: 'Tjuna Basis',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Tjuna Frontend',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Tjuna Backend',
    isCompleted: false
  }
];