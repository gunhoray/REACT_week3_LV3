import React from 'react'
import { Modal2Background, Modal2Container, Modal2Contents, Container, Btn1, Btn2 } from './ModalsElements'

const Modal2index = ({setShowModal2}) => {
  return (
    <Modal2Background>
        <Modal2Container>
            <Modal2Contents>
                <h1>Wish to continue?</h1>
                <p>You came this far. You should move forward.</p>
                <Container>
                <Btn1 onClick={()=>setShowModal2(false)}>Cancel</Btn1>
                <Btn2 onClick={()=>setShowModal2(false)}>Continue</Btn2>
                </Container>
            </Modal2Contents>
        </Modal2Container>
    </Modal2Background>
  )
}

export default Modal2index;