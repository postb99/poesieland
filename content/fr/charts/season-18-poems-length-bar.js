import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 9 },
    { label: '14', value: 0 },
    { label: '16', value: 11 },
    { label: '20', value: 8 },
    { label: '24', value: 3 },
    { label: '28', value: 1 },
],
[
    { label: '', value: 0 },
    { label: 'Sonnets', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season18PoemLengthBar', ['Poèmes','Sonnets'], data);
})();
