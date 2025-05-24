const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'History', icon: '📝' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Appointments', icon: '📋' },
    { name: 'Statistics', icon: '📈' },
    { name: 'Chat', icon: '💬' },
    { name: 'Support', icon: '☎️' },
    { name: 'Setting', icon: '⚙️' }
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 p-6">
      <div className="flex items-center mb-8">
        <span className="text-2xl font-bold text-cyan-500">Health</span>
        <span className="text-2xl font-normal text-gray-800">care.</span>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm text-gray-400 mb-4">GENERAL</div>
        {menuItems.slice(0, 5).map((item, index) => (
          <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
            item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
          }`}>
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
        
        <div className="text-sm text-gray-400 mb-4 mt-8">TOOLS</div>
        {menuItems.slice(5).map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50">
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;