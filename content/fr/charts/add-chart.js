import Chart from '/js/chartjs/chart.js';

const addChart = (chartId, chartType, chartLabels, datas, options) => {

    var datasets = [
        {
            label: chartLabels[0],
            data: datas[0].map(row => row.value),
            backgroundColor: datas[0].map(row => row.color ?? options?.backgroundColor ?? 'rgba(76, 201, 240, 1)'),
        }
    ];

    if (datas.length > 1) {
        datasets[0].stack = 'stack 0'
        datasets.push({
            label: chartLabels[1],
            data: datas[1].map(row => row.value),
            backgroundColor: datas[1].map(row => row.color ?? 'rgba(72, 149, 239, 1)'),
            stack: 'stack 0'
        })
    };

    if (datas.length == 3) {
        datasets.push({
            label: chartLabels[2],
            data: datas[2].map(row => row.value),
            backgroundColor: datas[2].map(row => row.color ?? 'rgba(67, 97, 238, 1)'),
            stack: 'stack 0'
        })
    };

    new Chart(
        document.getElementById(chartId),
        {
            type: chartType,
            data: {
                labels: datas[0].map(row => row.label),
                datasets: datasets,
            },
            options: Object.assign({ responsive: true }, options)
        }
    );
};

const addPieChart = (chartId, datas, title) => { addChart(chartId, 'pie', [''], datas, { plugins: { title: { display: true, text: title } } }); };

const addBarChart = (chartId, chartLabels, datas, options) => { addChart(chartId, 'bar', chartLabels, datas, options); };

const addRadarChart = (chartId, chartLabels, datas, border, background) => {
    addChart(chartId, 'radar', chartLabels, datas, {
        backgroundColor: !!background ? background : 'rgba(76, 201, 240)',
        borderColor: !!border ? border : 'rgba(0, 0, 0, 0.1)',
        pointBackgroundColor: !!border ? border : 'rgba(76, 201, 240)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        elements: {
            line: {
                borderWidth: 1
            }
        },
        scales: {
            r: {
                ticks: {
                    stepSize: 1
                }
            }
        }
    });
}

export { addChart, addPieChart, addBarChart, addRadarChart };
