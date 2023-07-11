//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Modals by 이건호

import React from 'react'
import { LghModal, LghModalWrapper, Modal2Background, Modal2Container, Modal2Contents, Modal2ButtonsContainer, Modal2Btn1, Modal2Btn2 } from './ModalsElements'

const Modal2index = ({setShowModal2}) => {
  return (
    <LghModalWrapper>
    <LghModal>
    <Modal2Background>
        <Modal2Container>
            <Modal2Contents>
                <h1>Wish to continue?</h1>
                <p>You came this far. You should move forward.</p>
                <Modal2ButtonsContainer>
                <Modal2Btn1 onClick={()=>setShowModal2(false)}>Cancel</Modal2Btn1>
                <Modal2Btn2 onClick={()=>setShowModal2(false)}>Continue</Modal2Btn2>
                </Modal2ButtonsContainer>
            </Modal2Contents>
        </Modal2Container>
    </Modal2Background>
    </LghModal>
    </LghModalWrapper>
  )
}

export default Modal2index;
//<<<<<<<<<<<<<<<<<<<<<<<<<<<Modals by 이건호