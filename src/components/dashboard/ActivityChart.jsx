// src/components/dashboard/ActivityChart.jsx
import React from 'react';
import { activityData } from '../../data/mockData';

const ActivityChart = () => {
  const maxValue = Math.max(...activityData.flatMap(d => [d.value1, d.value2]));
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Activity</h3>
        <span className="text-sm text-gray-500">3 appointments this week</span>
      </div>
      
      <div className="flex items-end space-x-4 h-40">
        {activityData.map((data, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex space-x-1 items-end h-32">
              <div 
                className="bg-cyan-400 rounded-t hover:bg-cyan-500 transition-colors cursor-pointer"
                style={{ 
                  height: `${(data.value1 / maxValue) * 100}%`,
                  width: '8px'
                }}
                title={`Value: ${data.value1}`}
              ></div>
              <div 
                className="bg-blue-600 rounded-t hover:bg-blue-700 transition-colors cursor-pointer"
                style={{ 
                  height: `${(data.value2 / maxValue) * 100}%`,
                  width: '8px'
                }}
                title={`Value: ${data.value2}`}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{data.day}</span>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-cyan-400 rounded"></div>
          <span className="text-sm text-gray-600">Morning</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded"></div>
          <span className="text-sm text-gray-600">Evening</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;