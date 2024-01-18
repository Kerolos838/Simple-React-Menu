import React from "react";
import "./category.css";
import { Col, Row } from "react-bootstrap";

export default function Category({ filterCategories, allCategory }) {
  console.log(allCategory);
  const onFilter = (cat) => {
    filterCategories(cat);
  };
  return (
    <Row>
      <Col
        sm="12"
        className="d-flex justify-content-center flex-wrap gap-3 my-2"
      >
        {allCategory.length >= 1 ? (
          allCategory.map((cate) => {
            return (
              <button onClick={() => onFilter(cate)} className="cat-btn">
                {cate}
              </button>
            );
          })
        ) : (
          <h3>No Categories</h3>
        )}
        {/* <button onClick={() => onFilter("Brackfast")} className="cat-btn">
          Brackfast
        </button>
        <button onClick={() => onFilter("Lunch")} className="cat-btn">
          Lunch
        </button> */}
      </Col>
    </Row>
  );
}
