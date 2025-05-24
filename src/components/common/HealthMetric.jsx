// src/components/common/HealthMetric.jsx
import React from 'react';

const HealthMetric = ({ metric }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'Lungs': return '🫁';
      case 'Teeth': return '🦷';
      case 'Bone': return '🦴';
      case 'Heart': return '❤️';
      case 'Brain': return '🧠';
      default: return '🏥';
    }
  };

  return (
    <div className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
        {getIcon(metric.name)}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="font-medium text-gray-800">{metric.name}</span>
          <span className="text-sm text-gray-500">{metric.date}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${metric.color}`}
            style={{ width: `${metric.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500">Progress</span>
          <span className="text-xs text-gray-600 font-medium">{metric.progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default HealthMetric;