
import React from 'react'
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import Navigation from './ui/navigation';

const Header = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <Navigation/>
        <div className="ml-auto flex items-center space-x-4">
        </div>
      </div>
    </header>
  )
}

export default Header