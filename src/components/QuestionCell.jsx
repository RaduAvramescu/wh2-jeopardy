import React, { Component } from "react";

export default class QuestionCell extends Component {
  handleClick = () => {
    this.props.onShowQuestion(
      "showQuestion",
      this.props.question.question,
      this.props.question.answer,
      this.props.category,
      this.props.question.value
    );
    this.props.onAnswered(this.props.rowId, this.props.id);
  };

  render() {
    if (this.props.isAnswered)
      return (
        <td className="cell-width align-middle bordered">
          <div className="opacity-10">{this.props.question.value}</div>
        </td>
      );
    return (
      <td
        className="cell-width align-middle bordered pointer"
        onClick={this.handleClick}
      >
        <div className="">{this.props.question.value}</div>
      </td>
    );
  }
}
