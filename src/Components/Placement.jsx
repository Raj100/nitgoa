import React from 'react';
import StackedBarChart from './StackedBarChart';

const Placement = () => {
  const chartData = {
    labels: ['UG 2019', 'UG 2020', 'UG 2021', 'UG 2022', 'UG 2023', 'UG 2024'], // Example column labels
    averageLPAs: [3, 7, 4, 4, 3, 5], // Example average LPAs
    highestLPAs: [2, 3, 3, 1, 3, 4], // Example highest LPAs
  };

  return <StackedBarChart data={chartData} height={400} width={700} />;
};

export default Placement;
