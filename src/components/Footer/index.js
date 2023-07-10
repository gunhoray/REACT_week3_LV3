//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Footer by 이건호
// 전체 페이지의 footer를 구현

import React from 'react'
import { useState, useEffect } from 'react';
import { FooterWhole, FooterContainer, FooterLinks, FooterMenu,FooterItem, FooterBtnLink, FooterBtn } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
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
    <FooterWhole>
        <FooterContainer>
        <FooterBtn>
        <FooterBtnLink to='/' onClick={toggleHome}>To Main</FooterBtnLink>
        </FooterBtn>
        <FooterMenu>
          <FooterItem>
            <FooterLinks to="buttons" 
            >Buttons</FooterLinks>
          </FooterItem>
          <FooterItem>
            <FooterLinks to='inputs'>Inputs</FooterLinks>
          </FooterItem>
          <FooterItem>
            <FooterLinks to='modals'>Modals</FooterLinks>
          </FooterItem>
          <FooterItem>
            <FooterLinks to='selects'>Selects</FooterLinks>
          </FooterItem>
        </FooterMenu>
        <FooterBtn>
            <FooterBtnLink scrollNav={scrollNav} to="/" onClick={toggleHome}>Thank you</FooterBtnLink>
        </FooterBtn>
    </FooterContainer>
    </FooterWhole>
  )
}

export default Footer;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Footer by 이건호