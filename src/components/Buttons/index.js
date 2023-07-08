import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import {
  ButtonspageName,
  Buttonspage,
  ButtonComponent,
  BtnLayout,
} from "./ButtonsElements";

const Buttons = () => {
  const onBtnAlert = () => {
    alert("버튼 만들기");
  };
  const onBtnPrompt = () => {
    if (window.prompt("애플 제품 씁니당 뭐 쓰시나용?")) {
      alert("멋지십니다!");
    }
  };
  return (
    <Buttonspage id="buttons">
      <ButtonspageName>Buttonspage</ButtonspageName>
      <BtnLayout>
        <ButtonComponent
          backgroundColor="black"
          width="280px"
          height="50px"
          fontSize="22px"
          fontWeight="900"
          color="#fc007a"
          borderRadius="10px"
          border="1px solid #fc007a"
          onClick={onBtnAlert}
        >
          Large Prime Button
        </ButtonComponent>
        <ButtonComponent
          backgroundColor="#29140F"
          width="180px"
          height="50px"
          fontSize="20px"
          fontWeight="700"
          color="#fc007a"
          borderRadius="10px"
          border="1px solid #fc007a"
        >
          MediumBtn
        </ButtonComponent>
        <ButtonComponent
          backgroundColor="#3C2F2B"
          width="100px"
          height="50px"
          fontSize="16px"
          fontWeight="400"
          color="#fc007a"
          borderRadius="10px"
          border="1px solid #fc007a"
        >
          SmallBtn
        </ButtonComponent>
      </BtnLayout>
      <BtnLayout>
        <ButtonComponent
          backgroundColor="#F6BB43"
          width="280px"
          height="50px"
          fontSize="22px"
          fontWeight="900"
          color="#427EF6"
          borderRadius="10px"
          border="1px solid #42E9F6"
          onClick={onBtnPrompt}
        >
          Large Icon Button
          <AppleIcon />
        </ButtonComponent>
        <ButtonComponent
          backgroundColor="	#F9D68E"
          width="180px"
          height="50px"
          fontSize="20px"
          fontWeight="700"
          color="#427EF6"
          borderRadius="10px"
          border="1px solid #42E9F6"
        >
          MediumBtn
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
          SmallBtn
        </ButtonComponent>
      </BtnLayout>
    </Buttonspage>
  );
};

export default Buttons;
