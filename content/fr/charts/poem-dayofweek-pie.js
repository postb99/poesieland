import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 143, color: 'rgba(72, 149, 239, 0.30000000000000004)' },
    { label: 'Mardi', value: 132, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 140, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 95, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: 'Vendredi', value: 123, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 146, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 156, color: 'rgba(72, 149, 239, 0.9000000000000001)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], 'Par jour de la semaine');
})();
