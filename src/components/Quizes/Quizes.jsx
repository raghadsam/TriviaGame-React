import React, { useState } from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import QuizGrid from "./QuizGrid";
import PageNumber from "./PageNumber";
import { useLocation } from "react-router-dom";
// import DummyWriteData from "../../DummyWriteData";

function Quizes() {
  const location = useLocation();
  const [filters, setFilters] = useState({
    category: location.state,
    difficulty: "",
    sortBy: "",
    search: "",
  });

  function setCategory(category) {
    setFilters((prev) => setFilters({ ...prev, category: category }));
  }

  return (
    <>
      {/* <DummyWriteData /> */}
      <Filters category={location.state} setCategory={setCategory} />
      <QuizGrid filters={filters} />
      <PageNumber />
    </>
  );
}

export default Quizes;
