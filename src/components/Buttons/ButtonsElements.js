import { styled } from "styled-components";

export const Buttonspage = styled.div`
  background-color: #1f2123;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ButtonspageName = styled.h1`
  text-align: center;
  background-color: aliceblue;
`;

export const BtnLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 180px;
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
