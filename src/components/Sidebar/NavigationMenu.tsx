import { NavLink } from 'react-router-dom';
import type { IconType } from 'react-icons/lib';

import { RxDashboard } from 'react-icons/rx';
import { MdOutlineInventory2 } from 'react-icons/md';
import { BsCart2, BsPeople } from 'react-icons/bs';

const pages: { link: string; title: string; icon: IconType }[] = [
  {
    link: '/',
    title: 'Home',
    icon: RxDashboard
  },
  {
    link: '/inventory',
    title: 'Inventory',
    icon: MdOutlineInventory2
  },
  {
    link: '/order',
    title: 'Orders',
    icon: BsCart2
  },
  {
    link: '/customer',
    title: 'Customers',
    icon: BsPeople
  }
];

export default function NavigationMenu() {
  return (
    <>
      {pages.map((page) => {
        return (
          <NavLink
            key={page.title}
            to={page.link}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 border-gray-700 ${
                isActive && 'border-ie-4'
              }`
            }>
            <page.icon className="w-5 h-5" />
            <span className="mx-4 font-medium">{page.title}</span>
          </NavLink>
        );
      })}
    </>
  );
}
