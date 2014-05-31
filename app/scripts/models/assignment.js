BecomeTjunaFish.Assignment = DS.Model.extend({
  title: DS.attr('string'),
  intro: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  course: DS.belongsTo('Lesson', {async: true}),
  instructions: DS.hasMany('Instruction', {async: true})
});

BecomeTjunaFish.Assignment.FIXTURES = [
  {
    id: 1,
    title: 'Een basis HTML pagina opzetten',
    intro: "Dit is de inleiding van deze opdracht. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    isCompleted: true,
    course: 1,
    instructions: [1, 2, 3]
  },
  {
    id: 2,
    title: 'Opdracht 2',
    isCompleted: false,
    course: 1
  },
  {
    id: 3,
    title: 'Opdracht 3',
    isCompleted: false,
    course: 1
  }
];

