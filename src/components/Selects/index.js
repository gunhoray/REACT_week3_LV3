import React, { useState } from "react";
import {
  SelectOption,
  Select2Container,
  SelectElements,
  DropDownContainer,
  DropDownBox,
  SelectPage,
  SelectContainer,
  SelectBox,
} from "./SelectsElements";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Selects = () => {
 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Select by 육정백
  const [isOpen, setIsOpen] = useState(false);
 
  const [menu, setMenu] = useState([
    { id: 1, title: "리액트" },
    { id: 2, title: "자바" },
    { id: 3, title: "스프링" },
    { id: 4, title: "넥스트" },
  ]);
    const [selectedItem, setSelectedItem] = useState(menu[0]);

    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsOpen(false);
    };
  
   
    const toggleDivAndIcon = () => {
      setIsOpen(!isOpen);
    };
 //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Select by 육정백

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Select by 이건호 with use of library 
const options = [
  { id: 1, value: "리액트", label: "리액트" },
  { id: 2, value: "자바", label: "자바" },
  { id: 3, value: "스프링", label: "스프링" },
  { id: 4, value: "넥스트", label: "넥스트" },
];

const handleChange = (selectedOption) => {
  console.log("handleChange", selectedOption);
};
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Select by 이건호
  return (
    <SelectPage id="selects">
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Select by 육정백 */}
{/* 부모 컴포넌트에 overflow:hidden 속성이 있다고 하더라도 select는 가려지지 않는 해결방안 position: absolute와 relative의 관계로 구현*/}
     <SelectContainer>
        <SelectElements>
        <SelectBox onClick={toggleDivAndIcon}>
          {selectedItem.title}
          <ChevronLeftIcon
            style={{ transform: isOpen ? "rotate(-90deg)" : "" }}
          />
        </SelectBox>
     
       {isOpen &&  <DropDownContainer>
          {menu.map((item) => {
            return (
              <DropDownBox
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                {item.title}
              </DropDownBox>
            );
          })}
        </DropDownContainer>}
        </SelectElements>   
      </SelectContainer>
 {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Select by 육정백   */}
{/* >>>>>>>>>>>>>>>>>>>>>>>>>Select by 이건호 with use of library  */}
      <Select2Container>
      <SelectOption
          style={{
            width: "50px",
            padding: "10px"
          }}
          options={options}
          onChange={handleChange}
        />
      </Select2Container>
{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Select by 이건호 */}
    </SelectPage>
  );
};

export default Selects;
