import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import faker from 'faker';
import { Line } from 'react-chartjs-2';
import css from '../stylesheets/LineChart.module.css'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);






const LineChart = () => {
  return (
    <div id={css.line}>
      <Line
        data={{
          labels: ['', 'week1', 'week2', 'week3', 'week4'],
          datasets: [
            {
              label: 'guest',
              data: [100, 410, 150, 450, 180],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              tension: 0.5,
              pointRadius: 0
            },
            {
              label: 'user',
              data: [200, 400, 200, 300, 220],
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
              tension: .5,
              pointRadius: 0
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              align:'end',
              
            },
          },
          maintainAspectRatio: false,

          scales: {
            x: {
              grid: {
                display: false
              },

            },
            y: {
              beginAtZero: true,

              grid: {
                display: true
              }
            },
          }
        }}
      />
    </div>

  )
}

export default LineChart