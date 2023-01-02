import React from 'react'
import HeaderNav from '../../shared/HeaderNav'
import HeroContent from './HeroContent'

const Header = () => {
  return (
    <div className='bg-red-50 w-screen overflow-hidden '>
      <HeaderNav />
      <HeroContent />
    </div>
  )
}

export default Header
