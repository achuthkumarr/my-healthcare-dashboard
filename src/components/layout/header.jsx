import { Search, Bell, User, Plus } from 'lucide-react';
const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
          <Plus className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};
export default Header;