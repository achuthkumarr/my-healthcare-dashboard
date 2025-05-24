// src/components/dashboard/AnatomyViewer.jsx
import React from 'react';
import { Heart } from 'lucide-react';
import HealthMetric from '../common/HealthMetric';
import { healthMetrics } from '../../data/mockData';

const AnatomyViewer = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="relative">
        {/* Human Body Visualization */}
        <div className="w-full h-96 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="relative">
            {/* Main Body */}
            <div className="w-32 h-80 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full relative">
              {/* Head */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-orange-300 rounded-full"></div>
              
              {/* Arms */}
              <div className="absolute top-12 -left-8 w-6 h-24 bg-orange-300 rounded-full rotate-12"></div>
              <div className="absolute top-12 -right-8 w-6 h-24 bg-orange-300 rounded-full -rotate-12"></div>
              
              {/* Legs */}
              <div className="absolute bottom-0 left-1/4 w-6 h-20 bg-orange-300 rounded-full"></div>
              <div className="absolute bottom-0 right-1/4 w-6 h-20 bg-orange-300 rounded-full"></div>
              
              {/* Health Indicators */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>Healthy Heart</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-4">
                <div className="bg-cyan-400 text-white px-3 py-1 rounded-full text-sm">
                  🦵 Healthy Leg
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Health Metrics List */}
        <div className="mt-6 space-y-4">
          {healthMetrics.map((metric) => (
            <HealthMetric key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomyViewer;