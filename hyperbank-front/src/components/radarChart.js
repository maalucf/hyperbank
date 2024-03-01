import { Radar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

export const RadarChart = ({ chartData }) => {
    const [radarChartData, setRadarChartData] = useState({});
    const [maxCategoryCount, setMaxCategoryCount] = useState(0);

    useEffect(() => {
        if (chartData.length > 0 && chartData) {          
            const categoryCounts = chartData.map(data => data.category_count);
            const maxCount = Math.max(...categoryCounts);
            setMaxCategoryCount(maxCount);
            
            setRadarChartData({
                labels: chartData.map((data) => data.name), 
                datasets: [
                    {
                        label: "Count",
                        data: chartData.map((data) => data.category_count),
                        backgroundColor: 'rgba(248, 223, 25, 0.4)',                        
                        borderColor: 'rgba(248, 223, 25, 1)',
                        borderWidth: 1.5,
                    }
                ]
            });
        }
    }, [chartData]);

    if (Object.keys(radarChartData).length === 0 && radarChartData.constructor === Object) {
        return null; 
    }

    return (
        <Radar
            data={radarChartData}
            options={{
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: maxCategoryCount + 1,
                        stepSize: 1,
                    }
                },
                plugins: {
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