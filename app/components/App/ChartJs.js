import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Bar } from 'chart.js'

class ChartJs extends Component {
  componentDidMount() {
    let canvas = ReactDOM.findDOMNode(this.refs.perfChart);

    const barChartData = {
      labels: ['Run A', 'Run B', 'Run C', 'Run D', 'Run E', 'Run F', 'Run G', 'Run H', 'Run I', 'Run J'],
      datasets: [{
          label: 'Positive',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          hoverBackgroundColor: 'rgba(0, 0, 0, 0.4)',
          data: [60, 70, 80, 75, 70, 65, 55, 60, 70, 80]
      }, {
          label: 'Negative',
          backgroundColor: 'rgba(200, 20, 20, 0.5)',
          hoverBackgroundColor: 'rgba(200, 20, 20, 0.6)',
          data: [-40, -30, -20, -25, -30, -35, -45, -40, -30, -20]
      }]
    };

    const optionsSet = {
      responsive: false,
      tooltips: {
        mode: 'label',
        callbacks: {
          label: (tooltipItem) => (`${tooltipItem.yLabel}%`)
        }
      },
      tooltipTemplate: "<%= value %>%",
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          stacked: true,
          display: false
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            max: 100,
            min: -100,
            stepSize: 50,
            callback: (value) => (`${value}%`)
          }
        }]
      }
    };
    console.log(canvas);
    const myChart = new Chart(canvas, {
      type: 'bar',
      data: barChartData,
      options: optionsSet,
    })
  }

  render() {
    return (
      <div>
        <h2>ChartJs</h2>
        <canvas ref="perfChart" width="800" height="400"></canvas>
      </div>
    );
  }
}

export default ChartJs
