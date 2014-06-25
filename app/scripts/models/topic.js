BecomeTjunaFish.Topic = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  lesson: DS.belongsTo('Lesson', {async: true}),
  intro: DS.attr('string'),
  link_name: DS.attr('string'),
  external_link: DS.attr('string'),
  topic_content: DS.attr('string'),
  article: DS.attr('string')
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
    isCompleted: true,
    lesson: 1,
    intro: "Dit is de inleiding over de topic Lists. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
  {
    id: 6,
    title: 'Margins en paddings',
    isCompleted: true,
    lesson: 2,
    intro: "Dit is de inleiding over de topic margins en paddings. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    link_name: 'Sceneone.nl',
    external_link: 'http://www.sceneone.nl/positionering/margin.php'
  },
  {
    id: 7,
    title: 'HTML Conventies',
    isCompleted: false,
    lesson: 3,
    intro: "Dit is de inleiding over HTML conventies. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    article: "Praesent quam elit, placerat porttitor velit vel, congue consequat mi. Suspendisse imperdiet laoreet arcu, sed porttitor sem aliquam eu. Curabitur mattis lorem nec ipsum feugiat fermentum. Etiam vestibulum, velit in consectetur tristique, eros enim aliquam augue, at pellentesque nulla mauris ut lorem. Morbi ultrices orci sed arcu ornare pharetra. Integer hendrerit mi vel orci feugiat rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Cras vel justo sit amet odio varius tempor volutpat sed metus. Nulla vitae vestibulum justo, vitae faucibus mauris. Phasellus rhoncus turpis egestas felis lacinia, sit amet pellentesque metus semper. Aenean a imperdiet neque. Praesent feugiat mauris volutpat, porttitor lectus sed, vulputate metus. Mauris sed lobortis orci. Donec pharetra felis ut tellus vestibulum condimentum. Quisque egestas tortor at dui pharetra, quis dapibus ante sodales. Maecenas pretium condimentum convallis. Cras a pulvinar sapien. Phasellus egestas lectus risus, et fringilla urna dapibus eu. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
  },
  {
    id: 8,
    title: 'CSS Conventies',
    isCompleted: false,
    lesson: 3,
    intro: "Dit is de inleiding over CSS conventies. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  ,
  {
    id: 9,
    title: 'Wat is de bugtracker',
    isCompleted: true,
    lesson: 4,
    intro: "Dit is de inleiding over Wat is de bugtracker. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    article: "Praesent quam elit, placerat porttitor velit vel, congue consequat mi. Suspendisse imperdiet laoreet arcu, sed porttitor sem aliquam eu. Curabitur mattis lorem nec ipsum feugiat fermentum. Etiam vestibulum, velit in consectetur tristique, eros enim aliquam augue, at pellentesque nulla mauris ut lorem. Morbi ultrices orci sed arcu ornare pharetra. Integer hendrerit mi vel orci feugiat rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Cras vel justo sit amet odio varius tempor volutpat sed metus. Nulla vitae vestibulum justo, vitae faucibus mauris. Phasellus rhoncus turpis egestas felis lacinia, sit amet pellentesque metus semper. Aenean a imperdiet neque. Praesent feugiat mauris volutpat, porttitor lectus sed, vulputate metus. Mauris sed lobortis orci. Donec pharetra felis ut tellus vestibulum condimentum. Quisque egestas tortor at dui pharetra, quis dapibus ante sodales. Maecenas pretium condimentum convallis. Cras a pulvinar sapien. Phasellus egestas lectus risus, et fringilla urna dapibus eu. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
  },
  {
    id: 10,
    title: 'Bugs opzoeken in bugtracker',
    isCompleted: true,
    lesson: 4,
    intro: "Dit is de inleiding over Bugs opzoeken in bugtracker. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 11,
    title: 'Bugs rapporteren in bugtracker',
    isCompleted: true,
    lesson: 4,
    intro: "Dit is de inleiding over Bugs rapporteren in bugtracker. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
];