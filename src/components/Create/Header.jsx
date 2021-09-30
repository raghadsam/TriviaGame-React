import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DropdownList from "../Dropdown/Dropdown";
import { dropdownItems } from "../Dropdown/List";

function Header(props) {
  const [category, setCategory] = useState(props.category);
  const [name, setName] = useState(props.name);
  const [difficutly, setDifficutly] = useState(props.difficulty);

  function getCategory(category) {
    setCategory(category);
  }

  function getDifficulty(difficulty) {
    setDifficutly(difficulty);
  }

  useEffect(() => {
    props.function(category, name, difficutly);
  }, [category, name, difficutly]);

  useEffect(() => {
    setCategory(props.category);
    setName(props.name);
    setDifficutly(props.difficulty);
  }, [props]);

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <DropdownList
          dropdownItems={dropdownItems.categories}
          function={getCategory}
          title={category}
          style="greyBackground"
        />

        <div className="form-outline col-3 d-flex inputDiv m-2">
          <input
            type="search"
            id="searchBox"
            className="col-12 text-center"
            placeholder="Enter Your Quiz Name"
            onChange={(e) => setName(e.target.value)}
            value={props.name}
          />
        </div>

        <DropdownList
          dropdownItems={dropdownItems.difficulty}
          function={getDifficulty}
          title={difficutly}
          style="greyBackground"
        />
      </div>
    </Container>
  );
}

export default Header;
