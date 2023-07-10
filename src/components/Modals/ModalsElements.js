import { styled } from "styled-components";

export const ModalspageName = styled.h1`
  text-align: center;
  background-color: antiquewhite;
`;
export const Modalscon = styled.div`
  background-color: #1f2123;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const YjbModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-top: 180px;
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
  gap: 10px;
  position: absolute;
  top: 430px;
  left: 270px;
`;
export const InModalLayout2 = styled.div`
  display: flex;
  gap: 10px;
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
