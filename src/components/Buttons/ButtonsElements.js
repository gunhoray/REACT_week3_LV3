//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Buttons by 육정백

import { styled } from "styled-components";

export const Buttonspage = styled.div`
  background-color: #1f2123;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  padding-top: 230px;
  justify-content: center;
`;

export const ButtonsContainer =styled.div`
justify-content: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;
`

export const ButtonspageName = styled.h1`
  text-align: center;
  background-color: aliceblue;
`;

export const BtnLayout = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  gap: 80px;
  
`;

export const ButtonComponent = styled.button`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  cursor: pointer;
  margin-left: ${(props) => props.marginLeft};

  &:active {
    background-color: #fff;
  }
`;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Buttons by 육정백