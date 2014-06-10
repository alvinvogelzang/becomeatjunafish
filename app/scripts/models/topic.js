BecomeTjunaFish.Topic = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  lesson: DS.belongsTo('Lesson', {async: true}),
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
    lesson: 1,
    intro: "Dit is de inleiding over de topic Head Element. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    link_name: 'Codecademy.com',
    external_link: 'http://www.codecademy.com/courses/html-one-o-one/1/2'
  },
  {
    id: 2,
    title: 'Div tag',
    isCompleted: true,
    lesson: 1,
    intro: "Dit is de inleiding over de topic Div tag. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    link_name: 'Developer.mozilla.org',
    external_link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div'
  },
  {
    id: 3,
    title: 'Lists',
    isCompleted: false,
    lesson: 1,
    intro: "Dit is de inleiding over de topic Lists. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    link_name: 'Developer.mozilla.org',
    external_link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul'
  },
  {
    id: 4,
    title: 'CSS Selectors',
    isCompleted: false,
    lesson: 2,
    intro: "Dit is de inleiding over de topic CSS Selectors. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    link_name: 'Sceneone.nl',
    external_link: 'http://www.sceneone.nl/algemeen/notatie.php'
  },
  {
    id: 5,
    title: 'CSS Positions',
    isCompleted: false,
    lesson: 2,
    intro: "Dit is de inleiding over de topic CSS Fonts. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    link_name: 'Learnlayout.com',
    external_link: 'http://nl.learnlayout.com/position.html'
  },
  ,
  {
    id: 6,
    title: 'Margins en paddings',
    isCompleted: false,
    lesson: 2,
    intro: "Dit is de inleiding over de topic margins en paddings. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    link_name: 'Sceneone.nl',
    external_link: 'http://www.sceneone.nl/positionering/margin.php'
  }
];