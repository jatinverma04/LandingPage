import React from 'react'
import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-m">
        <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <div className="text-3xl font-bold">MobiusEngine</div>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li className="hover:text-blue-600 cursor-pointer font-bold">Home</li>
            <li className="hover:text-blue-600 cursor-pointer font-bold">Features</li>
            <li className="hover:text-blue-600 cursor-pointer font-bold">About</li>
            <li className="hover:text-blue-600 cursor-pointer font-bold">Contact</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header
