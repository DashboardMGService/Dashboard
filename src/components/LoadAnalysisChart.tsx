import React, { useMemo, useState } from 'react';
import { ComposedChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { gateInThroughputData, checkInHeatmapData } from '../data/customerJourneyData';
import { Calendar, BarChartHorizontal } from 'lucide-react';

type ViewMode = 'day' | 'hour';
type ChartView = 'trend' | 'hourlyGrid';
type SelectedWeek = '1' | '2' | '3' | 'all';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold text-gray-700">{label}</p>
        <p className="text-sm text-blue-500">{`This Week: ${payload[0].value}`}</p>
        <p className="text-sm text-gray-400">{`Last Week: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const getHeatmapColor = (value: number, max: number) => {
  if (value === 0) return 'bg-gray-100 text-gray-500';
  const percentage = value / max;
  if (percentage < 0.2) return 'bg-blue-100 text-blue-800';
  if (percentage < 0.4) return 'bg-blue-200 text-blue-800';
  if (percentage < 0.6) return 'bg-blue-400 text-white';
  if (percentage < 0.8) return 'bg-blue-500 text-white';
  return 'bg-blue-600 text-white';
};

const LoadAnalysisChart: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('day');
  const [chartView, setChartView] = useState<ChartView>('trend');
  const [selectedWeek, setSelectedWeek] = useState<SelectedWeek>('all');

  const trendChartData = useMemo(() => {
    if (viewMode === 'day') {
      return gateInThroughputData.byDay.thisWeek.map((item, index) => ({
        name: item.day,
        thisWeek: item.checkIns,
        lastWeek: gateInThroughputData.byDay.lastWeek[index].checkIns,
      }));
    } else {
      return gateInThroughputData.byHour.thisWeek.map((item, index) => ({
        name: `${item.hour}:00`,
        thisWeek: item.checkIns,
        lastWeek: gateInThroughputData.byHour.lastWeek[index].checkIns,
      }));
    }
  }, [viewMode]);

  const heatmapDisplayData = useMemo(() => {
    const { weeks } = checkInHeatmapData;
    if (selectedWeek !== 'all') {
      return weeks[selectedWeek];
    }
    const allWeeksData = weeks['1'].map((row, rIdx) =>
      row.map((_, cIdx) => weeks['1'][rIdx][cIdx] + weeks['2'][rIdx][cIdx] + weeks['3'][rIdx][cIdx])
    );
    return allWeeksData;
  }, [selectedWeek]);

  const maxHeatmapValue = useMemo(() => {
    const max = Math.max(...heatmapDisplayData.flat());
    return max === 0 ? 1 : max; // Avoid division by zero
  }, [heatmapDisplayData]);

  return (
    <div className="bg-white/60 backdrop-blur-sm border border-gray-100 p-4 sm:p-6 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">Gate-in Throughput</h3>
          <p className="text-sm text-gray-500">Check-in comparison and hourly distribution</p>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full p-1 mt-2 sm:mt-0 self-start sm:self-center">
          {chartView === 'trend' ? (
            <>
              <button onClick={() => setViewMode('day')} className={`px-3 py-1 text-sm font-semibold rounded-full ${viewMode === 'day' ? 'bg-white shadow-sm' : 'text-gray-500'}`}>Day</button>
              <button onClick={() => setViewMode('hour')} className={`px-3 py-1 text-sm font-semibold rounded-full ${viewMode === 'hour' ? 'bg-white shadow-sm' : 'text-gray-500'}`}>Hour</button>
            </>
          ) : (['1', '2', '3', 'all'] as SelectedWeek[]).map(w => (
            <button key={w} onClick={() => setSelectedWeek(w)} className={`px-3 py-1 text-sm font-semibold rounded-full capitalize ${selectedWeek === w ? 'bg-white shadow-sm' : 'text-gray-500'}`}>
              {w === 'all' ? 'All' : `Wk ${w}`}
            </button>
          ))}
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          <button 
            onClick={() => setChartView(chartView === 'trend' ? 'hourlyGrid' : 'trend')}
            className="p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-200"
            aria-label={chartView === 'trend' ? 'Switch to heatmap view' : 'Switch to trend view'}
          >
            {chartView === 'trend' ? <Calendar size={18} /> : <BarChartHorizontal size={18} />}
          </button>
        </div>
      </div>

      {chartView === 'trend' ? (
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={trendChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <defs>
              <linearGradient id="colorThisWeek" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="colorLastWeek" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} stroke="#d1d5db" />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} stroke="#d1d5db" allowDecimals={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType="circle" iconSize={10} wrapperStyle={{ fontSize: '14px', color: '#374151' }} />
            <Area type="monotone" dataKey="lastWeek" name="Last Week" stroke="#ec4899" fill="url(#colorLastWeek)" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
            <Area type="monotone" dataKey="thisWeek" name="This Week" stroke="#3b82f6" fill="url(#colorThisWeek)" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center border-collapse">
            <caption className="sr-only">Weekly Check-in Heatmap by Time and Day</caption>
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="p-1 sm:p-2 font-semibold text-gray-600 w-24 text-xs sm:text-sm sticky left-0 bg-gray-50 z-10">Time</th>
                {checkInHeatmapData.weekdays.map(day => <th scope="col" key={day} className="p-1 sm:p-2 font-semibold text-gray-600 text-xs sm:text-sm">{day}</th>)}
              </tr>
            </thead>
            <tbody className="relative">
              {checkInHeatmapData.timeBins.map((bin, rIdx) => (
                <tr key={bin} className="border-b border-gray-200">
                  <th scope="row" className="p-1 sm:p-2 font-medium text-gray-800 bg-gray-50 text-xs sm:text-sm sticky left-0 z-10">{bin}</th>
                  {heatmapDisplayData[rIdx].map((value, cIdx) => (
                    <td key={cIdx} className="p-0.5">
                      <div className={`w-full h-full p-1 sm:p-2 rounded-md font-bold text-xs sm:text-sm ${getHeatmapColor(value, maxHeatmapValue)}`}>
                        {value > 0 ? value : ''}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-center items-center gap-6 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#4f46e5]"></span>
          <span>This Week</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#f43f5e]"></span>
          <span>Last Week</span>
        </div>
      </div>
    </div>
  );
};

export default LoadAnalysisChart;
