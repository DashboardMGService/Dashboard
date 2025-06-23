import React from 'react';
import { repeatRepairCohortData } from '../data/customerJourneyData';

const getColor = (value: number | null) => {
  if (value === null) return 'bg-gray-100 text-gray-400';
  if (value <= 5) return 'bg-green-200 text-green-800'; // Good
  if (value <= 10) return 'bg-yellow-200 text-yellow-800'; // Okay
  return 'bg-red-200 text-red-800'; // Bad
};

const RepeatRepairCohortChart: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-gray-100 p-4 sm:p-6 rounded-xl shadow-sm">
      <h3 className="text-base sm:text-lg font-bold text-gray-800">Repeat Repair Rate by Cohort</h3>
      <p className="text-sm text-gray-500 mb-4">Percentage of customers returning for the same issue.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr>
              <th className="p-2 sm:p-3 font-semibold text-gray-600 bg-gray-50 rounded-tl-lg text-xs sm:text-sm">Cohort</th>
              <th className="p-2 sm:p-3 font-semibold text-gray-600 bg-gray-50 text-xs sm:text-sm">Total Services</th>
              {repeatRepairCohortData.labels.map((label, index) => (
                <th key={index} className={`p-2 sm:p-3 font-semibold text-gray-600 bg-gray-50 text-xs sm:text-sm ${index === repeatRepairCohortData.labels.length - 1 ? 'rounded-tr-lg' : ''}`}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {repeatRepairCohortData.cohorts.map((cohort, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-200 last:border-none">
                <td className="p-2 sm:p-3 font-medium text-gray-800 text-xs sm:text-sm">{cohort.cohort}</td>
                <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">{cohort.total.toLocaleString()}</td>
                {cohort.values.map((value, colIndex) => (
                  <td key={colIndex} className="p-0">
                    <div className={`m-1 p-1 sm:p-2 text-center rounded-md font-semibold text-xs sm:text-sm ${getColor(value)}`}>
                      {value !== null ? `${value}%` : '-'}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepeatRepairCohortChart;
