import React,{useEffect, useState} from 'react'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = () => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav =()=>{
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>LV#3</NavLogo>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="buttons" 
                    >Buttons</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='inputs'>Inputs</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='modals'>Modals</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='selects'>Selects</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink scrollNav={scrollNav} to="/" onClick={toggleHome}>Show Love</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;