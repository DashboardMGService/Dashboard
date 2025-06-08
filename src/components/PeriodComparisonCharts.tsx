import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2 } from 'lucide-react';
import {
  BarChart,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  LabelList,
  Cell
} from 'recharts';

import { MtdKpiMetricSet, YtdComparisonDataType } from '../data/tillDateComparisonData'; // Adjust path if necessary

export type PeriodMetricKey = 'totalRevenue' | 'labourRevenue' | 'partsRevenue' | 'accessoriesRevenue' | 'throughput';

export interface PeriodComparisonChartsProps {
  ytdSummaryData: YtdComparisonDataType;
  mtdDataForSelectedMonth: MtdKpiMetricSet | null;
  selectedMonthLabel: string; // e.g., "JUN"
  currentYear: number; // e.g., 2025
  previousYear: number; // e.g., 2024
}

// type RevenueCategory = 'totalRevenue' | 'labor' | 'parts' | 'accessories' | 'lubricants' | 'battery' | 'tyre'; // Old type

// type RevenueCategoryData = { // Old type
//   ytd2025: number;
//   ytd2024: number;
//   mtdJun: number;
//   mtdMay: number;
//   label: string;
// };

// type RevenueCategoriesType = { // Old type
//   [key in RevenueCategory]: RevenueCategoryData;
// };

// Helper function to get display label for metric keys
const getMetricLabel = (metric: PeriodMetricKey): string => {
  switch (metric) {
    case 'totalRevenue': return 'Total Revenue';
    case 'labourRevenue': return 'Labour Revenue';
    case 'partsRevenue': return 'Parts Revenue';
    case 'accessoriesRevenue': return 'Accessories Revenue';
    case 'throughput': return 'Throughput';
    default: return metric;
  }
};

