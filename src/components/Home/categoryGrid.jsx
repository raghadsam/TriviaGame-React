import React from "react";
import CategoryCard from "./categoryCard";
import Categories from "./Categories";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

function CategoryGrid() {
  return (
    <Container id="categories">
      <svg>
        <filter id="blue-wash">
          <feColorMatrix
            type="matrix"
            values="0   0   0   0   0
            0   0   1   0   0
            0   0.5   1   0   0
            0   0.5   0   1   0 "
          />
        </filter>
      </svg>
      <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
        {Categories.map((cat) => {
          return (
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-10"
              key={cat.id}
            >
              <Link
                to={{ pathname: "/quizzes", state: cat.id }}
                style={{ all: "unset" }}
              >
                <CategoryCard category={cat} />
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default CategoryGrid;
