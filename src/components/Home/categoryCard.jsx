import React from "react";
import "./home.css";
/* eslint-disable react/prop-types */

function Category(props) {
  const { title, imgURl } = props.category;
  return (
    <div className="card category-card w-100 ">
      <div className="card-body">
        <img src={imgURl} alt="category-icon" id="cat-img" />
      </div>
       <h5 className="cat-title">{title}</h5>
    </div>
  );
}

export default Category;
