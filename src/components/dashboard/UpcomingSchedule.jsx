// src/components/dashboard/UpcomingSchedule.jsx
import React from 'react';
import { upcomingSchedule } from '../../data/mockData';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">The Upcoming Schedule</h3>
      
      {upcomingSchedule.map((schedule, index) => (
        <div key={index} className="mb-6">
          <div className="text-sm text-gray-500 mb-3">On {schedule.day}</div>
          <div className="grid grid-cols-2 gap-3">
            {schedule.appointments.map((apt, aptIndex) => (
              <div 
                key={aptIndex} 
                className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800 text-sm">{apt.name}</span>
                  <span className="text-lg">{apt.icon}</span>
                </div>
                <div className="text-sm text-gray-600">{apt.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;