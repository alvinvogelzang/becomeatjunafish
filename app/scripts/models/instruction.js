BecomeTjunaFish.Instruction = DS.Model.extend({
  title: DS.attr('string'),
  assignment: DS.belongsTo('Assignment', {async: true}),
});

BecomeTjunaFish.Instruction.FIXTURES = [
  {
    id: 1,
    title: 'Open Sublime Text',
    assignment: 1
  },
  {
    id: 2,
    title: 'Maak een index.html bestand aan',
    assignment: 1
  },
  {
    id: 3,
    title: 'Plaats de elementen HTML, BODY en HEAD in de index.html',
    assignment: 1
  }
];

