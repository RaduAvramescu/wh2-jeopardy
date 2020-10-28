import React from "react";
import Row from "../components/Row";

export default (props) => {
  return (
    <React.Fragment>
      <Row
        key={1}
        id={1}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row1}
      />
      <Row
        key={2}
        id={2}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row2}
      />
      <Row
        key={3}
        id={3}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row3}
      />
      <Row
        key={4}
        id={4}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row4}
      />
      <Row
        key={5}
        id={5}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row5}
      />
    </React.Fragment>
  );
};
