import { Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

export const VerticalBarChart = ({ chartData }) => {
    const [barChartData, setBarChartData] = useState({});

    useEffect(() => {
        if (chartData.length > 0 && chartData) {
            const maxSpent = Math.max(...chartData.map(item => parseFloat(item.total_spent)));

            const backgroundColors = chartData.map(data => {
                let color = "#2D3560";
                if (parseFloat(data.total_spent) === maxSpent) {
                    color = "#F8DF19";
                }
                return color;
            });
            
            setBarChartData({
                labels: chartData.map((data) => data.month_name), 
                datasets: [
                    {
                        label: "Total",
                        data: chartData.map((data) => data.total_spent),
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
                indexAxis: 'x',
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false
                        }
                    }, 
                    y: {
                        display: false,
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
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }}
        />
    )
}