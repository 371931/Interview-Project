import "./Analytics.css";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Analytics = () => {
  const chartCanvasRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const createChart = () => {
      if (chartCanvasRef.current) {
        const ctx = chartCanvasRef.current.getContext('2d');

        // Destroy existing chart instance if it exists
        if (chartInstance) {
          chartInstance.destroy();
        }

        // Your data
        const data = {
          labels: [0, 1, 2, 3, 4, 5, 6],
          datasets: [
            {
              label: 'Network Load',
              data: [40,20,100, 60, 120 , 80, 140],
              borderColor: '#67c4f0',
              fill: false,
              type: 'line',
              borderWidth: 2,
              pointRadius: 5,
              pointBackgroundColor: 'rgba(103,196,240,1)',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
            },
            {
              label: 'CPU Load',
              data: [40,20,100, 60, 120 , 80, 140],
              backgroundColor: '#4052af',
              barThickness: 50,
            },
          ],
        };

        // Chart configuration
        const config = {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                title: {
                  display: true,
                },
              },
              y: {
                min: 0,
                max: 160,
                title: {
                  display: true,
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
          },
        };

        // Create the chart
        chartInstance = new Chart(ctx, config);
      }
    };

    createChart(); // Initial chart creation

    return () => {
      // Clean up - destroy the chart when the component is unmounted
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Empty dependency array to run the effect only once on mount


  return (
    <div className="analytics">
      <p>Analytics</p>
      <hr />
      <canvas ref={chartCanvasRef}></canvas>
      <div className="graph">
        <div className="downloads">Downloads</div>
        <div className="uploads">Uploads</div>
        <div className="pageView">Page Views</div>
        <div className="unique">Unique Visits</div>
      </div>
    </div>
  );
};

export default Analytics;
