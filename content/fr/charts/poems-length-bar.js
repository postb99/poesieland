import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '3', value: 1 },
    { label: '4', value: 12 },
    { label: '6', value: 31 },
    { label: '8', value: 107 },
    { label: '10', value: 56 },
    { label: '12', value: 357 },
    { label: '14', value: 48 },
    { label: '16', value: 212 },
    { label: '18', value: 9 },
    { label: '20', value: 61 },
    { label: '22', value: 2 },
    { label: '24', value: 11 },
    { label: '26', value: 1 },
    { label: '28', value: 4 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 16 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('poemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { max: 300 } } });
})();
