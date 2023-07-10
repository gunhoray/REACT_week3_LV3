import React, { useState } from "react";
import {
  SelectspageName,
  Selectcon,
  SelectContainer,
  SelectBox,
  DropDownContainer,
  DropDownBox,
} from "./SelectsElements";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Selects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState([
    { id: 1, title: "리액트" },
    { id: 2, title: "자바" },
    { id: 3, title: "스프링" },
    { id: 4, title: "넥스트" },
  ]);
  const [selectedItem, setSelectedItem] = useState(menu[0]);
  const toggleDivAndIcon = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <Selectcon id="selects">
      <SelectspageName>Selects</SelectspageName>
      <SelectContainer>
        <SelectBox onClick={toggleDivAndIcon}>
          {selectedItem.title}
          <ChevronLeftIcon
            style={{ transform: isOpen ? "rotate(-90deg)" : "" }}
          />
        </SelectBox>
        {isOpen && (
          <DropDownContainer>
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
          </DropDownContainer>
        )}
      </SelectContainer>
    </Selectcon>
  );
};

export default Selects;
