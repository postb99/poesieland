import { addBubbleChart } from './add-chart.js'
(async function () {
  const data = [
    { x: 14, y: 12, r: 4.4295302013422818791946308725 },
    { x: 20, y: 12, r: 0.402684563758389261744966443 },
    { x: 20, y: 8, r: 2.4161073825503355704697986577 },
    { x: 14, y: 8, r: 4.8322147651006711409395973154 },
    { x: 12, y: 12, r: 17.315436241610738255033557047 },
    { x: 24, y: 6, r: 1.4093959731543624161073825503 },
    { x: 16, y: 8, r: 14.697986577181208053691275168 },
    { x: 16, y: 6, r: 14.697986577181208053691275168 },
    { x: 8, y: 6, r: 4.228187919463087248322147651 },
    { x: 26, y: 8, r: 0.2013422818791946308724832215 },
    { x: 12, y: 8, r: 30 },
    { x: 16, y: 12, r: 5.4362416107382550335570469799 },
    { x: 10, y: 12, r: 2.8187919463087248322147651007 },
    { x: 14, y: 6, r: 1.4093959731543624161073825503 },
    { x: 22, y: 8, r: 0.402684563758389261744966443 },
    { x: 16, y: 4, r: 1.4093959731543624161073825503 },
    { x: 12, y: 6, r: 12.885906040268456375838926174 },
    { x: 4, y: 8, r: 1.0067114093959731543624161074 },
    { x: 20, y: 4, r: 1.6107382550335570469798657718 },
    { x: 28, y: 6, r: 0.2013422818791946308724832215 },
    { x: 28, y: 8, r: 0.402684563758389261744966443 },
    { x: 12, y: 9, r: 0.6040268456375838926174496644 },
    { x: 16, y: 5, r: 2.4161073825503355704697986577 },
    { x: 16, y: 2, r: 0.2013422818791946308724832215 },
    { x: 6, y: 6, r: 0.6040268456375838926174496644 },
    { x: 20, y: 6, r: 4.0268456375838926174496644295 },
    { x: 16, y: 3, r: 0.402684563758389261744966443 },
    { x: 20, y: 5, r: 0.8053691275167785234899328859 },
    { x: 10, y: 6, r: 1.2080536912751677852348993289 },
    { x: 14, y: 3, r: 0.2013422818791946308724832215 },
    { x: 20, y: 7, r: 1.8120805369127516778523489933 },
    { x: 16, y: 10, r: 1.2080536912751677852348993289 },
    { x: 16, y: 7, r: 1.8120805369127516778523489933 },
    { x: 12, y: 10, r: 2.2147651006711409395973154362 },
    { x: 8, y: 10, r: 1.6107382550335570469798657718 },
    { x: 10, y: 10, r: 1.0067114093959731543624161074 },
    { x: 8, y: 8, r: 6.6442953020134228187919463087 },
    { x: 8, y: 12, r: 5.8389261744966442953020134228 },
    { x: 12, y: 7, r: 5.0335570469798657718120805369 },
    { x: 10, y: 8, r: 4.4295302013422818791946308725 },
    { x: 14, y: 7, r: 0.8053691275167785234899328859 },
    { x: 18, y: 8, r: 1.2080536912751677852348993289 },
    { x: 6, y: 12, r: 2.4161073825503355704697986577 },
    { x: 12, y: 4, r: 0.8053691275167785234899328859 },
    { x: 10, y: 7, r: 1.0067114093959731543624161074 },
    { x: 8, y: 7, r: 2.0134228187919463087248322148 },
    { x: 18, y: 6, r: 0.402684563758389261744966443 },
    { x: 6, y: 8, r: 1.4093959731543624161073825503 },
    { x: 6, y: 5, r: 0.2013422818791946308724832215 },
    { x: 14, y: 10, r: 0.6040268456375838926174496644 },
    { x: 16, y: 11, r: 0.402684563758389261744966443 },
    { x: 8, y: 11, r: 0.8053691275167785234899328859 },
    { x: 6, y: 14, r: 0.2013422818791946308724832215 },
    { x: 6, y: 11, r: 0.6040268456375838926174496644 },
    { x: 6, y: 7, r: 0.402684563758389261744966443 },
    { x: 12, y: 5, r: 1.4093959731543624161073825503 },
    { x: 14, y: 11, r: 0.2013422818791946308724832215 },
    { x: 8, y: 9, r: 0.2013422818791946308724832215 },
    { x: 10, y: 11, r: 0.2013422818791946308724832215 },
    { x: 24, y: 8, r: 0.6040268456375838926174496644 },
    { x: 10, y: 5, r: 0.2013422818791946308724832215 },
    { x: 12, y: 11, r: 0.8053691275167785234899328859 },
    { x: 14, y: 4, r: 0.2013422818791946308724832215 },
    { x: 8, y: 5, r: 0.2013422818791946308724832215 },
    { x: 10, y: 14, r: 0.2013422818791946308724832215 },
    { x: 4, y: 12, r: 0.8053691275167785234899328859 },
    { x: 4, y: 11, r: 0.2013422818791946308724832215 },
    { x: 4, y: 7, r: 0.2013422818791946308724832215 },
    { x: 6, y: 9, r: 0.2013422818791946308724832215 },
    { x: 18, y: 12, r: 0.2013422818791946308724832215 },
    { x: 12, y: 14, r: 0.402684563758389261744966443 },
    { x: 4, y: 9, r: 0.2013422818791946308724832215 },
    { x: 6, y: 10, r: 0.2013422818791946308724832215 },
    { x: 8, y: 14, r: 0.2013422818791946308724832215 },
    { x: 4, y: 10, r: 0.2013422818791946308724832215 },
    { x: 16, y: 9, r: 0.2013422818791946308724832215 },
    { x: 20, y: 3, r: 0.2013422818791946308724832215 },
    { x: 28, y: 4, r: 0.2013422818791946308724832215 },
    { x: 24, y: 7, r: 0.2013422818791946308724832215 },
    { x: 20, y: 2, r: 0.2013422818791946308724832215 },
  ];
  addBubbleChart('verseLengthByPoemLength', 'Longueur des vers selon la longueur du poème', data, {scales: {x:{ticks:{stepSize:2}, title: {display:true, text:'Nombre de vers'}},y:{ticks:{stepSize:1}, title: {display:true, text:'Longueur du vers'}}}});
})();
