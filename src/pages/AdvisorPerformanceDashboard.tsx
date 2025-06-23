import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react';
import StatCard from '../components/StatCard';
import LoadAnalysisChart from '../components/LoadAnalysisChart';
import CustomerFlowSankeyChart from '../components/CustomerFlowSankeyChart';
import ComplaintAnalysisChart from '../components/ComplaintAnalysisChart';
import SentimentOutcomeChart from '../components/SentimentOutcomeChart';
import RepeatRepairCohortChart from '../components/RepeatRepairCohortChart';


// Dummy data for Customer Journey KPIs
const customerJourneyData = {
  avgCheckInTime: {
    value: '28 min',
    percentChange: -5,
  },
  onTimeDeliveryRate: {
    value: '92%',
    percentChange: 2.1,
  },
  repeatRepairRate: {
    value: '4.5%',
    percentChange: -10,
  },
  lostRevenue: {
    value: 52400,
    percentChange: 15,
  },
};

const CustomerJourneyDashboard: React.FC = () => {
  const [viewMode, setViewMode] = useState<'flow' | 'detailed'>('flow');
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="p-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold text-gray-800">Customer Journey Analysis</h1>
      </motion.div>

      {/* KPI Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <StatCard
            title="Avg. Check-in Time"
            value={customerJourneyData.avgCheckInTime.value}
            percentChange={customerJourneyData.avgCheckInTime.percentChange}
            icon={<Clock />}
            color="primary"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="On-Time Delivery Rate"
            value={customerJourneyData.onTimeDeliveryRate.value}
            percentChange={customerJourneyData.onTimeDeliveryRate.percentChange}
            icon={<CheckCircle />}
            color="success"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Repeat Repair Rate"
            value={customerJourneyData.repeatRepairRate.value}
            percentChange={customerJourneyData.repeatRepairRate.percentChange}
            icon={<AlertTriangle />}
            color="warning"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Lost Revenue"
            value={`₹${customerJourneyData.lostRevenue.value.toLocaleString('en-IN')}`}
            percentChange={customerJourneyData.lostRevenue.percentChange}
            icon={<DollarSign />}
            color="danger"
          />
        </motion.div>
      </motion.div>

      {/* Load Analysis Chart */}
      <motion.div className="mt-8" variants={itemVariants}>
        <LoadAnalysisChart />
      </motion.div>

      {/* Container for Toggle and Charts */}
      <motion.div className="relative mt-6" variants={itemVariants}>
        {/* View Toggle */}
        <div className="absolute top-4 right-4 z-10 flex items-center bg-gray-100/80 backdrop-blur-sm p-1 rounded-lg shadow-inner">
          <button
            onClick={() => setViewMode('flow')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all duration-200 ${
              viewMode === 'flow' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Flow View
          </button>
          <button
            onClick={() => setViewMode('detailed')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all duration-200 ${
              viewMode === 'detailed' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Detailed View
          </button>
        </div>

        {/* Conditional Chart Rendering */}
        <div>
          {viewMode === 'flow' ? (
            <div key="flow">
              <CustomerFlowSankeyChart />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16" key="detailed">
              <ComplaintAnalysisChart />
              <SentimentOutcomeChart />
            </div>
          )}
        </div>
      </motion.div>

      {/* Cohort Analysis Chart */}
      <motion.div className="mt-6" variants={itemVariants}>
        <RepeatRepairCohortChart />
      </motion.div>



    </motion.div>
  );
};

export default CustomerJourneyDashboard;