import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownList(props) {
  const [dropdown, setDropdown] = useState(props.title);
  const [selection, setSelection] = useState(props.style);

  const handleSelect = (e) => {
    setDropdown(e);
    let id;
    for (let i = 0; i < props.dropdownItems.length; i++) {
      if (props.dropdownItems[i] === e) {
        id = i;
      }
    }
    props.function(id);
    setSelection("blueBackground");
  };

  useEffect(() => {
    if (typeof props.title === "number") {
      setDropdown(props.dropdownItems[props.title]);
      setSelection("blueBackground");
    }
  }, [props.title]);

  useEffect(() => {
    if (props.value) {
      handleSelect(props.dropdownItems[props.value]);
    }
  }, []);

  return (
    // <div className="d-flex justify-content-center">
    <DropdownButton
      id={selection}
      title={dropdown}
      onSelect={handleSelect}
      className="m-2"
    >
      {props.dropdownItems.map((dropdownItem, index) => (
        <Dropdown.Item eventKey={dropdownItem} key={index}>
          {dropdownItem}
        </Dropdown.Item>
      ))}
    </DropdownButton>
    //</div>
  );
}
