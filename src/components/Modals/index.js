import React,{useState} from 'react'
import { ModalspageName, Modalscon, ModalContainer, ModalButton } from './ModalsElements';
import ModalIndex from './ModalIndex';
import Modal2index from './Modal2index';

const Modals = () => {

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  
  const [showModal2, setShowModal2] = useState(false)

  return (
    <>
    <Modalscon id='modals'>
    
    <ModalContainer>

    <ModalButton onClick={()=>{setShowModal2(true);}}>A Modal2 for U</ModalButton>
    {showModal2 && <Modal2index setShowModal2={setShowModal2}/>}
  

    <ModalButton onClick={openModal}>A Modal for U</ModalButton>
    <ModalIndex showModal={showModal} setShowModal={setShowModal}/>

    </ModalContainer>
    </Modalscon>
    </>
  )
}

export default Modals;