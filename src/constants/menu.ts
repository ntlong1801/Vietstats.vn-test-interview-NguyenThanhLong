import {
  BillManagementIcon,
  CalendarIcon,
  ClassManagementIcon,
  CourseManagementIcon,
  DashboardIcon,
  SettingIcon,
  StudentManagementIcon,
  TutorManagementIcon,
} from '@/assets/icons';

export const MENU_LIST = [
  {
    id: 0,
    title: 'Dashboard',
    route: '/',
    icon: DashboardIcon,
  },
  {
    id: 1,
    title: 'Calendar',
    route: '/calendar',
    icon: CalendarIcon,
  },
  {
    id: 2,
    title: 'Course Management',
    route: '/course-management',
    icon: CourseManagementIcon,
  },
  {
    id: 3,
    title: 'Class Management',
    route: '/class-management',
    icon: ClassManagementIcon,
  },
  {
    id: 4,
    title: 'Tutor Management',
    route: '/tutor-management',
    icon: TutorManagementIcon,
  },
  {
    id: 5,
    title: 'Student Management',
    route: '/student-management',
    icon: StudentManagementIcon,
  },
  {
    id: 6,
    title: 'Bill Management',
    route: '/bill-management',
    icon: BillManagementIcon,
  },
  {
    id: 7,
    title: 'Settings',
    route: '/settings',
    icon: SettingIcon,
  },
];
