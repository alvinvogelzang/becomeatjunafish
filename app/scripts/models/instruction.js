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
  },
  {
    id: 4,
    title: 'Open Sublime Text',
    assignment: 2
  },
  {
    id: 5,
    title: 'Maak een index.html bestand aan',
    assignment: 2
  },
  {
    id: 6,
    title: 'Plaats de elementen HTML, BODY en HEAD in de index.html',
    assignment: 2
  },
  {
    id: 7,
    title: 'Plaats een DIV in de BODY',
    assignment: 2
  },
  {
    id: 8,
    title: 'Geef de DIV de classnaam tjuna',
    assignment: 2
  },
  {
    id: 9,
    title: 'Geef de DIV de achtergrondkleur blauw',
    assignment: 3
  }

];

