import React from 'react';
import AnatomyViewer from './AnatomyViewer';
import CalendarWidget from './CalendarWidget';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityChart from './ActivityChart';
import StatsCards from './StatsCards';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards Row */}
      <StatsCards />
      
      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Anatomy Viewer & Activity Chart */}
        <div className="lg:col-span-1 space-y-6">
          <AnatomyViewer />
          <ActivityChart />
        </div>
        
        {/* Middle Column - Calendar */}
        <div className="lg:col-span-1">
          <CalendarWidget />
        </div>
        
        {/* Right Column - Upcoming Schedule */}
        <div className="lg:col-span-1">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;