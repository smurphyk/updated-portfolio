import React from 'react'

import logo from './logo.png'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='flex flex-col items-start dark:border-white p-14'>
      <div className='flex flex-col items-center mb-10'>
        <img src={logo} alt='logo' width={75} />
        <p className='font-bold text-3xl text-teal-dark dark:text-teal-light'>
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
