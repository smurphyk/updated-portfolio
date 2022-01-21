import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../ThemeContext'

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <div className='transition duration-500 ease-in-out border border-teal-dark dark:border-teal-light border-2 rounded-md cursor-pointer p-2 px-3 hover:bg-teal-dark dark:hover:bg-teal-light text-teal-dark dark:text-teal-light hover:text-grey-light dark:hover:text-grey-dark'>
      {theme === 'dark' ? (
        <div
          className='flex items-center'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <p className='px-3'>Light Mode</p>
          <FaSun className='text-2xl' />
        </div>
      ) : (
        <div
          className='flex items-center'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <p className='px-3'>Dark Mode</p>
          <FaMoon className='text-2xl' />
        </div>
      )}
    </div>
  )
}

export default Toggle
