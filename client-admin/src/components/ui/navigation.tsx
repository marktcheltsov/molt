import React from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

const Navigation = () => {
    const { pathname } = useLocation();
    const routes = [
        {
          href: `/overview`,
          label: 'Overview',
          active: pathname === `/overview`,
        },
        {
          href: `/catygories`,
          label: 'Catygories',
          active: pathname === `/catygories`,
        },
        {
          href: `/products`,
          label: 'Products',
          active: pathname === `/products`,
        },
        {
          href: `/orders`,
          label: 'Orders',
          active: pathname === `/orders`,
        }
    ]
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6 mx-6'>
    {routes.map((route) => (
    <Link
      key={route.href}
      to={route.href}
      className={cn(
        'text-sm font-bold transition-colors hover:text-primary',
        route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
      )}
    >
      {route.label}
    </Link>))}
    </nav>
  )
}

export default Navigation