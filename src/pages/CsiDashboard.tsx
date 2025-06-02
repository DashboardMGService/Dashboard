import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import { 
  UserCheck,
  MessageSquare,
  Award,
  ClipboardCheck,
} from 'lucide-react';

import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import { monthlyKpiData, previousYearData } from '../data';

const CsiDashboard: React.FC = () => {
  // Get latest month data
  const latestMonth = monthlyKpiData[monthlyKpiData.length - 1];
  
  // Calculate average CSI score
  const avgCsi = monthlyKpiData.reduce((sum, month) => sum + month.csi, 0) / monthlyKpiData.length;
  
  // Calculate percentage change from previous year
  const prevYearAvgCsi = previousYearData.slice(0, 3).reduce((sum, month) => sum + month.csi, 0) / 3;
  const csiPercentChange = ((avgCsi - prevYearAvgCsi) / prevYearAvgCsi) * 100;
  
  // Prepare monthly CSI data for the chart
  const csiChartData = monthlyKpiData.map(month => ({
    month: month.month,
    csi: month.csi,
    mgNps: month.mgNps,
    dealerNps: month.dealerNps,
    target: 875,
  }));
  
  // Prepare data for radar chart
  const radarData = [
    {
      subject: 'CSI',
      current: latestMonth.csi / 10,
      target: 87.5,
      fullMark: 100,
    },
    {
      subject: 'MG NPS',
      current: latestMonth.mgNps,
      target: 70,
      fullMark: 100,
    },
    {
      subject: 'Dealer NPS',
      current: latestMonth.dealerNps,
      target: 70,
      fullMark: 100,
    },
    {
      subject: 'Service Advisor',
      current: latestMonth.serviceAdvisor / 10,
      target: 85,
      fullMark: 100,
    },
    {
      subject: 'Handover & Delivery',
      current: latestMonth.handoverDelivery / 10,
      target: 85,
      fullMark: 100,
    },
  ];
  
  // Prepare CCPT data
  const ccptData = monthlyKpiData.map(month => ({
    month: month.month,
    ccptv: month.ccptv,
    ccrMech: parseInt(month.ccrMech),
    ccrBp: parseInt(month.ccrBp),
    psfContact: parseInt(month.psfContact),
  }));
  
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
        <h1 className="text-2xl font-bold mb-6">CSI & CCPT Dashboard</h1>
      </motion.div>
      
      {/* Stat Cards Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="CSI Score" 
          value={latestMonth.csi}
          subValue="/1000"
          percentChange={parseFloat(csiPercentChange.toFixed(1))} 
          icon={<UserCheck className="text-primary-500" />}
          color="primary"
        />
        <StatCard 
          title="MG NPS" 
          value={`${latestMonth.mgNps}%`} 
          subValue="Target: 70%"
          icon={<Award className="text-success-500" />}
          color="success"
        />
        <StatCard 
          title="Dealer NPS" 
          value={`${latestMonth.dealerNps}%`} 
          subValue="Target: 70%"
          icon={<Award className="text-secondary-500" />}
          color="secondary"
        />
        <StatCard 
          title="CCPTV" 
          value={latestMonth.ccptv} 
          subValue="CC/1000 Vehicles"
          icon={<MessageSquare className="text-warning-500" />}
          color="warning"
        />
      </motion.div>
      
      {/* Progress Bars */}
      <motion.div variants={itemVariants} className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">CSI Components Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <ProgressBar 
              label="Service Advisor" 
              value={latestMonth.serviceAdvisor} 
              max={1000} 
              color="primary" 
            />
            <ProgressBar 
              label="Handover & Delivery" 
              value={latestMonth.handoverDelivery} 
              max={1000} 
              color="secondary" 
            />
            <ProgressBar 
              label="SOP - Work & Charges Explained" 
              value={latestMonth.sopWorkCharges} 
              max={100} 
              color="success" 
            />
          </div>
          <div className="space-y-4">
            <ProgressBar 
              label="SOP - Fix Right First Time" 
              value={latestMonth.sopFixRight} 
              max={100} 
              color="warning" 
            />
            <ProgressBar 
              label="CCR% <= 3 days (Mech)" 
              value={parseInt(latestMonth.ccrMech)} 
              max={100} 
              color="danger" 
            />
            <ProgressBar 
              label="3rd Day PSF Contact" 
              value={parseInt(latestMonth.psfContact)} 
              max={100} 
              color="accent" 
            />
          </div>
        </div>
      </motion.div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">CSI Trend</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={csiChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[820, 900]} />
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
        
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">NPS Performance</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={csiChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mgNps" name="MG NPS" fill="#8884d8" />
                <Bar dataKey="dealerNps" name="Dealer NPS" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      {/* More Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">CSI Radar Analysis</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Current"
                  dataKey="current"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Target"
                  dataKey="target"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">CCPT & Resolution Trends</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ccptData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="ccptv" 
                  name="CCPTV" 
                  stroke="#8884d8" 
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="ccrMech" 
                  name="CCR% Mech" 
                  stroke="#82ca9d" 
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="ccrBp" 
                  name="CCR% BP" 
                  stroke="#ffc658" 
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="psfContact" 
                  name="PSF Contact %" 
                  stroke="#ff7300" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      {/* KPI Summary Card */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex items-center mb-4">
          <ClipboardCheck className="text-primary-500 mr-2" size={20} />
          <h2 className="text-lg font-semibold">Customer Satisfaction KPI Summary</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">CSI Scores</h3>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">CSI Overall</span>
              <span className={`text-sm font-medium ${latestMonth.csi >= 875 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.csi} / 1000
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Service Advisor</span>
              <span className={`text-sm font-medium ${latestMonth.serviceAdvisor >= 850 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.serviceAdvisor} / 1000
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Handover & Delivery</span>
              <span className={`text-sm font-medium ${latestMonth.handoverDelivery >= 850 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.handoverDelivery} / 1000
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">NPS Metrics</h3>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">MG NPS</span>
              <span className={`text-sm font-medium ${latestMonth.mgNps >= 70 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.mgNps}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Dealer NPS</span>
              <span className={`text-sm font-medium ${latestMonth.dealerNps >= 70 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.dealerNps}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">SOP - Work & Charges</span>
              <span className={`text-sm font-medium ${latestMonth.sopWorkCharges >= 100 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.sopWorkCharges}%
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Complaint Resolution</h3>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">CCPTV</span>
              <span className={`text-sm font-medium ${latestMonth.ccptv <= 27 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.ccptv}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">CCR% Mech (≤ 3 days)</span>
              <span className={`text-sm font-medium ${parseInt(latestMonth.ccrMech) >= 90 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.ccrMech}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">PSF Contact %</span>
              <span className={`text-sm font-medium ${parseInt(latestMonth.psfContact) >= 90 ? 'text-success-500' : 'text-danger-500'}`}>
                {latestMonth.psfContact}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CsiDashboard;