import React, {useCallback, useEffect, useRef} from 'react'
import {  ModalWraper, Background, ModalContent, CloseModalButton  } from './ModalsElements'

const ModalIndex = ({showModal, setShowModal}) => {

  const modalRef = useRef();

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(e=>{
    if(e.key === 'Escape' && showModal){
      setShowModal(false)
    }
  },[setShowModal, showModal])

  useEffect(()=>{
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  },[keyPress])
  
  return (
    <>
    {showModal ? 
   <Background ref={modalRef} onClick={closeModal} >
      <ModalWraper showModal={showModal}>
        <ModalContent>
          <h1>Hi, I exist just for you.^^</h1>
          <p>I know, nice to meet you. are you having a good day?</p>
          <button onClick={()=>setShowModal(prev=>!prev)}>YES</button>
        </ModalContent>
        <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal(prev=>!prev)} />
      </ModalWraper>
    </Background> : null} 
    </>
  )
}
// Background 에서 고정된 화면에서의 시행되는 CSS요소 때문에 충돌이 일어 났음 
export default ModalIndex