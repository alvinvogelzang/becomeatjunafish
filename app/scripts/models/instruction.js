BecomeTjunaFish.Instruction = DS.Model.extend({
  title: DS.attr('string'),
  assignment: DS.belongsTo('Assignment', {async: true}),
});

BecomeTjunaFish.Instruction.FIXTURES = [
  {
    id: 1,
    title: 'Open Sublime Text.',
    assignment: 1
  },
  {
    id: 2,
    title: 'Maak een index.html bestand aan.',
    assignment: 1
  },
  {
    id: 3,
    title: 'Plaats de elementen HTML, BODY en HEAD in de index.html.',
    assignment: 1
  },
  {
    id: 4,
    title: 'Open Sublime Text.',
    assignment: 2
  },
  {
    id: 5,
    title: 'Maak een index.html bestand aan.',
    assignment: 2
  },
  {
    id: 6,
    title: 'Plaats de elementen HTML, BODY en HEAD in de index.html.',
    assignment: 2
  },
  {
    id: 7,
    title: 'Plaats een DIV in de BODY.',
    assignment: 2
  },
  {
    id: 8,
    title: 'Geef de DIV de classnaam tjuna.',
    assignment: 2
  },
  {
    id: 9,
    title: 'Geef de DIV de achtergrondkleur blauw.',
    assignment: 2
  },
  {
    id: 10,
    title: 'Open Sublime Text.',
    assignment: 3
  },
  {
    id: 11,
    title: 'Maak een stylesheet aan.',
    assignment: 3
  },
  {
    id: 12,
    title: 'Maak een class aan die voldoet aan de Tjuna CSS conventiestandaarden.',
    assignment: 3
  },
  {
    id: 13,
    title: 'Open de Tjuna bugtracker.',
    assignment: 4
  },
  {
    id: 14,
    title: 'Zoek het project Become a Tjuna Fish in de bugtracker.',
    assignment: 4
  },
  {
    id: 15,
    title: 'Zoek in dit project een bug die op jouw naam staat en maak daar een screenshot van.',
    assignment: 4
  }

];

