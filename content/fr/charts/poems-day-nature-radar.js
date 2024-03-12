import { addRadarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Janvier', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Février', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 4 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Mars', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Printemps', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Avril', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: 'Mai', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: 'Juin', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: 'Eté', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: 'Juillet', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Août', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: 'Septembre', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: 'Automne', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: 'Octobre', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Novembre', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: 'Décembre', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: 'Hiver', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
  ];
  addRadarChart('poemDay-natureRadar', ['Poèmes selon le jour de l\'année'], [data], 'rgba(74, 214, 109, 1)', 'rgba(74, 214, 109, 0.5)');
})();
