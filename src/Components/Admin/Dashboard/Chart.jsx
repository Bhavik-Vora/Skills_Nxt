import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const labels = getLastYearMonths();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,  // Boolean value, not a string
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,  // Corrected from 'lables' to 'labels'
    datasets: [{
      label: 'Views',  // Corrected from 'lable' to 'label'
      data: [1, 2, 3, 4],
      borderColor: "rgba(107,70,193,0.5)",
      backgroundColor: "#6b46c1"
    }],
  };

  return <Line options={options} data={data} />;
};
export const DoughnutChart = ()=>{
    const data = {
         labels: ['Subscribed', 'Not Subscribed'],
        datasets: [
          {
            label: 'Views',
            data: [3,20],
            borderColor: ['rgb(62,12,171)', 'rgb(214,43,129)'],
            backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
            borderWidth: 1,
          },
        ],
      };
    
      return <Doughnut data={data} />;
    };
    

    function getLastYearMonths() {
        const labels = [];
      
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
      
        const currentMonth = new Date().getMonth();
      
        const remain = 11 - currentMonth;
      
        for (let i = currentMonth; i < months.length; i--) {
          const element = months[i];
          labels.unshift(element);
          if (i === 0) break;
        }
      
        for (let i = 11; i > remain; i--) {
          if (i === currentMonth) break;
          const element = months[i];
          labels.unshift(element);
        }
      
        return labels;
      }