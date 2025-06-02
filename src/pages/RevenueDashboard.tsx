import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  RadialBarChart,
  RadialBar,
  Area,
  ReferenceArea,
  Scatter,
  LabelList,
  Sector,
  PolarGrid
} from 'recharts';
import { 
  BarChart2, 
  Car, 
  PenTool as Tool, 
  DollarSign, 
  Coins, 
  Users
} from 'lucide-react';

import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';
import PeriodComparisonCharts from '../components/PeriodComparisonCharts';
import { 
  monthlyKpiData, 
  previousYearData
} from '../data';

import {
  getMonthlyServiceAdvisors,
  getCombinedMonthlyData,
  calculateTotalRevenue,
  getTopServiceAdvisors,
  getYearOnYearComparison
} from '../data/serviceAdvisorRevenue';

const RevenueDashboard: React.FC = () => {
  const [comparisonMetric, setComparisonMetric] = useState<string>('mechRo');
  const [selectedMonth, setSelectedMonth] = useState<'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec'>('jan');
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  
  // Get service advisor data for the selected month and year
  const mechData = getMonthlyServiceAdvisors(selectedYear, selectedMonth, 'mech');
  const bodyData = getMonthlyServiceAdvisors(selectedYear, selectedMonth, 'body');
  const combinedData = getCombinedMonthlyData(selectedYear, selectedMonth);
  
  // Calculate totals for the selected year
  const totals = combinedData.reduce(
    (acc, advisor) => {
      acc.throughput += advisor.throughput;
      acc.vas += advisor.vas;
      acc.lab += advisor.lab;
      acc.acces += advisor.acces;
      acc.lub += advisor.lub;
      acc.bat += advisor.bat;
      acc.tyre += advisor.tyre;
      acc.parts += advisor.parts;
      acc.totalRevenue += calculateTotalRevenue(advisor);
      return acc;
    },
    { 
      throughput: 0, vas: 0, lab: 0, acces: 0, lub: 0, bat: 0, 
      tyre: 0, parts: 0, totalRevenue: 0 
    }
  );
  
  // Get year-on-year comparison between the previous year and selected year
  const yearOnYearData = selectedYear > 2024 ? 
    getYearOnYearComparison(selectedYear - 1, selectedYear, selectedMonth) : 
    null;
  
  // For backward compatibility with the existing dashboard
  const currentYearData = monthlyKpiData;
  const previousYearEquivalent = previousYearData;
  
  const currentYearTotals = {
    mechRo: currentYearData.reduce((sum, month) => sum + month.mechRo, 0),
    bpRo: currentYearData.reduce((sum, month) => sum + month.bpRo, 0),
    accessoriesRo: currentYearData.reduce((sum, month) => sum + month.accessoriesRo, 0),
    partsRevenue: currentYearData.reduce((sum, month) => sum + (month.partsRevenue || 0), 0),
    labourRevenue: currentYearData.reduce((sum, month) => sum + (month.labourRevenue || 0), 0),
  };
  
  const previousYearTotals = {
    mechRo: previousYearEquivalent.reduce((sum, month) => sum + month.mechRo, 0),
    bpRo: previousYearEquivalent.reduce((sum, month) => sum + month.bpRo, 0),
    accessoriesRo: previousYearEquivalent.reduce((sum, month) => sum + month.accessoriesRo, 0),
    partsRevenue: previousYearEquivalent.reduce((sum, month) => sum + (month.partsRevenue || 0), 0),
    labourRevenue: previousYearEquivalent.reduce((sum, month) => sum + (month.labourRevenue || 0), 0),
  };
  
  // Calculate percentage changes for the original data (not used with new data structure)
  // This is kept for backward compatibility with other parts of the dashboard
  // that haven't been updated yet to use the new data structure
  
  // Prepare data for year-on-year comparison chart using the new data structure
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const comparisonData = months.map((month, index) => {
    // Get data for both years using our new helper functions, separated by service type
    const mech2024 = getMonthlyServiceAdvisors(2024, month as any, 'mech');
    const body2024 = getMonthlyServiceAdvisors(2024, month as any, 'body');
    const mech2025 = getMonthlyServiceAdvisors(2025, month as any, 'mech');
    const body2025 = getMonthlyServiceAdvisors(2025, month as any, 'body');
    
    // Choose which data to use based on the selected comparison metric
    let data2024 = [];
    let data2025 = [];
    
    if (comparisonMetric === 'mechRo') {
      data2024 = mech2024;
      data2025 = mech2025;
    } else if (comparisonMetric === 'bpRo') {
      data2024 = body2024;
      data2025 = body2025;
    } else {
      // For other metrics, use combined data
      data2024 = [...mech2024, ...body2024];
      data2025 = [...mech2025, ...body2025];
    }
    
    // Calculate totals for each metric
    const totals = data2024.reduce(
      (acc, advisor) => {
        if (comparisonMetric === 'mechRo' || comparisonMetric === 'bpRo') {
          acc += advisor.throughput || 0;
        } else if (comparisonMetric === 'accessoriesRo') {
          acc += advisor.acces || 0;
        } else if (comparisonMetric === 'partsRevenue') {
          acc += advisor.parts || 0;
        } else if (comparisonMetric === 'labourRevenue') {
          acc += advisor.lab || 0;
        }
        return acc;
      }, 0
    );
    
    const totals2025 = data2025.reduce(
      (acc, advisor) => {
        if (comparisonMetric === 'mechRo' || comparisonMetric === 'bpRo') {
          acc += advisor.throughput || 0;
        } else if (comparisonMetric === 'accessoriesRo') {
          acc += advisor.acces || 0;
        } else if (comparisonMetric === 'partsRevenue') {
          acc += advisor.parts || 0;
        } else if (comparisonMetric === 'labourRevenue') {
          acc += advisor.lab || 0;
        }
        return acc;
      }, 0
    );
    
    return {
      month: monthNames[index],
      '2024': totals,
      '2025': totals2025,
      target: comparisonMetric === 'mechRo' ? 1200 :
             comparisonMetric === 'bpRo' ? 200 :
             comparisonMetric === 'accessoriesRo' ? 50 :
             comparisonMetric === 'partsRevenue' ? 170 :
             comparisonMetric === 'labourRevenue' ? 65 : 0
    };
  });
  
  // Get all service advisors for the selected month and year
  const allAdvisors = getCombinedMonthlyData(selectedYear, selectedMonth);
  
  // Prepare data for the radial bar chart - using the new data structure
  const radialData = [
    { name: 'Throughput', value: totals.throughput, fill: '#4361ee' },
    { name: 'Service Advisors', value: mechData.length + bodyData.length, fill: '#7209b7' },
    { name: 'Revenue (Lakhs)', value: Math.round(totals.totalRevenue / 100000), fill: '#f72585' },
  ];
  
  // Prepare data for the revenue breakdown pie chart using the new data structure
  const revenueBreakdown = [
    { name: 'Labor', value: totals.lab, color: '#4361ee' },
    { name: 'Parts', value: totals.parts, color: '#7209b7' },
    { name: 'VAS', value: totals.vas, color: '#f72585' },
    { name: 'Accessories', value: totals.acces, color: '#fb8500' },
  ];
  
  // Prepare data for service advisor revenue chart using the new data structure
  const advisorRevenueData = allAdvisors.slice(0, 10).map((advisor, index) => ({
    name: advisor.name.split(' ')[0], // First name only for chart clarity
    revenue: calculateTotalRevenue(advisor),
    throughput: advisor.throughput,
    labour: advisor.lab,
    parts: advisor.parts,
    color: [
      '#4361ee', '#7209b7', '#f72585', '#fb8500', '#2ec4b6',
      '#3a86ff', '#8338ec', '#ff006e', '#ffbe0b', '#06d6a0'
    ][index % 10] // Use modulo to handle more than 10 advisors
  }));

  // Prepare data for radial bar chart
  const radialBarData = [
    {
      name: 'Mechanical',
      value: (currentYearTotals.mechRo / 10000) * 100,
      fill: '#4361ee'
    },
    {
      name: 'Body & Paint',
      value: (currentYearTotals.bpRo / 1500) * 100,
      fill: '#7209b7'
    },
    {
      name: 'Accessories',
      value: (currentYearTotals.accessoriesRo / 500) * 100,
      fill: '#f72585'
    },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  // Custom tooltip for the comparison chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-6"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Professional Header with Logo */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 rounded-t-xl shadow-xl border border-white/40 p-4 overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full shadow-md">
              <Car size={24} className="text-primary-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Narsinghpur Service Dashboard</h1>
              <p className="text-xs text-white/80">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
            </div>
          </div>
          {/* Navigation buttons removed as requested */}
        </div>
      </div>

      {/* Month and Year Selector - Compact Sticky at the top */}
      <motion.div 
        variants={itemVariants} 
        className="sticky top-0 z-10 w-auto max-w-md mx-auto bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-primary-100 py-2 px-4 mb-4 transform transition-all duration-300 hover:shadow-xl"
        style={{ boxShadow: '0 4px 20px rgba(67, 97, 238, 0.15)' }}
      >
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-primary-600 whitespace-nowrap">Month:</label>
            <select 
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value as any)}
              className="text-sm px-2 py-1 bg-primary-50 border border-primary-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-primary-700"
            >
              <option value="jan">January</option>
              <option value="feb">February</option>
              <option value="mar">March</option>
              <option value="apr">April</option>
              <option value="may">May</option>
              <option value="jun">June</option>
              <option value="jul">July</option>
              <option value="aug">August</option>
              <option value="sep">September</option>
              <option value="oct">October</option>
              <option value="nov">November</option>
              <option value="dec">December</option>
            </select>
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-primary-600 whitespace-nowrap">Year:</label>
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="text-sm px-2 py-1 bg-primary-50 border border-primary-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-primary-700"
            >
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-sm rounded-b-xl shadow-xl border-x border-b border-white/40 p-6 overflow-hidden">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Revenue</h1>
        </div>
      </div>
      
      {/* Stat Cards Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Throughput"
            value={totals.throughput.toFixed(0)}
            percentChange={yearOnYearData ? yearOnYearData.percentageChanges.throughput : 0}
            icon={<Car className="text-primary-500" size={24} />}
            color="primary"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Labour + VAS Revenue"
            value={`₹${((totals.lab + totals.vas) / 100000).toFixed(1)} L`}
            percentChange={yearOnYearData ? (yearOnYearData.percentageChanges.lab + yearOnYearData.percentageChanges.vas) / 2 : 0}
            icon={<Tool className="text-secondary-500" size={24} />}
            color="secondary"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Parts Revenue"
            value={`₹${(totals.parts / 100000).toFixed(1)} L`}
            percentChange={yearOnYearData ? yearOnYearData.percentageChanges.parts : 0}
            icon={<BarChart2 className="text-accent-500" size={24} />}
            color="accent"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <StatCard 
            title="Total Revenue"
            value={`₹${(totals.totalRevenue / 100000).toFixed(1)} L`}
            percentChange={yearOnYearData ? yearOnYearData.percentageChanges.totalRevenue : 0}
            icon={<DollarSign className="text-success-500" size={24} />}
            color="success"
          />
        </motion.div>
      </motion.div>
      
      {/* Monthly Comparison - Show when comparison tab is active or always in overview */}
      <motion.div variants={itemVariants} className="card overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Year-on-Year Comparison</h2>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setComparisonMetric('mechRo')}
              className={`btn text-xs py-1 px-3 ${comparisonMetric === 'mechRo' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Mechanical
            </button>
            <button
              onClick={() => setComparisonMetric('bpRo')}
              className={`btn text-xs py-1 px-3 ${comparisonMetric === 'bpRo' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Body & Paint
            </button>
            <button
              onClick={() => setComparisonMetric('accessoriesRo')}
              className={`btn text-xs py-1 px-3 ${comparisonMetric === 'accessoriesRo' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Accessories
            </button>
            <button
              onClick={() => setComparisonMetric('partsRevenue')}
              className={`btn text-xs py-1 px-3 ${comparisonMetric === 'partsRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Parts
            </button>
            <button
              onClick={() => setComparisonMetric('labourRevenue')}
              className={`btn text-xs py-1 px-3 ${comparisonMetric === 'labourRevenue' ? 'bg-white text-primary-600 shadow-sm' : 'bg-transparent text-gray-600'}`}
            >
              Labour
            </button>
          </div>
        </div>
        
        <div className="h-80 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-chart-blue/5 to-chart-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={comparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4361ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4361ee" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f72585" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f72585" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.4} vertical={false} />
              <XAxis 
                dataKey="month" 
                tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickLine={false}
              />
              <YAxis 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                content={<CustomTooltip />} 
                wrapperStyle={{ outline: 'none' }}
                cursor={{ stroke: '#f0f0f0', strokeWidth: 1, fill: 'rgba(240, 240, 240, 0.2)' }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '10px' }}
                iconType="circle"
                iconSize={8}
                formatter={(value) => <span style={{ color: value === '2024' ? '#4361ee' : value === '2025' ? '#f72585' : '#2ec4b6', fontWeight: 500 }}>{value}</span>}
              />
              
              {/* Reference area to highlight target achievement */}
              {comparisonData.map((entry, index) => (
                entry['2025'] > entry.target && (
                  <ReferenceArea 
                    key={`area-${index}`}
                    x1={entry.month} 
                    x2={entry.month} 
                    y1={entry.target} 
                    y2={entry['2025']} 
                    fill="#4ade80" 
                    fillOpacity={0.1} 
                  />
                )
              ))}
              
              {/* Target line */}
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#2ec4b6" 
                strokeWidth={2} 
                strokeDasharray="5 5" 
                dot={false}
                name="Target"
              />
              
              {/* Area for 2024 data */}
              <Area 
                type="monotone" 
                dataKey="2024" 
                fill="url(#colorUv)" 
                stroke="#4361ee" 
                strokeWidth={0}
                activeDot={false}
              />
              
              {/* Area for 2025 data */}
              <Area 
                type="monotone" 
                dataKey="2025" 
                fill="url(#colorPv)" 
                stroke="#f72585" 
                strokeWidth={0}
                activeDot={false}
              />
              
              {/* Line for 2024 data */}
              <Line 
                type="monotone" 
                dataKey="2024" 
                stroke="#4361ee" 
                strokeWidth={3} 
                dot={{ fill: '#4361ee', r: 4, strokeWidth: 2, stroke: '#ffffff' }} 
                activeDot={{ r: 7, stroke: '#ffffff', strokeWidth: 2 }}
                animationDuration={1500}
                animationEasing="ease-in-out"
              />
              
              {/* Line for 2025 data */}
              <Line 
                type="monotone" 
                dataKey="2025" 
                stroke="#f72585" 
                strokeWidth={3} 
                dot={{ fill: '#f72585', r: 4, strokeWidth: 2, stroke: '#ffffff' }} 
                activeDot={{ r: 7, stroke: '#ffffff', strokeWidth: 2 }}
                animationDuration={1500}
                animationEasing="ease-in-out"
              />
              
              {/* Scatter points for emphasis on high values */}
              <Scatter 
                dataKey="2025" 
                fill="#f72585" 
                shape={(props) => {
                  const { cx, cy, payload } = props;
                  // Only show for highest values
                  if (payload['2025'] > payload['2024'] * 1.2 && payload['2025'] > payload.target) {
                    return (
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={8} 
                        stroke="#f72585" 
                        strokeWidth={2} 
                        fill="#ffffff" 
                        fillOpacity={0.8} 
                      />
                    );
                  }
                  return null;
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        </motion.div>

        {/* YTD vs LYTD and MTD vs LMTD Comparison Charts - Fixed to 2025 vs 2024 */}
        <PeriodComparisonCharts />
        
        <motion.div variants={itemVariants} className="card overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Revenue Breakdown</h2>
            <div className="flex items-center bg-primary-50 text-primary-600 px-3 py-1 rounded-full">
              <Coins className="text-primary-500 mr-2" size={18} />
              <span className="text-sm font-medium">Distribution</span>
            </div>
          </div>
          
          <div className="h-72 flex flex-col md:flex-row">
            <ResponsiveContainer width="60%" height="100%">
              <PieChart>
                <defs>
                  {revenueBreakdown.map((entry, index) => (
                    <filter key={`filter-${index}`} id={`shadow-${index}`} height="130%">
                      <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.3" floodColor={entry.color} />
                    </filter>
                  ))}
                  {revenueBreakdown.map((entry, index) => (
                    <linearGradient key={`gradient-${index}`} id={`pieGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                      <stop offset="100%" stopColor={entry.color} stopOpacity={0.7} />
                    </linearGradient>
                  ))}
                </defs>
                <Pie
                  data={revenueBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  innerRadius={45}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  paddingAngle={3}
                  animationDuration={1500}
                  animationEasing="ease-out"
                  label={({ name, percent }) => {
                    return percent > 0.1 ? `${(percent * 100).toFixed(0)}%` : '';
                  }}
                  activeIndex={Array.from({ length: revenueBreakdown.length }, (_, i) => i)}
                  activeShape={(props: any) => {
                    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
                    return (
                      <g>
                        <Sector
                          cx={cx}
                          cy={cy}
                          innerRadius={innerRadius}
                          outerRadius={outerRadius + 5}
                          startAngle={startAngle}
                          endAngle={endAngle}
                          fill={fill}
                          opacity={0.3}
                        />
                        <Sector
                          cx={cx}
                          cy={cy}
                          innerRadius={innerRadius}
                          outerRadius={outerRadius}
                          startAngle={startAngle}
                          endAngle={endAngle}
                          fill={fill}
                        />
                      </g>
                    );
                  }}
                >
                  {revenueBreakdown.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`url(#pieGradient-${index})`} 
                      filter={`url(#shadow-${index})`}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `₹${value.toLocaleString()}`}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '0.75rem',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    padding: '0.75rem'
                  }}
                  itemStyle={{
                    padding: '5px 0',
                    fontWeight: 500
                  }}
                  wrapperStyle={{
                    zIndex: 100
                  }}
                />
                <Legend 
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  iconType="circle"
                  iconSize={10}
                  wrapperStyle={{
                    paddingLeft: '10px'
                  }}
                  formatter={(value, _entry, index) => {
                    const { color } = revenueBreakdown[index];
                    return <span style={{ color, fontWeight: 600 }}>{value}</span>;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            <ResponsiveContainer width="40%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="20%" 
                outerRadius="90%" 
                data={radialBarData} 
                startAngle={180} 
                endAngle={0}
                barSize={25}
              >
                <defs>
                  {radialBarData.map((entry, index) => (
                    <linearGradient key={`radialGradient-${index}`} id={`radialGradient-${index}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={entry.fill} stopOpacity={0.8} />
                      <stop offset="100%" stopColor={entry.fill} stopOpacity={1} />
                    </linearGradient>
                  ))}
                </defs>
                <PolarGrid radialLines={false} />
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={15}
                  label={{
                    position: 'insideStart',
                    fill: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                    formatter: (value: number) => `${value.toFixed(0)}%`
                  }}
                  animationDuration={1800}
                  animationEasing="ease-out"
                >
                  {radialBarData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`url(#radialGradient-${index})`}
                      stroke="#fff"
                      strokeWidth={1}
                    />
                  ))}
                </RadialBar>
                <Legend 
                  iconSize={12} 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right"
                  wrapperStyle={{
                    paddingLeft: '10px'
                  }}
                  formatter={(value, _entry, index) => {
                    const { fill } = radialBarData[index];
                    return <span style={{ color: fill, fontWeight: 600 }}>{value}</span>;
                  }}
                />
                <Tooltip 
                  formatter={(value: number) => [`${value.toFixed(0)}%`, 'Target Completion']}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '0.75rem',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    padding: '0.75rem'
                  }}
                  itemStyle={{
                    padding: '5px 0',
                    fontWeight: 500
                  }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      {/* Removed Month and Year Selector - Now at the top */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="card overflow-hidden">
          <h2 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Top Advisors by Revenue</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={advisorRevenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4361ee" stopOpacity={1} />
                    <stop offset="100%" stopColor="#7209b7" stopOpacity={0.8} />
                  </linearGradient>
                  <filter id="shadow" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="1" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.2" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.4} vertical={false} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={false}
                  tickFormatter={(value) => `₹${value/1000}k`}
                />
                <Tooltip
                  formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Revenue']}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '0.5rem',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    padding: '0.75rem'
                  }}
                  cursor={{ fill: 'rgba(67, 97, 238, 0.1)' }}
                />
                <Bar 
                  dataKey="revenue" 
                  fill="url(#colorGradient)" 
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                  animationDuration={1500}
                  animationEasing="ease-out"
                  filter="url(#shadow)"
                >
                  <LabelList 
                    dataKey="revenue" 
                    position="top" 
                    formatter={(value: number) => `₹${(value/1000).toFixed(0)}k`}
                    style={{ fontSize: 10, fill: '#6b7280', fontWeight: 'bold' }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-bold mb-4">Monthly Performance Trends</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={monthlyKpiData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '0.5rem',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    padding: '0.75rem'
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="mechRo" name="Mechanical ROs" fill="#4361ee" />
                <Bar yAxisId="left" dataKey="bpRo" name="BP ROs" fill="#7209b7" />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="2025"
                  name="Parts Revenue"
                  stroke="#f72585"
                  strokeWidth={2}
                  dot={{ fill: '#f72585', r: 4, strokeWidth: 2, stroke: '#ffffff' }} 
                  activeDot={{ r: 6, stroke: '#ffffff', strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      

      
      {/* Data Table */}
      <motion.div variants={itemVariants} className="card overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Service Advisor Performance</h2>
          <div className="flex items-center bg-primary-50 text-primary-600 px-3 py-1 rounded-full">
            <Users className="text-primary-500 mr-2" size={18} />
            <span className="text-sm font-medium">All Advisors</span>
          </div>
        </div>
        
        <div style={{ maxHeight: '400px', overflow: 'auto', width: '100%' }}>
          <div style={{ minWidth: '2000px' }}>
          <DataTable
            data={allAdvisors}
            searchable={true}
            columns={[
            { header: 'Service Advisor', accessor: 'name' },
            { header: 'Throughput', accessor: 'throughput' },
            { 
              header: 'VAS (₹)', 
              accessor: (row) => `₹${row.vas.toLocaleString()}`,
              className: 'text-right'
            },
            { 
              header: 'Labour', 
              accessor: (row) => `₹${row.lab.toLocaleString()}`,
              className: 'text-right'
            },
            { 
              header: 'Accessories', 
              accessor: (row) => `₹${row.acces.toLocaleString()}`,
              className: 'text-right'
            },
            { 
              header: 'Lubricants', 
              accessor: (row) => `₹${row.lub.toLocaleString()}`,
              className: 'text-right'
            },
            { 
              header: 'Battery', 
              accessor: (row) => `₹${row.bat.toLocaleString()}`,
              className: 'text-right'
            },
            { 
              header: 'Tyre', 
              accessor: (row) => `₹${row.tyre.toLocaleString()}`,
              className: 'text-right'
            },
            { 
              header: 'Parts', 
              accessor: (row) => `₹${row.parts.toLocaleString()}`,
              className: 'text-right'
            },
            { 
              header: 'Total Revenue', 
              accessor: (row) => `₹${calculateTotalRevenue(row).toLocaleString()}`,
              className: 'font-semibold text-right'
            },
          ]}
          />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RevenueDashboard;