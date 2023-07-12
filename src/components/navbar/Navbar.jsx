
import React from 'react'
import { Hamburger, Logo, Nav, Menu, MenuLink } from './NavbarStyles';
import { useState } from 'react';
//import {GiHamburgerMenu} from "react-icons/gi"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo  to="/home" >
        <i>{"<yummy>"}</i>
        <span> recipes</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
        {/* <GiHamburgerMenu/> */}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink 
        onMouseUp={()=>sessionStorage.clear()}
         to="/about">About</MenuLink>
        <MenuLink to="/contact">Contact</MenuLink>
        {!isOpen ? 
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/">Logout</MenuLink>
        :
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/">Login</MenuLink>
      }
      </Menu>
    </Nav>
  )
}

export default Navbar

/* BsEmojiSunglasses */


/* {!isOpen ? 
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/">Logout</MenuLink>
        :
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/">Login</MenuLink>
      } */