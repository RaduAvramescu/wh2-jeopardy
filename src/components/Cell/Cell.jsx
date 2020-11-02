import React, { Component } from "react";
import styles from "./Cell.module.css";

export default class Cell extends Component {
  handleClick = () => {
    this.props.onRandomizeQuestion(this.props.rowId, this.props.id);
    setTimeout(() => {
      this.props.onShowQuestion(
        "showQuestion",
        this.props.question.question,
        this.props.question.answer,
        this.props.category,
        this.props.question.value
      );
      this.props.onAnswered(this.props.rowId, this.props.id);
    }, 100);
  };

  render() {
    if (this.props.isHeading)
      return (
        <th
          scope="col"
          className={`${styles[`cell-width`]} align-bottom`}
          key={this.props.id}
        >
          {this.props.category}
        </th>
      );

    if (this.props.isAnswered)
      return (
        <td
          className={`${styles[`cell-width`]} ${styles.bordered} align-middle`}
        >
          <div className={`${styles[`opacity-10`]}`}>
            {this.props.question.value}
          </div>
        </td>
      );

    return (
      <td
        className={`${styles[`cell-width`]} ${styles.bordered} ${
          styles.pointer
        } align-middle`}
        onClick={this.handleClick}
      >
        <div>{this.props.question.value}</div>
      </td>
    );
  }
}
