import React from "react";
import { Container } from "react-bootstrap";
import DropdownList from "../Dropdown/Dropdown";
import SearchBar from "./SearchBar";
import { dropdownItems } from "../Dropdown/List";
import "./quizHeader.css";

export default function Filters(props) {
  return (
    <Container>
      <div className="row d-flex justify-content-around mx-5">
        <div className="d-flex col-6 col-md-6 mt-5" id="dorpQuiz">
          <DropdownList
            dropdownItems={dropdownItems.categories}
            title="Category"
            style="greyBackground"
            value={props.category}
            function={props.setCategory}
            id="QuizDropdown"
          />
          <DropdownList
            dropdownItems={dropdownItems.difficulty}
            title="Difficulty"
            style="greyBackground"
            id="QuizDropdown"
          />
          <DropdownList
            dropdownItems={dropdownItems.sortBy}
            title="Sort By"
            style="greyBackground"
            id="QuizDropdown"
          />
        </div>
        <SearchBar />
      </div>
    </Container>
  );
}
