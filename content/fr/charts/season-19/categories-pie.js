import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Femme', value: 1, color: 'rgba(255, 143, 171, 1)' },
    { label: 'Aube', value: 3, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Lune', value: 2, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(113, 0, 0, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 1, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 2, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 8, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 5, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 4, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(183, 239, 197, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Jardin et paysage', value: 3, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Eau douce', value: 2, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Animaux', value: 3, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Printemps', value: 10, color: 'rgba(255, 182, 39, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(255, 149, 5, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(226, 113, 29, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(204, 88, 3, 1)' },
  ];
  addPieChart('season19Pie', [data], { plugins: { title: { display: true, text: 'Dix-neuvième Saison : Destination bonheur - De janvier à avril 2024' } } });
})();