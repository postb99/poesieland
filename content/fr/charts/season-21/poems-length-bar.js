import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 1 },
]
  ];
    addBarChart('season21PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();