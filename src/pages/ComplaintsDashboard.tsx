import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Filter
} from 'lucide-react';

import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';
import { 
  complaintData, 
  getComplaintCountsByStatus,
  getComplaintCountsByType,
  complaintTrends
} from '../data';

const ComplaintsDashboard: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  // Get complaint counts
  const counts = getComplaintCountsByStatus();
  const totalComplaints = counts.resolved + counts.pending;
  const resolutionRate = Math.round((counts.resolved / totalComplaints) * 100);
  
  // Get complaints by type
  const complaintsByType = getComplaintCountsByType();
  const complaintTypeData = Object.keys(complaintsByType).map(type => ({
    name: type,
    value: complaintsByType[type]
  }));
  
  // Prepare data for priority distribution
  const priorityData = [
    { name: 'High', value: complaintData.filter(c => c.priority === 'High').length },
    { name: 'Medium', value: complaintData.filter(c => c.priority === 'Medium').length },
    { name: 'Low', value: complaintData.filter(c => c.priority === 'Low').length }
  ];
  
  // Prepare data for resolution time
  const resolutionTimeData = complaintData
    .filter(c => c.dateResolved)
    .map(c => {
      const reported = new Date(c.dateReported);
      const resolved = new Date(c.dateResolved || '');
      const daysDiff = Math.ceil((resolved.getTime() - reported.getTime()) / (1000 * 60 * 60 * 24));
      
      return {
        id: c.id,
        days: daysDiff
      };
    })
    .sort((a, b) => a.days - b.days);
  
  const avgResolutionTime = resolutionTimeData.reduce((sum, item) => sum + item.days, 0) / resolutionTimeData.length;
  
  // Filter complaints based on status
  const filteredComplaints = statusFilter === 'all' 
    ? complaintData 
    : complaintData.filter(c => c.status.toLowerCase() === statusFilter);
  
  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#83a6ed'];
  const PRIORITY_COLORS = {
    'High': '#ef4444',
    'Medium': '#f59e0b',
    'Low': '#10b981'
  };
  
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
        <h1 className="text-2xl font-bold mb-6">PSF Internal Complaints</h1>
      </motion.div>
      
      {/* Stat Cards Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Total Complaints" 
          value={totalComplaints} 
          icon={<AlertCircle className="text-primary-500" />}
          color="primary"
        />
        <StatCard 
          title="Resolved" 
          value={counts.resolved} 
          subValue={`${resolutionRate}%`}
          icon={<CheckCircle2 className="text-success-500" />}
          color="success"
        />
        <StatCard 
          title="Pending" 
          value={counts.pending} 
          icon={<Clock className="text-warning-500" />}
          color="warning"
        />
        <StatCard 
          title="Avg. Resolution Time" 
          value={avgResolutionTime.toFixed(1)} 
          subValue="days"
          icon={<AlertTriangle className="text-accent-500" />}
          color="accent"
        />
      </motion.div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">Complaints by Type</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={complaintTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {complaintTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">Monthly Complaint Trends</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={complaintTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="total" 
                  name="Total" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="resolved" 
                  name="Resolved" 
                  stroke="#82ca9d" 
                />
                <Line 
                  type="monotone" 
                  dataKey="pending" 
                  name="Pending" 
                  stroke="#ffc658" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      {/* More Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">Complaint Priority Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={priorityData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Complaints" fill="#8884d8">
                  {priorityData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={PRIORITY_COLORS[entry.name as keyof typeof PRIORITY_COLORS]} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-lg font-semibold mb-4">Resolution Time Distribution</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={resolutionTimeData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id" />
                <YAxis label={{ value: 'Days', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value} days`, 'Resolution Time']} />
                <Legend />
                <Bar dataKey="days" name="Days to Resolve" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      {/* Complaints Table */}
      <motion.div variants={itemVariants} className="card">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Complaint Details</h2>
          
          <div className="flex items-center mt-2 sm:mt-0">
            <Filter className="text-gray-500 mr-2" size={16} />
            <span className="mr-2 text-sm">Status:</span>
            <select
              className="px-2 py-1 border rounded-md text-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="resolved">Resolved</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
        
        <DataTable
          data={filteredComplaints}
          columns={[
            { header: 'ID', accessor: 'id' },
            { header: 'Type', accessor: 'type' },
            { header: 'Customer', accessor: 'customer' },
            { header: 'Vehicle', accessor: 'vehicle' },
            { header: 'Date Reported', accessor: 'dateReported' },
            { 
              header: 'Priority', 
              accessor: (row) => (
                <span className={`tag ${
                  row.priority === 'High' ? 'bg-danger-100 text-danger-800' :
                  row.priority === 'Medium' ? 'bg-warning-100 text-warning-800' :
                  'bg-success-100 text-success-800'
                }`}>
                  {row.priority}
                </span>
              )
            },
            { 
              header: 'Status', 
              accessor: (row) => (
                <span className={`tag ${
                  row.status === 'Resolved' ? 'bg-success-100 text-success-800' : 'bg-warning-100 text-warning-800'
                }`}>
                  {row.status}
                </span>
              )
            },
            { header: 'Assigned To', accessor: 'assignedTo' },
          ]}
        />
      </motion.div>
    </motion.div>
  );
};

export default ComplaintsDashboard;