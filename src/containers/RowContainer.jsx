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
        categories={props.categories}
        onRandomizeQuestion={props.onRandomizeQuestion}
      />
      <Row
        key={2}
        id={2}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row2}
        categories={props.categories}
        onRandomizeQuestion={props.onRandomizeQuestion}
      />
      <Row
        key={3}
        id={3}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row3}
        categories={props.categories}
        onRandomizeQuestion={props.onRandomizeQuestion}
      />
      <Row
        key={4}
        id={4}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row4}
        categories={props.categories}
        onRandomizeQuestion={props.onRandomizeQuestion}
      />
      <Row
        key={5}
        id={5}
        onShowQuestion={props.onShowQuestion}
        onAnswered={props.onAnswered}
        questions={props.questions.row5}
        categories={props.categories}
        onRandomizeQuestion={props.onRandomizeQuestion}
      />
    </React.Fragment>
  );
};
