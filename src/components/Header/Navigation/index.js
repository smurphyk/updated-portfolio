import React from 'react'

const Navigation = () => {
  const links = ['About', 'Work', 'Resume']
  return (
    <div className='flex flex-col'>
      {links.map((link) => (
        <ul key={link}>
          <li className='py-10 text-2xl text-teal-light dark:text-teal-dark'>
            {link}
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Navigation
