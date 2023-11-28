import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '7', value: 1 },
    { label: '8', value: 3 },
    { label: '12', value: 3 },
    { label: 'Pas de données pour l\'instant', value: 43, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season9VerseLengthBar', ['Poèmes'], [data]);
})();
