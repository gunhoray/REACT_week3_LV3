//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Inputs and add button by 육정백

import React, { useRef, useState } from "react";
import {
  InputResultContainer,
  InputResults,
  InputsPage,
  InputStage,
  InputContainer,
} from "./InputsElements";
import { ButtonComponent } from "../Buttons/ButtonsElements";

const Inputs = () => {
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(null);
  const nameRef = useRef();
  const priceRef = useRef();

  const [records, setRecords] = useState([]);

  const onNameChange = (e) => {
    setAuthor(e.target.value);
  };
  //
  const onPriceChange = (e) => {
    let value = Number(e.target.value.replace(/[^\d]/g, ""));
    let numberWithCommas = parseInt(value).toLocaleString();
    if (value === isNaN(value)) {
      return;
    }
    setPrice(numberWithCommas);
  };

  const onBtnPrint = (e) => {
    e.preventDefault();
    if (author < 2) {
      nameRef.current.focus();
      return;
    }
    if (price < 5) {
      priceRef.current.focus();
      return;
    }
    alert(
      `작성자는 ${author}님, 가격은 ${price}입니다. 밑의 화면에서 출력된 정보를 보실 수 있습니다.`
    );
    const newRecord={
      author,
      price,
    }
    setRecords([...records, newRecord]);
    setAuthor("");
    setPrice("");
    nameRef.current.focus();
  };

  return (
    <InputsPage id="inputs">
      <InputContainer>
        <form onSubmit={onBtnPrint}>
          <InputStage
            value={author}
            placeholder="이름을 입력해주세요"
            ref={nameRef}
            onChange={onNameChange}
          />
          <InputStage
            value={price}
            placeholder="가격을 입력해주세요"
            ref={priceRef}
            onChange={onPriceChange}
          />
          <ButtonComponent
            backgroundColor="#29140F"
            width="100px"
            height="35px"
            fontSize="15px"
            fontWeight="700"
            color="#fc007a"
            borderRadius="10px"
            border="1px solid #fc007a"
            marginLeft="20px"
            onClick={onBtnPrint}
          >
            CLICK
          </ButtonComponent>
        </form>
      </InputContainer>
  {/* >>>>>>>>>>>>>>>>>>>>>>Input의 result를 rendering 구현 by 이건호 */}
      <InputResultContainer>
      <div>
      {records.map((record, index) => (
          <InputResults key={index}>
            {record.author} : {record.price}
          </InputResults>
        ))}
      </div>
      </InputResultContainer>
  {/* <<<<<<<<<<<<<<<<<<<<<Input의 result를 rendering 구현 by 이건호 */}
    </InputsPage>
  );
};

export default Inputs;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Inputs and add button by 육정백