BecomeTjunaFish.Courses = DS.Model.extend({
  title: DS.attr('string'),
  img: DS.attr('string'),
  link: DS.attr('string')
});

BecomeTjunaFish.Courses.FIXTURES = [
  {
    id: 1,
    title: 'Tjuna Basis',
    img: 'http://placehold.it/200x200',
    link: '#/basis_cursus'
  },
  {
    id: 2,
    title: 'Tjuna Frontend',
    img: 'http://placehold.it/200x200',
    link: '#/frontend_cursus'
  },
  {
    id: 3,
    title: 'Tjuna Backend',
    img: 'http://placehold.it/200x200',
    link: '#/backend_cursus'
  }
];
