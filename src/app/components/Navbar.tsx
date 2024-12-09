import React from 'react'
import Image from 'next/image'
import Navbartop from './Navbartop'
import Navbarmiddle from './Navbarmiddle'
import Navbarbottom from './Navbarbottom'

const Navbar = () => {
  return (
    <div>
      <Navbartop />
      <Navbarmiddle />
      <Navbarbottom />
    </div>
  )
}

export default Navbar
