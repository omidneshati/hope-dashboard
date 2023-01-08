// array of objects includes name of page, icon of page and link

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
          <li key={page.title}>
            <i>
              <page.icon />
            </i>
            <NavLink to={page.link}>{page.title}</NavLink>
          </li>
        );
      })}
    </>
  );
}
