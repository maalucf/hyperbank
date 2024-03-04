import { Pie } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

export const PieChart = ({ chartData }) => {
    const [pieChartData, setPieChartData] = useState({});

    useEffect(() => {
        if (chartData.length > 0 && chartData) {
            setPieChartData({
                labels: chartData.map((data) => data.name), 
                datasets: [
                    {
                        label: "Total",
                        data: chartData.map((data) => data.method_count),
                        borderWidth: 0
                    }
                ]
            });
        }
    }, [chartData]);

    if (Object.keys(pieChartData).length === 0 && pieChartData.constructor === Object) {
        return null; 
    }

    return (
        <Pie
            data={pieChartData}
            options={{
                plugins: {
                    tooltip: {
                        display: true,
                        mode: 'index'
                    },
                    title: {
                      display: false
                    },
                    legend: {
                      display: true,
                      position: 'right'
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeInOutQuart'
                },
                cutout: '50%'
            }}
        />
    )
}