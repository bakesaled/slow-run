import { NavItem } from './nav-item';

export type SidenavUi = {
  isOpen?: boolean;
  navItems?: NavItem[];
};

export const SIDENAV_UI_IS_OPEN = true;
export const SIDENAV_UI_NAV_ITEMS: NavItem[] = [
  {
    text: 'dashboard',
    link: 'dashboard',
    icon: 'dashboard',
  },
  {
    text: 'activities',
    link: 'activities',
    icon: 'directions_run',
  },
];
