import React, { Component } from "react";

export default class QuestionCell extends Component {
  handleClick = () => {
    this.props.onShowQuestion(
      "showQuestion",
      this.props.question.question,
      this.props.question.answer,
      this.props.rowId,
      this.props.id
    );
    this.props.onAnswered(this.props.rowId, this.props.id);
  };

  render() {
    if (this.props.isAnswered)
      return (
        <td className="col-2 align-middle m-0 p-0 bordered">
          <div className="opacity-10">{this.props.question.value}</div>
        </td>
      );
    return (
      <td
        className="col-2 align-middle m-0 p-0 bordered pointer"
        onClick={this.handleClick}
      >
        <div>{this.props.question.value}</div>
      </td>
    );
  }
}
