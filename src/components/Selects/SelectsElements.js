import { styled } from "styled-components";
import Select from "react-select";

export const SelectPage = styled.div`
  background-color: #1f2123;
  height: 600px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px;
  justify-content: center;
  padding-top: 90px;
  display: block;
  position: relative;
`;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Select by 육정백
export const SelectContainer = styled.div`
  padding: 20px;
  padding-top: 70px;
  padding-bottom: 70px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  overflow: hidden;
 
`;

export const SelectElements = styled.div`
  position: absolute;
    top: 28%;
`

export const SelectBox = styled.div`
  color: #fff;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 350px;
  height: 30px;
  border: 2px solid #fc007a;
  padding: 20px 50px;
  border-radius: 8px;
`;

export const DropDownContainer = styled.div`
  background-color: #1f2123;
  width: 350px;
  top: 100%;
  left: 0;
  margin-top: 8px;
  border: 2px solid #fc007a;
  border-radius: 8px;
  z-index: 1;
`;

export const DropDownBox = styled.div`
  margin: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Select by 육정백

//>>>>>>>>>>>>>>>>>>>>>>>>>Select by 이건호
export const Select2Container = styled.div`
  padding: 20px;
  padding-top: 70px;
  padding-bottom: 70px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const SelectOption = styled(Select)`
  width: 350px;
`;
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Select by 이건호

