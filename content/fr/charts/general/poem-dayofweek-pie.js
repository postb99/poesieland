import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 161, color: 'rgba(72, 149, 239, 0.30000000000000004)' },
    { label: 'Mardi', value: 149, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 159, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 114, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: 'Vendredi', value: 137, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 162, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 178, color: 'rgba(72, 149, 239, 0.9000000000000001)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
