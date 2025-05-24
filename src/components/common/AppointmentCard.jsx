// src/components/common/AppointmentCard.jsx
import React from 'react';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className={`p-4 rounded-lg transition-all duration-200 hover:shadow-md cursor-pointer ${appointment.color} ${
      appointment.color === 'bg-blue-600' ? 'text-white' : 'text-gray-800'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="font-semibold text-sm mb-1">{appointment.type}</div>
          <div className="text-sm opacity-90 mb-1">{appointment.time}</div>
          <div className="text-sm opacity-75">{appointment.doctor}</div>
        </div>
        <div className="text-2xl ml-3">{appointment.icon}</div>
      </div>
      
      {/* Status indicator */}
      <div className="mt-3 flex items-center justify-between">
        <div className={`px-2 py-1 rounded text-xs ${
          appointment.color === 'bg-blue-600' 
            ? 'bg-white bg-opacity-20 text-white' 
            : 'bg-gray-200 text-gray-600'
        }`}>
          {appointment.status || 'Scheduled'}
        </div>
        <div className="text-xs opacity-75">
          {appointment.duration || '2h'}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;