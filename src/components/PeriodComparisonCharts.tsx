import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';

interface PeriodComparisonChartsProps {}

type RevenueCategory = 'totalRevenue' | 'labor' | 'parts' | 'accessories' | 'lubricants' | 'battery' | 'tyre';

type RevenueCategoryData = {
  ytd2025: number;
  ytd2024: number;
  mtdJun: number;
  mtdMay: number;
  label: string;
};

type RevenueCategoriesType = {
  [key in RevenueCategory]: RevenueCategoryData;
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

const PeriodComparisonCharts: React.FC<PeriodComparisonChartsProps> = () => {
  // State for selected metrics
  const [ytdMetric, setYtdMetric] = useState<RevenueCategory>('totalRevenue');
  const [mtdMetric, setMtdMetric] = useState<RevenueCategory>('totalRevenue');

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

  // Revenue category data for each metric
  const revenueCategories: RevenueCategoriesType = {
    totalRevenue: { ytd2025: 4850000, ytd2024: 3650000, mtdJun: 980000, mtdMay: 850000, label: 'Total Revenue' },
    labor: { ytd2025: 1050000, ytd2024: 820000, mtdJun: 220000, mtdMay: 195000, label: 'Labor' },
    parts: { ytd2025: 1950000, ytd2024: 1550000, mtdJun: 410000, mtdMay: 350000, label: 'Parts' },
    accessories: { ytd2025: 650000, ytd2024: 450000, mtdJun: 125000, mtdMay: 105000, label: 'Accessories' },
    lubricants: { ytd2025: 550000, ytd2024: 420000, mtdJun: 98000, mtdMay: 85000, label: 'Lubricants' },
    battery: { ytd2025: 320000, ytd2024: 210000, mtdJun: 65000, mtdMay: 58000, label: 'Battery' },
    tyre: { ytd2025: 330000, ytd2024: 250000, mtdJun: 72000, mtdMay: 62000, label: 'Tyre' }
  };
  
  // Transform data for YTD chart - x-axis will be years instead of categories
  const ytdData = [
    {
      name: '2024 (LYTD)',
      value: revenueCategories[ytdMetric].ytd2024,
      fill: '#4361ee'
    },
    {
      name: '2025 (YTD)',
      value: revenueCategories[ytdMetric].ytd2025,
      fill: '#f72585'
    }
  ];

  // Calculate YTD percentage change
  const ytdPercentChange = ((revenueCategories[ytdMetric].ytd2025 - revenueCategories[ytdMetric].ytd2024) / revenueCategories[ytdMetric].ytd2024 * 100).toFixed(1);

  // Transform data for MTD chart - x-axis will be months instead of categories
  const mtdData = [
    {
      name: 'MAY (LMTD)',
      value: revenueCategories[mtdMetric].mtdMay,
      fill: '#4cc9f0'
    },
    {
      name: 'JUN (MTD)',
      value: revenueCategories[mtdMetric].mtdJun,
      fill: '#f72585'
    }
  ];

  // Calculate MTD percentage change
  const mtdPercentChange = ((revenueCategories[mtdMetric].mtdJun - revenueCategories[mtdMetric].mtdMay) / revenueCategories[mtdMetric].mtdMay * 100).toFixed(1);

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
      className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
    >
      {/* YTD vs LYTD Chart */}
      <motion.div 
        variants={itemVariants} 
        className="card bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            YTD vs LYTD Comparison (Jan-May)
          </h2>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setYtdMetric('totalRevenue')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'totalRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Total Revenue
            </button>
            <button
              onClick={() => setYtdMetric('labor')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'labor' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Labor
            </button>
            <button
              onClick={() => setYtdMetric('parts')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'parts' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Parts
            </button>
            <button
              onClick={() => setYtdMetric('accessories')}
              className={`btn text-xs py-1 px-3 ${ytdMetric === 'accessories' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Accessories
            </button>
          </div>
        </div>
        
        <div className="h-80 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-chart-blue/5 to-chart-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ytdData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              barSize={60}
            >
              <defs>
                <linearGradient id="colorYTD" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f72585" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f72585" stopOpacity={0.6}/>
                </linearGradient>
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
              />
              <Bar 
                dataKey="value"
                name={revenueCategories[ytdMetric].label}
                radius={[6, 6, 0, 0]}
                fill="url(#colorYTD)"
              >
                {/* Add percentage change label to the second bar (2025) */}
                {/* Percentage change label */}
                <LabelList
                  dataKey="value"
                  position="top"
                  formatter={() => `+${ytdPercentChange}%`}
                  style={{ fontWeight: 'bold', fontSize: '12px', fill: '#f72585' }}
                />
              </Bar>
            </BarChart>
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
            MTD vs LMTD Comparison
          </h2>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setMtdMetric('totalRevenue')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'totalRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Total Revenue
            </button>
            <button
              onClick={() => setMtdMetric('labor')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'labor' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Labor
            </button>
            <button
              onClick={() => setMtdMetric('parts')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'parts' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Parts
            </button>
            <button
              onClick={() => setMtdMetric('accessories')}
              className={`btn text-xs py-1 px-3 ${mtdMetric === 'accessories' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Accessories
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
                name={revenueCategories[mtdMetric].label}
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
