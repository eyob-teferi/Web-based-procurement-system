'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PlusIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
  { name: 'Requsitions',
    href: '/admin-dashboard',
    icon: DocumentDuplicateIcon },
  { name: 'Bids',
    href: '/admin-dashboard/bids',
    icon: DocumentDuplicateIcon },
  {
    name: 'AssignAdmin',
    href: '/admin-dashboard/assign-admin',
    icon: PlusIcon,
  },
  {
    name: 'CreateDepartment',
    href: '/admin-dashboard/create-department',
    icon: PlusIcon,
  },
  { name: 'SetBudget',
    href: '/admin-dashboard/setbudget', 
    icon: CurrencyDollarIcon
   },
  { name: 'ManageAdmins',
    href: '/admin-dashboard/manage-admins', 
    icon: CurrencyDollarIcon
   },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}