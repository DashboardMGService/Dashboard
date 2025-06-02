import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ComposedChart,
  Cell,
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  ArrowRight,
  Target,
  DollarSign,
  Activity,
  CheckCircle2
} from 'lucide-react';

import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import { monthlyKpiData, dailyKpiData, breakEvenData } from '../data';

const KpiDashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'daily' | 'monthly'>('monthly');
  
  // Get latest month data
  const latestMonth = monthlyKpiData[monthlyKpiData.length - 1];
  
  // Calculate achievement percentages
  const mechRoAchievement = (latestMonth.mechRo / 1200) * 100;
  const bpRoAchievement = (latestMonth.bpRo / 200) * 100;
  const accessoriesRoAchievement = (latestMonth.accessoriesRo / 50) * 100;
  const partsRevenueAchievement = ((latestMonth.partsRevenue || 0) / 170) * 100;
  const labourRevenueAchievement = ((latestMonth.labourRevenue || 0) / 65) * 100;
  
  // Prepare data for the charts
  const kpiTimeframeData = timeframe === 'daily' 
    ? dailyKpiData.map(day => ({
        date: day.date,
        mechRo: day.mechRo,
        bpRo: day.bpRo,
        accessoriesRo: day.accessoriesRo,
      }))
    : monthlyKpiData.map(month => ({
        date: month.month,
        mechRo: month.mechRo,
        mechTarget: 1200,
        bpRo: month.bpRo,
        bpTarget: 200,
        accessoriesRo: month.accessoriesRo,
        accessoriesTarget: 50,
      }));
  
  // Prepare data for CSI trend chart
  const csiTrendData = timeframe === 'daily'
    ? dailyKpiData.map(day => ({
        date: day.date,
        csi: day.csi,
        target: 875,
      }))
    : monthlyKpiData.map(month => ({
        date: month.month,
        csi: month.csi,
        target: 875,
      }));
  
  // Prepare data for break-even analysis
  const breakEvenChartData = [
    { name: 'Employee Cost', value: breakEvenData.employeeCost },
    { name: 'Selling & Distribution', value: breakEvenData.sellingDistributionCost },
    { name: 'Administration', value: breakEvenData.administrationCost },
    { name: 'Finance', value: breakEvenData.financeCost },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
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

  return (
    <motion.div 
      className="p-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold mb-6">KPI Tracker / Report</h1>
      </motion.div>
      
      {/* Timeframe Selector */}
      <motion.div variants={itemVariants} className="flex justify-end mb-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              timeframe === 'daily' 
                ? 'bg-primary-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-200`}
            onClick={() => setTimeframe('daily')}
          >
            Daily
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              timeframe === 'monthly' 
                ? 'bg-primary-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-200`}
            onClick={() => setTimeframe('monthly')}
          >
            Monthly
          </button>
        </div>
      </motion.div>
      
      {/* Stat Cards Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Revenue Required" 
          value={`₹${(breakEvenData.revenueRequired / 100000).toFixed(2)} Lac`} 
          icon={<Target className="text-primary-500" />}
          color="primary"
        />
        <StatCard 
          title="Current Achievement" 
          value={`₹${(breakEvenData.currentLabourAchievement / 100000).toFixed(2)} Lac`} 
          subValue={`${breakEvenData.achievementPercentage}%`}
          icon={<DollarSign className="text-success-500" />}
          color="success"
        />
        <StatCard 
          title="Gap" 
          value={`₹${(Math.abs(breakEvenData.gap) / 100000).toFixed(2)} Lac`} 
          icon={<TrendingDown className="text-danger-500" />}
          color="danger"
        />
        <StatCard 
          title="CSI Score" 
          value={latestMonth.csi} 
          subValue={latestMonth.csi >= 875 ? 'On Target' : 'Below Target'}
          icon={<Activity className="text-secondary-500" />}
          color="secondary"
        />
      </motion.div>
      
      {/* Progress Bars */}
      <motion.div variants={itemVariants} className="card mb-6">
        <div className="flex items-center mb-4">
          <Target className="text-primary-500 mr-2" size={20} />
          <h2 className="text-lg font-semibold">Target Achievement</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <ProgressBar 
              label="Mechanical RO" 
              value={mechRoAchievement} 
              max={100} 
              color="primary" 
            />
            <ProgressBar 
              label="BP RO" 
              value={bpRoAchievement} 
              max={100} 
              color="secondary" 
            />
          </div>
          <div className="space-y-4">
            <ProgressBar 
              label="Accessories RO" 
              value={accessoriesRoAchievement} 
              max={100} 
              color="success" 
            />
            <ProgressBar 
              label="Parts Revenue" 
              value={partsRevenueAchievement} 
              max={100} 
              color="warning" 
            />
          </div>
          <div className="space-y-4">
            <ProgressBar 
              label="Labour Revenue" 
              value={labourRevenueAchievement} 
              max={100} 
              color="danger" 
            />
            <ProgressBar 
              label="Break-even Gap" 
              value={breakEvenData.achievementPercentage} 
              max={100} 
              color="accent" 
            />
          </div>
        </div>
      </motion.div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">RO Performance</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={kpiTimeframeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mechRo" name="Mechanical RO" fill="#8884d8" />
                <Bar dataKey="bpRo" name="BP RO" fill="#82ca9d" />
                <Bar dataKey="accessoriesRo" name="Accessories RO" fill="#ffc658" />
                {timeframe === 'monthly' && (
                  <Line
                    type="monotone"
                    dataKey="mechTarget"
                    name="Mech Target"
                    stroke="#ff7300"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">CSI Trend</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={csiTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[800, 900]} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="csi" 
                  name="CSI Score" 
                  stroke="#8884d8" 
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  name="Target" 
                  stroke="#ff7300" 
                  strokeDasharray="5 5" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      {/* More Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">Break-even Analysis</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={breakEvenChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip formatter={(value) => `₹${(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="value" name="Cost">
                  {breakEvenChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">Revenue vs Target</h2>
          <div className="space-y-6 p-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Total Break-even Requirement</span>
                <span className="text-sm font-bold">₹{(breakEvenData.revenueRequired / 100000).toFixed(2)} Lac</span>
              </div>
              <ProgressBar 
                value={breakEvenData.currentLabourAchievement} 
                max={breakEvenData.revenueRequired} 
                color="primary" 
                size="lg"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">Current Achievement</span>
                <span className="text-xs font-medium">
                  ₹{(breakEvenData.currentLabourAchievement / 100000).toFixed(2)} Lac ({breakEvenData.achievementPercentage}%)
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Labour Revenue</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">₹{(latestMonth.labourRevenue || 0)} Lac</span>
                  <div className="flex items-center">
                    <TrendingUp className="text-success-500 mr-1" size={16} />
                    <span className="text-sm text-success-500">{labourRevenueAchievement.toFixed(0)}%</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Target: ₹65 Lac</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Parts Revenue</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">₹{(latestMonth.partsRevenue || 0)} Lac</span>
                  <div className="flex items-center">
                    <TrendingUp className="text-success-500 mr-1" size={16} />
                    <span className="text-sm text-success-500">{partsRevenueAchievement.toFixed(0)}%</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Target: ₹170 Lac</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Gap Analysis</h3>
              <div className="flex items-center justify-between">
                <span className="text-base">Current Gap to Break-even:</span>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-danger-500">₹{(Math.abs(breakEvenData.gap) / 100000).toFixed(2)} Lac</span>
                  <ArrowRight className="text-gray-400 mx-2" size={16} />
                  <span className="text-lg font-bold text-success-500">100%</span>
                </div>
              </div>
              <div className="flex items-center justify-end mt-2">
                <CheckCircle2 className="text-gray-400 mr-2" size={16} />
                <span className="text-sm text-gray-600">
                  Required Daily Run Rate: ₹{((Math.abs(breakEvenData.gap) / 30) / 100000).toFixed(2)} Lac
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Monthly KPI Summary */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center mb-4">
          <Calendar className="text-primary-500 mr-2" size={20} />
          <h2 className="text-lg font-semibold">Monthly KPI Summary</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  KPI
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Target
                </th>
                {monthlyKpiData.map((month) => (
                  <th key={month.month} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {month.month}
                  </th>
                ))}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  YTD 2025
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Mech RO</td>
                <td className="px-4 py-3 text-sm text-gray-500">1,200</td>
                {monthlyKpiData.map((month) => (
                  <td key={month.month} className="px-4 py-3 text-sm text-gray-900">
                    {month.mechRo}
                  </td>
                ))}
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {monthlyKpiData.reduce((sum, month) => sum + month.mechRo, 0)}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">BP RO</td>
                <td className="px-4 py-3 text-sm text-gray-500">200</td>
                {monthlyKpiData.map((month) => (
                  <td key={month.month} className="px-4 py-3 text-sm text-gray-900">
                    {month.bpRo}
                  </td>
                ))}
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {monthlyKpiData.reduce((sum, month) => sum + month.bpRo, 0)}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Accessories RO</td>
                <td className="px-4 py-3 text-sm text-gray-500">50</td>
                {monthlyKpiData.map((month) => (
                  <td key={month.month} className="px-4 py-3 text-sm text-gray-900">
                    {month.accessoriesRo}
                  </td>
                ))}
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {monthlyKpiData.reduce((sum, month) => sum + month.accessoriesRo, 0)}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">CSI</td>
                <td className="px-4 py-3 text-sm text-gray-500">≥875</td>
                {monthlyKpiData.map((month) => (
                  <td key={month.month} className={`px-4 py-3 text-sm ${month.csi >= 875 ? 'text-success-500 font-medium' : 'text-danger-500 font-medium'}`}>
                    {month.csi}
                  </td>
                ))}
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {Math.round(monthlyKpiData.reduce((sum, month) => sum + month.csi, 0) / monthlyKpiData.length)}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">MG NPS</td>
                <td className="px-4 py-3 text-sm text-gray-500">≥70</td>
                {monthlyKpiData.map((month) => (
                  <td key={month.month} className={`px-4 py-3 text-sm ${month.mgNps >= 70 ? 'text-success-500 font-medium' : 'text-danger-500 font-medium'}`}>
                    {month.mgNps}
                  </td>
                ))}
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {Math.round(monthlyKpiData.reduce((sum, month) => sum + month.mgNps, 0) / monthlyKpiData.length)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default KpiDashboard;