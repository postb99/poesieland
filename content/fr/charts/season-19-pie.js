import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Neige', value: 1, color: 'rgba(183, 239, 197, 1)' },
  ];
  addPieChart('season19Pie', [data], 'Dix-neuvième Saison : Destination bonheur - De janvier 2024 à ce jour');
})();
