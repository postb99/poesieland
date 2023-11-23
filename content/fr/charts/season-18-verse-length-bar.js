import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '6', value: 12 },
    { label: '7', value: 1 },
    { label: '8', value: 9 },
    { label: '12', value: 3 },
    { label: '6, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season18VerseLengthBar', ['Poèmes'], [data]);
})();