import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { repeatRepairAnalysis } from '../data/customerJourneyData';
import { CohortMetric, WindowMetric } from '../types';

const getColor = (value: number | null) => {
  if (value === null || value <= 0) return 'bg-gray-50 text-gray-400';
  if (value <= 2) return 'bg-blue-100 text-blue-800';
  if (value <= 4) return 'bg-blue-200 text-blue-800';
  if (value <= 6) return 'bg-blue-300 text-blue-800';
  if (value <= 8) return 'bg-blue-400 text-white';
  return 'bg-blue-500 text-white';
};

const COLORS = ['#4F46E5', '#7C3AED', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'];

const RepeatRepairCohortChart: React.FC = () => {
    const [selectedCell, setSelectedCell] = useState<{ rowIndex: number; colIndex: number } | null>(null);
  const [pieChartData, setPieChartData] = useState<any[]>([]);
    const [pieChartTitle, setPieChartTitle] = useState<string>('');
  const [view, setView] = useState<'categories' | 'subcategories'>('categories');

  const labels = repeatRepairAnalysis.cohortMetrics.find(Array.isArray) as string[] | undefined;
  const cohorts = (repeatRepairAnalysis.cohortMetrics.filter(item => !Array.isArray(item)) as CohortMetric[])
    .filter(c => c.cohort !== 'Dec 2024')
    .sort((a, b) => new Date(`1 ${a.cohort}`).getTime() - new Date(`1 ${b.cohort}`).getTime());

  useEffect(() => {
    if (selectedCell) {
      const { rowIndex, colIndex } = selectedCell;
      const metric = cohorts[rowIndex].window_metrics[colIndex];
      const data = view === 'categories' ? metric.categories : metric.subcategories;
      const chartData = Object.entries(data).map(([name, value]) => ({ name, value }));
      setPieChartData(chartData);
      setPieChartTitle(`${cohorts[rowIndex].cohort} - ${labels![colIndex]} (${view})`);
    } else {
      setPieChartData([]);
      setPieChartTitle('');
    }
  }, [view, selectedCell, cohorts, labels]);

  if (!labels) {
    return <div>Error: Labels not found in cohort metrics.</div>;
  }

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (selectedCell && selectedCell.rowIndex === rowIndex && selectedCell.colIndex === colIndex) {
      setSelectedCell(null);
    } else {
      setSelectedCell({ rowIndex, colIndex });
    }
  };

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
              {labels.map((label, index) => (
                <th key={index} className={`p-2 sm:p-3 font-semibold text-gray-600 bg-gray-50 text-xs sm:text-sm ${index === labels.length - 1 ? 'rounded-tr-lg' : ''}`}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {cohorts.map((cohort, rowIndex) => {
              return (
                <tr key={rowIndex} className="border-b border-gray-200 last:border-none">
                  <td className="p-2 sm:p-3 font-medium text-gray-800 text-xs sm:text-sm">{cohort.cohort}</td>
                  <td className="p-2 sm:p-3 text-center text-xs sm:text-sm">{cohort.total_vehicles}</td>
                  {cohort.window_metrics.map((metric: WindowMetric, colIndex: number) => {
                    const previousMetricVehicles = colIndex > 0 ? cohort.window_metrics[colIndex - 1].unique_vehicles : 0;
                    const incrementalVehicles = metric.unique_vehicles - previousMetricVehicles;
                    const percentage = cohort.total_vehicles > 0 ? (incrementalVehicles / cohort.total_vehicles) * 100 : 0;
                    return (
                      <td
                        key={colIndex}
                        className={`p-2 sm:p-3 text-center cursor-pointer transition-all duration-200 ${getColor(percentage)} ${selectedCell && selectedCell.rowIndex === rowIndex && selectedCell.colIndex === colIndex ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                      >
                        <div className={`m-1 p-1 sm:p-2 text-center rounded-md font-semibold text-xs sm:text-sm ${getColor(percentage)}`}>
                          {percentage !== 0 ? `${percentage.toFixed(1)}%` : '-'}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {selectedCell && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-2xl relative">
            <button onClick={() => setSelectedCell(null)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold text-gray-800">{pieChartTitle}</h4>
              <div>
                <button 
                  onClick={() => setView('categories')}
                  className={`px-3 py-1 text-sm rounded-md ${view === 'categories' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    Categories
                </button>
                <button 
                  onClick={() => setView('subcategories')}
                  className={`ml-2 px-3 py-1 text-sm rounded-md ${view === 'subcategories' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    Subcategories
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  innerRadius={70} // Creates the donut effect
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                        {`${(percent * 100).toFixed(0)}%`}
                      </text>
                    );
                  }}
                >
                  {pieChartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepeatRepairCohortChart;
