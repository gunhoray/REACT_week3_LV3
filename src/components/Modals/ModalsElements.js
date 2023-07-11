import { styled } from "styled-components";
import {MdClose} from 'react-icons/md'

export const ModalPage = styled.div`
  background-color: #1f2123;
  height: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px;
  padding-top: 70px;
  justify-content: center;
`;

export const ModalContainer = styled.div`
padding-top: 100px;
padding: 20px;
justify-content: center;
align-items: center;
height: 100vh;
`
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Modals by 이건호
// index.js
export const LGHModalModalContainer = styled.div`
  padding: 20px;
  padding-top: 70px;
  padding-bottom: 70px;
  margin: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
export const OpenModalButton = styled.button`
min-width: 100px;
padding: 16px 32px;
border-radius: 4px;
border: none;
background: #141414;
color: #fff;
font-size: 24px;
cursor: pointer;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fc007a;
    color: #fff;
}
`
// Modal2index.js & Modalindex
export const LghModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
`

export const LghModal = styled.div`
position: relative;
z-index: 2;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
`

export const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;

p {
    margin-bottom: 1rem;
}

button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    border-radius: 20px;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: #fc007a;
    color: #fff;
}
}
`

export const ModalWraper = styled.div`
width: 500px;
height: 300px;
background: #fff;
color: #000;
display: grid;
border-radius: 10px;
position: relative; 
`

export const CloseModalButton = styled(MdClose)`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

// -----------Modal2index
export const Modal2Background = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
`

export const Modal2Container = styled.div`
width: 500px;
height: 500px;
border-radius: 12px;
background-color: white;
box-shadow: black rgba(0,0,0,0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
padding: 25px;
`

export const Modal2Contents = styled.div`
padding-top: 135px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;

p {
    margin-bottom: 1rem;
}
`
export const Modal2ButtonsContainer = styled.div`
display: flex;
`

export const Modal2Btn1 = styled.button`
    border-radius: 20px;
    margin: 10px;
    width: 100px;
    padding: 10px 24px;
    background: #fc007a;
    color: #fff;
    border: none;
`

export const Modal2Btn2 = styled.button`
    border-radius: 20px;
    margin: 10px;
    width: 100px;
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
`
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Modals by 이건호

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Modals by 육정백 
export const YjbModalContainer = styled.div`
  padding: 20px;
  padding-top: 70px;
  padding-bottom: 70px;
  margin: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
`;
export const YjbModal1 = styled.div`
  width: 500px;
  height: 500px;
  border: 3px solid red;
  margin: 0 auto;
  background: #fff;
  z-index: 2;
  position: relative;
  top: 20%;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 15px;
`;

export const InModalLayout = styled.div`
  display: flex;
  position: absolute;
  top: 430px;
  left: 270px;
`;
export const InModalLayout2 = styled.div`
  display: flex;
  position: absolute;
  top: 430px;
  left: 360px;
`;
export const Modal1Content = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
`;
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Modals by 육정백