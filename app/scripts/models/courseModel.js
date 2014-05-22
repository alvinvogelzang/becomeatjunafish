BecomeTjunaFish.Course = DS.Model.extend({
  title: DS.attr('string'),
  img: DS.attr('string'),
  goal: DS.attr('string'),
  targetGroup: DS.attr('string'),
  prerequisites: DS.attr('string'),
  url: DS.attr('string'),
  lessons: DS.hasMany('Lessons', {async: true})
});

BecomeTjunaFish.Course.FIXTURES = [
  {
    id: 1,
    title: 'Tjuna Basis',
    img: 'http://placehold.it/200x200',
    goal: 'kunnen werken met de basis tools en opmaaktalen die Tjuna gebruikt',
    targetGroup: 'frontend developers in wording',
    prerequisites: 'geen',
    url: 'basis_cursus',
    lessons: [1,2, 3, 4]
  },
  {
    id: 2,
    title: 'Tjuna Frontend',
    img: 'http://placehold.it/200x200',
    goal: '',
    targetGroup: '',
    prerequisites: '',
    url: 'frontend_cursus',
    lessons: [2,3]
  },
  {
    id: 3,
    title: 'Tjuna Backend',
    img: 'http://placehold.it/200x200',
    goal: '',
    targetGroup: '',
    prerequisites: '',
    url: 'backend_cursus'
  }
];




