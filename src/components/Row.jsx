import React from "react";
import QuestionCell from "./QuestionCell";

export default (props) => {
  let cells = [];
  for (let i = 0; i < 5; i++) {
    cells.push(
      <QuestionCell
        key={i}
        id={i}
        rowId={props.id}
        isAnswered={props.questions[i].isAnswered}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        question={props.questions[i]}
      />
    );
  }
  return <tr>{cells}</tr>;
};
