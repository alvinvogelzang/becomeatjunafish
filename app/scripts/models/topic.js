BecomeTjunaFish.Topic = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  course: DS.belongsTo('Lesson', {async: true}),
  intro: DS.attr('string'),
  link_name: DS.attr('string'),
  external_link: DS.attr('string'),
  topic_content: DS.attr('string')
});

BecomeTjunaFish.Topic.FIXTURES = [
  {
    id: 1,
    title: 'Head element',
    isCompleted: true,
    course: 1,
    intro: "Dit is de inleiding over de topic Head Element. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    link_name: 'Codecademy.com',
    external_link: 'http://www.codecademy.com'
  },
  {
    id: 2,
    title: 'Div tag',
    isCompleted: false,
    course: 1
  },
  {
    id: 3,
    title: 'Lists',
    isCompleted: false,
    course: 1
  }
];
