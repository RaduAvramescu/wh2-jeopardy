import React from "react";
import Row from "../Row/Row";

const RowContainer = (props) => {
  return (
    <React.Fragment>
      <thead>
        <Row categories={props.categories} isHeading={true} />
      </thead>
      <tbody className="table-dark">
        {props.categories.map((row, index) => {
          return (
            <Row
              key={index + 1}
              id={index + 1}
              questions={props.questions[`row${index + 1}`]}
              categories={props.categories}
              onShowQuestion={props.onShowQuestion}
              onAnswered={props.onAnswered}
              onRandomizeQuestion={props.onRandomizeQuestion}
            />
          );
        })}
      </tbody>
    </React.Fragment>
  );
};

export default RowContainer;
