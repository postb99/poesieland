import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 3 },
    { label: '3', value: 4 },
    { label: '4', value: 23 },
    { label: '5', value: 33 },
    { label: '6', value: 227 },
    { label: '7', value: 68 },
    { label: '8', value: 350 },
    { label: '9', value: 8 },
    { label: '10', value: 35 },
    { label: '11', value: 16 },
    { label: '12', value: 202 },
    { label: '14', value: 5 },
    { label: '2, 7', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 2', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 8', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 3', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 5, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6', value: 3, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6, 4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'poème en prose', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('poemVerseLengthBar', ['Poèmes'], [data], { scales: { y: { max: 250 } } });
})();