import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LabelList } from 'recharts';
import { sentimentByOutcomeData } from '../data/customerJourneyData';

const processedData = sentimentByOutcomeData.map(item => ({
  ...item,
  // We make the 'not_returned' values negative to create the diverging chart
  not_returned: -item.not_returned,
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const returnedData = payload.find((p: any) => p.dataKey === 'returned');
    const notReturnedData = payload.find((p: any) => p.dataKey === 'not_returned');

    return (
      <div className="bg-white/90 backdrop-blur-md p-4 border border-gray-200 shadow-xl rounded-lg text-sm">
        <p className="font-bold text-gray-800 mb-2">{label} Sentiment</p>
        {returnedData && <p style={{ color: returnedData.fill }}>{`Returned: ${returnedData.value}`}</p>}
        {notReturnedData && <p style={{ color: notReturnedData.fill }}>{`Did Not Return: ${Math.abs(notReturnedData.value)}`}</p>}
      </div>
    );
  }
  return null;
};

const SentimentOutcomeChart: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-gray-100 p-6 rounded-xl shadow-sm h-full flex flex-col">
      <h3 className="text-lg font-bold text-gray-800">Sentiment vs. Retention</h3>
      <p className="text-sm text-gray-500 mb-4">How sentiment impacts customer return rates.</p>
      <div className="flex-grow w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={processedData}
            stackOffset="sign"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorReturned" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#a3e635" stopOpacity={0.9}/>
              </linearGradient>
              <linearGradient id="colorNotReturned" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#f87171" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <XAxis type="number" tickFormatter={(value) => Math.abs(value).toString()} />
            <YAxis type="category" dataKey="sentiment" width={80} tick={{ fill: '#374151' }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(235, 240, 245, 0.5)' }} />
            <Legend formatter={(value: string) => value.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())} />
            <Bar dataKey="returned" fill="url(#colorReturned)" stackId="a" radius={[0, 8, 8, 0]}>
              <LabelList dataKey="returned" position="right" formatter={(value: number) => value > 0 ? value : ''} />
            </Bar>
            <Bar dataKey="not_returned" fill="url(#colorNotReturned)" stackId="a" radius={[8, 0, 0, 8]}>
              <LabelList dataKey="not_returned" position="left" formatter={(value: number) => value < 0 ? Math.abs(value) : ''} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SentimentOutcomeChart;
