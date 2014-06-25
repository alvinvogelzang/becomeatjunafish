BecomeTjunaFish.Course = DS.Model.extend({
  title: DS.attr('string'),
  img: DS.attr('string'),
  goal: DS.attr('string'),
  targetGroup: DS.attr('string'),
  prerequisites: DS.attr('string'),
  url: DS.attr('string'),
  lessons: DS.hasMany('Lesson', {async: true})
});

BecomeTjunaFish.Course.FIXTURES = [
  {
    id: 1,
    title: 'Tjuna Basis',
    img: 'images/basic_fish.png',
    goal: 'kunnen werken met de basis tools en opmaaktalen die Tjuna gebruikt',
    targetGroup: 'frontend developers in wording',
    prerequisites: 'geen',
    url: 'basis_cursus',
    lessons: [1,2, 3, 4]
  },
  {
    id: 2,
    title: 'Tjuna Frontend',
    img: 'images/frontend_fish.png',
    goal: 'HTML5, CSS3 en jQuery in de praktijk kunnen toepassen',
    targetGroup: 'frontend developers in wording',
    prerequisites: 'basis HTML en CSS kennis',
    url: 'frontend_cursus',
    lessons: [5, 6, 7]
  },
  {
    id: 3,
    title: 'Tjuna Backend',
    img: 'images/backend_fish.png',
    goal: 'Met PHP, MySQL en CodeIgniter een Albacore CMS op kunnen zetten',
    targetGroup: 'backend developers in wording',
    prerequisites: 'basis HTML en CSS kennis',
    url: 'backend_cursus',
    lessons: [8,9,10,11]
  }
];




