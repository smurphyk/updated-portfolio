import React from 'react'

const Background = ({ children }) => {
  return (
    <body className='bg-grey-light dark:bg-grey-dark transition-all'>
      {children}
    </body>
  )
}

export default Background
