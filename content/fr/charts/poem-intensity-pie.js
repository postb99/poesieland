import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '1 poème', value: 572, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '2 poèmes', value: 99, color: 'rgba(72, 149, 239, 0.6)' },
    { label: '3 poèmes', value: 18, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4 poèmes', value: 4, color: 'rgba(72, 149, 239, 0.8)' },
    { label: '5 poèmes', value: 3, color: 'rgba(72, 149, 239, 0.9)' },
  ];
  addPieChart('poemIntensityPie', [data], 'Les jours de création sont-ils intenses ?');
})();