// Helper function to format currency
const formatCurrency = (value: number) => {
  if (value >= 1000000) {
    return `₹${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  } else {
    return `₹${(value / 1000).toFixed(0)}K`;
  }
};

const PeriodComparisonCharts: React.FC<PeriodComparisonChartsProps> = ({ ytdSummaryData, mtdDataForSelectedMonth, selectedMonthLabel, currentYear, previousYear }) => {
  // State for selected metrics
  const [ytdMetric, setYtdMetric] = useState<PeriodMetricKey>('totalRevenue');
  const [mtdMetric, setMtdMetric] = useState<PeriodMetricKey>('totalRevenue');
  const [isYtdExpanded, setIsYtdExpanded] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // Data is now passed via props. Hardcoded revenueCategories removed.
  
  const selectedYtdMetricDataSet = ytdSummaryData[ytdMetric];
  const ytdData = [
    {
      name: `${previousYear} (LYTD)`,
      value: selectedYtdMetricDataSet?.summary?.previous || 0,
      fill: 'url(#colorYTD2024)' // Use gradient URL
    },
    {
      name: `${currentYear} (YTD)`,
      value: selectedYtdMetricDataSet?.summary?.current || 0,
      fill: 'url(#colorYTD2025)' // Use gradient URL
    }
  ];

  const ytdPercentChange = selectedYtdMetricDataSet?.summary?.percentChange?.toFixed(1) ?? 
    (selectedYtdMetricDataSet?.summary?.previous && selectedYtdMetricDataSet?.summary?.previous !== 0 
      ? (((selectedYtdMetricDataSet.summary.current - selectedYtdMetricDataSet.summary.previous) / selectedYtdMetricDataSet.summary.previous) * 100).toFixed(1) 
      : (selectedYtdMetricDataSet?.summary?.current ?? 0 > 0 ? "∞" : "0"));

  const selectedMtdMetricDataSet = mtdDataForSelectedMonth ? mtdDataForSelectedMonth[mtdMetric] : null;
  const mtdData = selectedMtdMetricDataSet ? [
    {
      name: `${selectedMonthLabel} ${previousYear}`,
      value: selectedMtdMetricDataSet.previous || 0,
      fill: '#4cc9f0'
    },
    {
      name: `${selectedMonthLabel} ${currentYear}`,
      value: selectedMtdMetricDataSet.current || 0,
      fill: '#f72585'
    }
  ] : [];

  const mtdPercentChange = selectedMtdMetricDataSet?.percentChange?.toFixed(1) ?? 
    (selectedMtdMetricDataSet?.previous && selectedMtdMetricDataSet?.previous !== 0 
      ? (((selectedMtdMetricDataSet.current - selectedMtdMetricDataSet.previous) / selectedMtdMetricDataSet.previous) * 100).toFixed(1) 
      : (selectedMtdMetricDataSet?.current ?? 0 > 0 ? "∞" : "0"));

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-lg">
          <p className="font-medium text-gray-700">{label}</p>
          <p className="text-primary-600 font-bold">
            {formatCurrency(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full grid grid-cols-1 ${isYtdExpanded ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-6 mb-6`}
    >
      {/* YTD vs LYTD Chart */}
      <motion.div 
        variants={itemVariants} 
        className={`card bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ${isYtdExpanded ? 'lg:col-span-2' : ''}`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-grow">
            <h2 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              YTD vs LYTD Comparison {isYtdExpanded ? `(${getMetricLabel(ytdMetric)} - Monthly Breakdown)` : ''}
            </h2>
          </div>
          <button 
            onClick={() => setIsYtdExpanded(!isYtdExpanded)}
            className="p-1.5 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
            title={isYtdExpanded ? "Collapse" : "Expand"}
          >
            {isYtdExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setYtdMetric('totalRevenue')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'totalRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Total Revenue
            </button>
            <button
              onClick={() => setYtdMetric('labourRevenue')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'labourRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Labour Revenue
            </button>
            <button
              onClick={() => setYtdMetric('partsRevenue')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'partsRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Parts Revenue
            </button>
            <button
              onClick={() => setYtdMetric('accessoriesRevenue')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'accessoriesRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Accessories Revenue
            </button>
            <button
              onClick={() => setYtdMetric('throughput')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'throughput' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Throughput
            </button>
          </div>
        </div>
        
        <div className={`${isYtdExpanded ? 'h-[60vh]' : 'h-80'} relative overflow-hidden group transition-all duration-300 ease-in-out`}>
          <div className="absolute inset-0 bg-gradient-to-r from-chart-blue/5 to-chart-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <ResponsiveContainer width="100%" height="100%">
            {!isYtdExpanded ? (
              <BarChart
                data={ytdData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                barSize={60}
              >
                <defs>
                  <linearGradient id="colorYTD2025" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f72585" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f72585" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorYTD2024" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4361ee" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4361ee" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.4} vertical={false} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis 
                  tickFormatter={formatCurrency}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                  width={80}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ paddingTop: '10px' }}
                  iconType="circle"
                  iconSize={8}
                  payload={[
                    { value: `${previousYear} (LYTD)`, type: 'square', id: 'lytd', color: '#4361ee' },
                    { value: `${currentYear} (YTD)`, type: 'square', id: 'ytd', color: '#f72585' },
                  ]}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {ytdData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                  <LabelList
                    content={(props: any) => {
                      const { index, value, x, y, width } = props;
                      if (index === 1 && value > 0) { // YTD bar is at index 1
                        return (
                          <text x={x + width / 2} y={y} dy={-6} fill="#f72585" fontSize="12px" fontWeight="bold" textAnchor="middle">
                            {`${ytdPercentChange !== "0" && ytdPercentChange !== "∞" ? (parseFloat(ytdPercentChange) > 0 ? '+' : '') : ''}${ytdPercentChange}%`}
                          </text>
                        );
                      }
                      return null;
                    }}
                  />
                </Bar>
              </BarChart>
            ) : (
              <ComposedChart
                data={ytdSummaryData[ytdMetric]?.monthlyBreakdown || []}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.4} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis 
                  tickFormatter={formatCurrency}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                  width={80}
                />
                <Tooltip 
                  labelStyle={{ color: "#374151", fontWeight: "bold", marginBottom: "5px" }}
                  formatter={(value: number, name: string /* LYTD or YTD */, props: any) => {
                    let formattedValue;
                    if (ytdMetric === 'throughput') {
                      formattedValue = value.toString(); // Throughput is a count
                    } else {
                      formattedValue = formatCurrency(value); // Revenues are currency
                    }
                    // 'name' will be "LYTD" or "YTD" from the Line component
                    // The color will be automatically picked up by the tooltip from the line's stroke (props.payload.stroke)
                    return [
                      <span style={{ color: props.payload.stroke }}>{formattedValue}</span>,
                      name
                    ];
                  }}
                  labelFormatter={(label: string /* Month e.g., "Jan" */) => {
                    return label; // Just show the month
                  }}
                  wrapperStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #e5e7eb', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}
                  itemStyle={{ padding: '3px 0', color: '#4b5563' }}
                  cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '3 3' }}
                /> 
                <Legend wrapperStyle={{ paddingTop: '10px' }} iconType="circle" iconSize={8} />
                <Line type="monotone" dataKey="previousCumulative" name="LYTD" stroke="#4361ee" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="currentCumulative" name="YTD" stroke="#f72585" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </ComposedChart>
            )}
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* MTD vs LMTD Chart */}
      <motion.div 
        variants={itemVariants} 
        className="card bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            MTD vs LYMTD Comparison ({selectedMonthLabel})        </h2>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setMtdMetric('totalRevenue')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'totalRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Total Revenue
            </button>
            <button
              onClick={() => setMtdMetric('labourRevenue')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'labourRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Labour Revenue
            </button>
            <button
              onClick={() => setMtdMetric('partsRevenue')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'partsRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Parts Revenue
            </button>
            <button
              onClick={() => setMtdMetric('accessoriesRevenue')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'accessoriesRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Accessories Revenue
            </button>
            <button
              onClick={() => setMtdMetric('throughput')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'throughput' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Throughput
            </button>
          </div>
        </div>
        
        <div className="h-80 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-chart-blue/5 to-chart-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={mtdData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              barSize={60}
            >
              <defs>
                <linearGradient id="colorMTDJun" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f72585" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f72585" stopOpacity={0.6}/>
                </linearGradient>
                <linearGradient id="colorMTDMay" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4cc9f0" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4cc9f0" stopOpacity={0.6}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.4} vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickLine={false}
              />
              <YAxis 
                tickFormatter={formatCurrency}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickLine={false}
                width={80}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '10px' }}
                iconType="circle"
                iconSize={8}
              />
              <Bar 
                dataKey="value"
                name={getMetricLabel(mtdMetric)}
                radius={[6, 6, 0, 0]}
                fill="url(#colorMTDJun)"
              >
                {/* Add percentage change label to the second bar (JUN) */}
                {/* Percentage change label */}
                <LabelList
                  dataKey="value"
                  position="top"
                  formatter={() => `+${mtdPercentChange}%`}
                  style={{ fontWeight: 'bold', fontSize: '12px', fill: '#f72585' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PeriodComparisonCharts;
