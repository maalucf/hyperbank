import { Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

export const HorizontalBarChart = ({ chartData }) => {
    const [barChartData, setBarChartData] = useState({});

    useEffect(() => {
        if (chartData.length > 0 && chartData) {
            const topCity = Math.max(...chartData.map(item => parseFloat(item.visit_count)));

            const backgroundColors = chartData.map(data => {
                let color = "#2D3560";
                if (parseFloat(data.visit_count) === topCity) {
                    color = "#F8DF19";
                }
                return color;
            });
            
            setBarChartData({
                labels: chartData.map((data) => data.city), 
                datasets: [
                    {
                        label: "Total",
                        data: chartData.map((data) => data.visit_count),
                        backgroundColor: backgroundColors,
                        borderWidth: 0
                    }
                ]
            });
        }
    }, [chartData]);

    if (Object.keys(barChartData).length === 0 && barChartData.constructor === Object) {
        return null; 
    }

    return (
        <Bar
            data={barChartData}
            options={{
                indexAxis: 'y',
                scales: {
                    x: {
                        display: false
                    }, 
                    y: {
                        display: true,
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        display: true,
                        mode: 'index'
                    },
                    title: {
                      display: false
                    },
                    legend: {
                      display: false
                    }
                },
                animation: {
                    duration: 5000,
                    easing: 'easeInOutQuart'
                }
            }}
        />
    )
}