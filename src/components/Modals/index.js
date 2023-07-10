import React, { useState } from "react";
import {
  ModalspageName,
  Modalscon,
  ModalWrapper,
  YjbModal1,
  YjbModalContainer,
  InModalLayout,
  InModalLayout2,
  Modal1Content,
} from "./ModalsElements";
import { ButtonComponent } from "../Buttons/ButtonsElements";

const Modals = () => {
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const openModal1 = () => {
    setIsModalVisible1(true);
  };
  const closeModal1 = () => {
    setIsModalVisible1(false);
  };

  const openModal2 = () => {
    setIsModalVisible2(true);
  };
  const closeModal2 = () => {
    setIsModalVisible2(false);
  };

  const onBackDropCancel = () => {
    closeModal2();
  };
  return (
    <Modalscon id="modals">
      <ModalspageName>Modals</ModalspageName>
      <YjbModalContainer>
        <ButtonComponent
          backgroundColor="#29140F"
          width="180px"
          height="50px"
          fontSize="20px"
          fontWeight="700"
          color="#fc007a"
          borderRadius="10px"
          border="1px solid #fc007a"
          onClick={openModal1}
        >
          OPEN MODAL1
        </ButtonComponent>
        {isModalVisible1 && (
          <ModalWrapper>
            <YjbModal1>
              <Modal1Content>닫기 버튼 클릭</Modal1Content>
              <InModalLayout>
                <ButtonComponent
                  backgroundColor="#3C2F2B"
                  width="100px"
                  height="50px"
                  fontSize="16px"
                  fontWeight="400"
                  color="#fc007a"
                  borderRadius="10px"
                  border="1px solid #fc007a"
                  onClick={closeModal1}
                >
                  닫기
                </ButtonComponent>
                <ButtonComponent
                  backgroundColor="	#F9D68E"
                  width="100px"
                  height="50px"
                  fontSize="16px"
                  fontWeight="400"
                  color="#427EF6"
                  borderRadius="10px"
                  border="1px solid #42E9F6"
                >
                  확인
                </ButtonComponent>
              </InModalLayout>
            </YjbModal1>
          </ModalWrapper>
        )}
        <ButtonComponent
          backgroundColor="	#F9D68E"
          width="180px"
          height="50px"
          fontSize="20px"
          fontWeight="700"
          color="#427EF6"
          borderRadius="10px"
          border="1px solid #42E9F6"
          onClick={openModal2}
        >
          OPEN MODAL2
        </ButtonComponent>
        {isModalVisible2 && (
          <div onClick={onBackDropCancel}>
            <ModalWrapper>
              <YjbModal1>
                <Modal1Content>닫기 버튼 or 외부 화면 클릭</Modal1Content>
                <InModalLayout2>
                  <ButtonComponent
                    backgroundColor="#3C2F2B"
                    width="100px"
                    height="50px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#fc007a"
                    borderRadius="10px"
                    border="1px solid #fc007a"
                    onClick={closeModal2}
                  >
                    닫기
                  </ButtonComponent>
                </InModalLayout2>
              </YjbModal1>
            </ModalWrapper>
          </div>
        )}
      </YjbModalContainer>
    </Modalscon>
  );
};

export default Modals;
