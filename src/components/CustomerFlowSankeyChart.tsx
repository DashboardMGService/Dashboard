import React from 'react';
import { ResponsiveContainer, Sankey, Tooltip } from 'recharts';
import { customerFlowData } from '../data/customerJourneyData';

const colors = [
  '#ef4444', '#f97316', '#f59e0b', '#6b7280', // Complaint Types
  '#f43f5e', '#eab308', '#84cc16',             // Sentiments
  '#22c55e', '#ef4444'                          // Outcomes
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    // It's a link tooltip if it has a source and target
    if (payload[0].payload.source && payload[0].payload.target) {
      const { source, target, value } = payload[0].payload;
      return (
        <div className="bg-white/90 backdrop-blur-md p-4 border border-gray-200 shadow-xl rounded-lg text-sm">
          <p className="font-semibold">{`${source.name} → ${target.name}`}</p>
          <p className="text-gray-600">{`${value.toLocaleString()} customers`}</p>
        </div>
      );
    }
    // It's a node tooltip, let's show its total value
    if (payload[0].payload.name && payload[0].payload.value) {
      const { name, value } = payload[0].payload;
      return (
        <div className="bg-white/90 backdrop-blur-md p-4 border border-gray-200 shadow-xl rounded-lg text-sm">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-600">{`${value.toLocaleString()} total customers`}</p>
        </div>
      );
    }
  }
  return null;
};

const CustomerFlowSankeyChart: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-gray-100 p-6 rounded-xl shadow-sm h-full flex flex-col">
      <h3 className="text-lg font-bold text-gray-800">Full Customer Journey Flow</h3>
      <p className="text-sm text-gray-500 mb-4">From initial complaint to final retention outcome.</p>
      <div className="flex-grow w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <Sankey
            data={customerFlowData}
            nodePadding={50}
            margin={{ top: 20, right: 20, bottom: 20, left: 150 }}
            link={{ stroke: '#a1a1aa', strokeOpacity: 0.5 }}
            node={({ x, y, width, height, index, payload }) => (
              <g transform={`translate(${x},${y})`}>
                <rect x={0} y={0} width={width} height={height} fill={colors[index % colors.length]} rx={4} ry={4} />
                <text x={-6} y={height / 2} textAnchor="end" fill="#374151" className="font-medium text-sm">
                  {payload.name}
                </text>
              </g>
            )}
          >
            <Tooltip content={<CustomTooltip />} />
          </Sankey>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomerFlowSankeyChart;
