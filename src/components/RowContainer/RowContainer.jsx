import React from "react";

import Row from "../Row/Row";

const RowContainer = ({
  categories,
  questions,
  onShowQuestion,
  onAnswered,
  onRandomizeQuestion,
}) => {
  return (
    <React.Fragment>
      <thead>
        <Row categories={categories} isHeading={true} />
      </thead>
      <tbody className="table-dark">
        {categories.map((row, index) => {
          return (
            <Row
              key={index + 1}
              id={index + 1}
              questions={questions[`row${index + 1}`]}
              categories={categories}
              onShowQuestion={onShowQuestion}
              onAnswered={onAnswered}
              onRandomizeQuestion={onRandomizeQuestion}
            />
          );
        })}
      </tbody>
    </React.Fragment>
  );
};

export default RowContainer;
