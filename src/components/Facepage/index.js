import React from 'react'
import { Facepagecon, Facepageicon, ImgWrap } from './FacepageElements';
import img from '../../components/Facepage/bumforlv3.svg'

const Facepage = () => {
  return (
    <Facepagecon>
      <ImgWrap>
      <Facepageicon src={img} alt='bum' ></Facepageicon>
      </ImgWrap>
    </Facepagecon>
  )
}

export default Facepage;