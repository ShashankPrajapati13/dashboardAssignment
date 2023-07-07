import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import css from '../stylesheets/PieChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);



const PieChart = () => {
  return (
    <div id={css.pie}>
        <Pie 
            data = {{
                labels: ['Basic Tees 55%', 'Custome Short Plants 31%', 'Super Hodiees 14%'],
                datasets: [
                  {
                    data: [55,31,14],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                    
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'right',
                  },
                },
                maintainAspectRatio: false,
              }}
        />
    </div>
  )
}

export default PieChart

