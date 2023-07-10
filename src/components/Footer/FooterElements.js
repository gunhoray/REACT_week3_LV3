import { styled } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const FooterWhole = styled.nav`
background: #fc007a;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transtion: 0.8s all ease;
}
`

export const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
margin-right: 10px;
`

export const FooterMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
 display: none;    
}
`

export const FooterItem = styled.li`
height:80px;
`

export const FooterLinks = styled(LinkScroll)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

 &.active {
    /* border-bottom: 3px solid #01bf71; */
    background-color: #01bf71;
 }
`

export const FooterBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: flex;
}
`

export const FooterBtnLink = styled(LinkRouter)`
border-radius: 50px;
background: #1f2123;
font-size: 16px;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`