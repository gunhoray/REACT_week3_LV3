//>>>>>>>>>>>>>>>>>>>>>>>>>>>FacePage by 이건호
// Adobe Illustrator의 Illustration 파일 변환 후, 웹에 적용하는 방법을 구현했습니다.

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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FacePage by 이건호