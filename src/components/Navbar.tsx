import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className=' flex flex-row justify-end p-2 bg-green-50  dark:bg-gray-900 transition-colors duration-500'>
      <div>

      </div>
      <div>
        <ThemeToggle/>
      </div>
    </div>
  )
}

export default Navbar
