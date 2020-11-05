import React from "react";

import Cell from "../Cell/Cell";

const Row = ({
  isHeading,
  categories,
  id,
  questions,
  onShowQuestion,
  onAnswered,
  onRandomizeQuestion,
}) => {
  let cells = [];

  if (isHeading) {
    for (let i = 0; i < 5; i++) {
      cells.push(
        <Cell
          key={i}
          id={i}
          category={categories[i].value}
          isHeading={isHeading}
        />
      );
    }
    return <tr>{cells}</tr>;
  }

  for (let i = 0; i < 5; i++) {
    cells.push(
      <Cell
        key={i}
        id={i}
        rowId={id}
        isAnswered={questions[i].isAnswered}
        question={questions[i]}
        category={categories[i].value}
        onShowQuestion={onShowQuestion}
        onAnswered={onAnswered}
        onRandomizeQuestion={onRandomizeQuestion}
      />
    );
  }
  return <tr>{cells}</tr>;
};

export default Row;
