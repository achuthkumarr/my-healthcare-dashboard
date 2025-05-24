import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css'
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Dashboard from "./components/dashboard/dashboard";
import AnatomyViewer from "./components/dashboard/AnatomyViewer";
import CalendarWidget from "./components/dashboard/CalendarWidget";
import UpcomingSchedule from "./components/dashboard/UpcomingSchedule";
import ActivityChart from "./components/dashboard/ActivityChart";
import StatsCards from "./components/dashboard/StatsCards";
import AppointmentCard from "./components/common/AppointmentCard";
import HealthMetric from "./components/common/HealthMetric";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet /> {/* This will render the current route component */}
        </main>
      </div>
    </div>
  );
}


function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Outlet />
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element:<Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "anatomyviewer", element: <AnatomyViewer /> },
      { path: "calendarwidget", element: <CalendarWidget /> },
      { path: "upcomingschedule", element: <UpcomingSchedule /> },
      { path: "activitychart", element: <ActivityChart /> },
      { path: "statscards", element: <StatsCards /> },
      {path: "appointmentcard", element: <AppointmentCard />},
      { path: "healthmetric", element: <HealthMetric /> },
    ],
  },
]);

function App() {
  return  <RouterProvider router={router} />;
  
}

export default App
