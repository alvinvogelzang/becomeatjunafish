BecomeTjunaFish.Assignment = DS.Model.extend({
  title: DS.attr('string'),
  intro: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  lesson: DS.belongsTo('Lesson', {async: true}),
  instructions: DS.hasMany('Instruction', {async: true})
});

BecomeTjunaFish.Assignment.FIXTURES = [
  {
    id: 1,
    title: 'Een basis HTML pagina opzetten',
    intro: "Dit is de inleiding van deze opdracht. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    isCompleted: true,
    lesson: 1,
    instructions: [1, 2, 3]
  },
  {
    id: 2,
    title: 'Een basis HTML en CSS pagina opzetten',
    intro: "Dit is de inleiding van deze opdracht. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    isCompleted: false,
    lesson: 2,
    instructions: [4, 5, 6, 7, 8, 9]
  },
  {
    id: 3,
    title: 'Conventies in CSS gebruiken',
    intro: "Dit is de inleiding van deze opdracht. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    isCompleted: false,
    lesson: 3,
    instructions: [10, 11, 12]
  },
  {
    id: 4,
    title: 'Bugs opzoeken en rapporteren',
    intro: "Dit is de inleiding van deze opdracht. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    isCompleted: true,
    lesson: 4,
    instructions: [13,14,15]
  }
];
