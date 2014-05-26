BecomeTjunaFish.Topic = DS.Model.extend({
  title: DS.attr('string'),
  progress: DS.attr('number'),
  course: DS.belongsTo('Lesson', {async: true}),
  intro: DS.attr('string'),
  external_link: DS.attr('string'),
  topic_content: DS.attr('string')
});

BecomeTjunaFish.Topic.FIXTURES = [
  {
    id: 1,
    title: 'Head element',
    progress: 0,
    course: 1,
    intro: "Dit is de inleiding over de topic Head Element. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    external_link: 'http://www.codecademy.com'
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
