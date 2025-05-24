// src/data/mockData.js

export const healthMetrics = [
  { 
    id: 1, 
    name: 'Lungs', 
    date: '26 Oct 2021', 
    progress: 75, 
    color: 'bg-red-400',
    status: 'Good'
  },
  { 
    id: 2, 
    name: 'Teeth', 
    date: '26 Oct 2021', 
    progress: 85, 
    color: 'bg-green-400',
    status: 'Excellent'
  },
  { 
    id: 3, 
    name: 'Bone', 
    date: '26 Oct 2021', 
    progress: 65, 
    color: 'bg-orange-400',
    status: 'Fair'
  }
];

export const calendarData = [
  { day: 25, times: ['10:00', '11:00', '12:00'] },
  { day: 26, times: ['08:00', '09:00', '10:00'], highlight: true },
  { day: 27, times: ['12:00', '13:00'] },
  { day: 28, times: ['10:00', '11:00'] },
  { day: 29, times: ['14:00', '16:00'] },
  { day: 30, times: ['12:00', '14:00', '15:00'], highlight: true },
  { day: 31, times: ['09:00', '10:00', '11:00'] }
];

export const appointments = [
  {
    id: 1,
    type: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    color: 'bg-blue-600',
    icon: '🦷',
    status: 'Confirmed',
    duration: '2h'
  },
  {
    id: 2,
    type: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    color: 'bg-purple-200',
    icon: '💪',
    status: 'Pending',
    duration: '1h'
  }
];

export const upcomingSchedule = [
  {
    day: 'Thursday',
    appointments: [
      { 
        id: 1,
        name: 'Health checkup complete', 
        time: '11:00 AM', 
        icon: '✏️',
        type: 'Checkup'
      },
      { 
        id: 2,
        name: 'Ophthalmologist', 
        time: '14:00 PM', 
        icon: '👁️',
        type: 'Specialist'
      }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      { 
        id: 3,
        name: 'Cardiologist', 
        time: '12:00 PM', 
        icon: '❤️',
        type: 'Specialist' 
      },
      { 
        id: 4,
        name: 'Neurologist', 
        time: '16:00 PM', 
        icon: '🧠',
        type: 'Specialist'
      }
    ]
  }
];

export const activityData = [
  { day: 'Mon', value1: 40, value2: 60, date: '2021-10-25' },
  { day: 'Tues', value1: 80, value2: 45, date: '2021-10-26' },
  { day: 'Wed', value1: 35, value2: 70, date: '2021-10-27' },
  { day: 'Thurs', value1: 65, value2: 85, date: '2021-10-28' },
  { day: 'Fri', value1: 90, value2: 40, date: '2021-10-29' },
  { day: 'Sat', value1: 45, value2: 75, date: '2021-10-30' },
  { day: 'Sun', value1: 70, value2: 55, date: '2021-10-31' }
];

export const menuItems = [
  { 
    id: 1,
    name: 'Dashboard', 
    icon: '📊', 
    path: '/dashboard',
    active: true 
  },
  { 
    id: 2,
    name: 'History', 
    icon: '📝',
    path: '/history'
  },
  { 
    id: 3,
    name: 'Calendar', 
    icon: '📅',
    path: '/calendar'
  },
  { 
    id: 4,
    name: 'Appointments', 
    icon: '📋',
    path: '/appointments'
  },
  { 
    id: 5,
    name: 'Statistics', 
    icon: '📈',
    path: '/statistics'
  },
  { 
    id: 6,
    name: 'Chat', 
    icon: '💬',
    path: '/chat'
  },
  { 
    id: 7,
    name: 'Support', 
    icon: '☎️',
    path: '/support'
  },
  { 
    id: 8,
    name: 'Settings', 
    icon: '⚙️',
    path: '/settings'
  }
];

export const patients = [
  {
    id: 1,
    name: 'John Doe',
    age: 35,
    condition: 'Hypertension',
    lastVisit: '2021-10-25',
    nextAppointment: '2021-11-05'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    condition: 'Diabetes',
    lastVisit: '2021-10-20',
    nextAppointment: '2021-11-10'
  }
];

export const doctors = [
  {
    id: 1,
    name: 'Dr. Cameron Williamson',
    specialty: 'Dentistry',
    experience: '10 years',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Dr. Kevin Djones',
    specialty: 'Physiotherapy',
    experience: '8 years',
    rating: 4.6
  }
];
