// src/components/dashboard/CalendarWidget.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AppointmentCard from '../common/AppointmentCard';
import { calendarData, appointments } from '../../data/mockData';

const CalendarWidget = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-sm text-gray-500">This Week</span>
          <h3 className="text-xl font-semibold text-gray-800">October 2021</h3>
        </div>
        <div className="flex items-center space-x-2">
          <ChevronLeft className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
          <ChevronRight className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
        </div>
      </div>
      
      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((day) => (
          <div key={day} className="text-center text-sm text-gray-500 font-medium">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {calendarData.map((date, index) => (
          <div key={index} className="text-center">
            <div className={`text-lg font-semibold mb-2 ${
              date.highlight ? 'text-blue-600' : 'text-gray-800'
            }`}>
              {date.day}
            </div>
            <div className="space-y-1">
              {date.times.map((time, timeIndex) => (
                <div 
                  key={timeIndex} 
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    date.highlight && timeIndex === 1 ? 
                    'bg-blue-600 text-white' : 
                    'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Appointment Cards */}
      <div className="space-y-3">
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;