import React from 'react';
import { TrendingUp, TrendingDown, Users, Calendar, Heart, Activity } from 'lucide-react';

const statsData = [
  {
    title: 'Total Patients',
    value: '1,234',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    title: 'Appointments Today',
    value: '28',
    change: '+5%',
    trend: 'up',
    icon: Calendar,
    color: 'bg-green-500'
  },
  {
    title: 'Health Score',
    value: '92%',
    change: '-2%',
    trend: 'down',
    icon: Heart,
    color: 'bg-red-500'
  },
  {
    title: 'Active Cases',
    value: '156',
    change: '+8%',
    trend: 'up',
    icon: Activity,
    color: 'bg-purple-500'
  }
];

const StatsCard = ({ title, value, change, trend, icon: Icon, color }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <div className="flex items-center mt-2">
          {trend === 'up' ? (
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
          )}
          <span className={`text-sm font-medium ${
            trend === 'up' ? 'text-green-500' : 'text-red-500'
          }`}>
            {change}
          </span>
          <span className="text-sm text-gray-500 ml-1">vs last week</span>
        </div>
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;