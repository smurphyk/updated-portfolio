import React from 'react'

import logo from './logo.png'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='flex flex-col items-start bg-grey-light p-14 h-screen w-1/5 border-r-2 border-teal-dark dark:border-teal-light'>
      <div className='flex flex-col items-center mb-10'>
        <img
          src={logo}
          alt='logo'
          width={75}
          className='border-2 rounded-full border-teal-dark'
        />
        <p className='font-bold mt-5 text-3xl text-teal-light dark:text-teal-dark'>
          Sean Murphy
        </p>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
