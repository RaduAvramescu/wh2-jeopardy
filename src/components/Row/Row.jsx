import React from "react";
import Cell from "../Cell/Cell";

const Row = (props) => {
  let cells = [];

  if (props.isHeading) {
    for (let i = 0; i < 5; i++) {
      cells.push(
        <Cell
          key={i}
          id={i}
          category={props.categories[i].value}
          isHeading={props.isHeading}
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
        rowId={props.id}
        isAnswered={props.questions[i].isAnswered}
        question={props.questions[i]}
        category={props.categories[i].value}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        onRandomizeQuestion={props.onRandomizeQuestion}
      />
    );
  }
  return <tr>{cells}</tr>;
};

export default Row;
