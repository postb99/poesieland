import { addBubbleChart } from './add-chart.js'
(async function () {
  const data = [
    { x: 12, y: 14, r: 8.741721854304635761589403974 },
    { x: 12, y: 20, r: 0.7947019867549668874172185430 },
    { x: 8, y: 20, r: 4.7682119205298013245033112582 },
    { x: 8, y: 14, r: 9.536423841059602649006622517 },
    { x: 12, y: 12, r: 17.483443708609271523178807947 },
    { x: 6, y: 24, r: 3.1788079470198675496688741722 },
    { x: 8, y: 16, r: 29.801324503311258278145695364 },
    { x: 6, y: 16, r: 29.801324503311258278145695364 },
    { x: 6, y: 8, r: 8.344370860927152317880794702 },
    { x: 8, y: 26, r: 0.3973509933774834437086092716 },
    { x: 8, y: 12, r: 30 },
    { x: 12, y: 16, r: 10.728476821192052980132450331 },
    { x: 12, y: 10, r: 5.5629139072847682119205298014 },
    { x: 6, y: 14, r: 2.7814569536423841059602649006 },
    { x: 8, y: 22, r: 0.7947019867549668874172185430 },
    { x: 4, y: 16, r: 3.1788079470198675496688741722 },
    { x: 6, y: 12, r: 26.22516556291390728476821192 },
    { x: 8, y: 4, r: 1.9867549668874172185430463576 },
    { x: 4, y: 20, r: 3.1788079470198675496688741722 },
    { x: 6, y: 28, r: 0.3973509933774834437086092716 },
    { x: 8, y: 28, r: 0.7947019867549668874172185430 },
    { x: 9, y: 12, r: 1.1920529801324503311258278146 },
    { x: 5, y: 16, r: 4.7682119205298013245033112582 },
    { x: 2, y: 16, r: 0.3973509933774834437086092716 },
    { x: 6, y: 6, r: 1.1920529801324503311258278146 },
    { x: 6, y: 20, r: 7.947019867549668874172185430 },
    { x: 3, y: 16, r: 0.7947019867549668874172185430 },
    { x: 5, y: 20, r: 1.589403973509933774834437086 },
    { x: 6, y: 10, r: 2.3841059602649006622516556292 },
    { x: 3, y: 14, r: 0.3973509933774834437086092716 },
    { x: 7, y: 20, r: 3.5761589403973509933774834438 },
    { x: 10, y: 16, r: 2.3841059602649006622516556292 },
    { x: 7, y: 16, r: 3.5761589403973509933774834438 },
    { x: 10, y: 12, r: 4.3708609271523178807947019868 },
    { x: 10, y: 8, r: 3.1788079470198675496688741722 },
    { x: 10, y: 10, r: 1.9867549668874172185430463576 },
    { x: 8, y: 8, r: 13.112582781456953642384105960 },
    { x: 12, y: 8, r: 11.523178807947019867549668874 },
    { x: 7, y: 12, r: 10.331125827814569536423841060 },
    { x: 8, y: 10, r: 9.139072847682119205298013245 },
    { x: 7, y: 14, r: 1.589403973509933774834437086 },
    { x: 8, y: 18, r: 2.3841059602649006622516556292 },
    { x: 12, y: 6, r: 4.7682119205298013245033112582 },
    { x: 4, y: 12, r: 1.589403973509933774834437086 },
    { x: 7, y: 10, r: 1.9867549668874172185430463576 },
    { x: 7, y: 8, r: 3.9735099337748344370860927152 },
    { x: 6, y: 18, r: 0.7947019867549668874172185430 },
    { x: 8, y: 6, r: 2.7814569536423841059602649006 },
    { x: 5, y: 6, r: 0.3973509933774834437086092716 },
    { x: 10, y: 14, r: 1.1920529801324503311258278146 },
    { x: 11, y: 16, r: 0.7947019867549668874172185430 },
    { x: 11, y: 8, r: 1.589403973509933774834437086 },
    { x: 14, y: 6, r: 0.3973509933774834437086092716 },
    { x: 11, y: 6, r: 1.1920529801324503311258278146 },
    { x: 7, y: 6, r: 0.7947019867549668874172185430 },
    { x: 5, y: 12, r: 2.7814569536423841059602649006 },
    { x: 11, y: 14, r: 0.3973509933774834437086092716 },
    { x: 9, y: 8, r: 0.3973509933774834437086092716 },
    { x: 11, y: 10, r: 0.3973509933774834437086092716 },
    { x: 8, y: 24, r: 1.1920529801324503311258278146 },
    { x: 5, y: 10, r: 0.3973509933774834437086092716 },
    { x: 11, y: 12, r: 1.589403973509933774834437086 },
    { x: 4, y: 14, r: 0.3973509933774834437086092716 },
    { x: 5, y: 8, r: 0.3973509933774834437086092716 },
    { x: 14, y: 10, r: 0.3973509933774834437086092716 },
    { x: 12, y: 4, r: 1.589403973509933774834437086 },
    { x: 11, y: 4, r: 0.3973509933774834437086092716 },
    { x: 7, y: 4, r: 0.3973509933774834437086092716 },
    { x: 9, y: 6, r: 0.3973509933774834437086092716 },
    { x: 12, y: 18, r: 0.3973509933774834437086092716 },
    { x: 14, y: 12, r: 0.7947019867549668874172185430 },
    { x: 9, y: 4, r: 0.3973509933774834437086092716 },
    { x: 10, y: 6, r: 0.3973509933774834437086092716 },
    { x: 14, y: 8, r: 0.3973509933774834437086092716 },
    { x: 10, y: 4, r: 0.3973509933774834437086092716 },
    { x: 9, y: 16, r: 0.3973509933774834437086092716 },
    { x: 3, y: 20, r: 0.3973509933774834437086092716 },
    { x: 4, y: 28, r: 0.3973509933774834437086092716 },
    { x: 7, y: 24, r: 0.3973509933774834437086092716 },
    { x: 2, y: 20, r: 0.3973509933774834437086092716 },
  ];
  const borderColorsArray = ['rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(72, 149, 239, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)','rgba(76, 201, 240, 1)',];
  addBubbleChart('poemLengthByVerseLength', 'Longueur du poème selon la longueur du vers (en bleu plus foncé occurrence deux fois plus forte)', data, borderColorsArray, {scales: {x:{ticks:{stepSize:1}, title: {display:true, text:'Longueur du vers'}},y:{ticks:{stepSize:2}, title: {display:true, text:'Nombre de vers'}}}});
})();
