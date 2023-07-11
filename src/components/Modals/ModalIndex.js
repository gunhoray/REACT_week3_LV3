//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Modals by 이건호

import React, {useCallback, useEffect, useRef} from 'react'
import { LghModal, LghModalWrapper, ModalWraper, ModalContent, CloseModalButton  } from './ModalsElements'

const ModalIndex = ({showModal, setShowModal}) => {

  const modalRef = useRef();

  const closeModal = () => {
      setShowModal(false);
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
       <LghModalWrapper ref={modalRef} onClick={closeModal} >
          <LghModal>
              <ModalWraper showModal={showModal}>
                  <ModalContent>
                      <h1>Hi.^^</h1>
                      <p>Nice to meet you. Are you having a good day?</p>
                      <button onClick={()=>setShowModal(prev=>!prev)}>YES</button>
                  </ModalContent>
                  <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal(prev=>!prev)} />
              </ModalWraper>
        </LghModal>
    </LghModalWrapper>
    : null} 
    </>
  )
}
// Background 에서 고정된 화면에서의 시행되는 CSS요소 때문에 충돌이 일어 났음 
export default ModalIndex

//<<<<<<<<<<<<<<<<<<<<<<<<<<<Modals by 이건호