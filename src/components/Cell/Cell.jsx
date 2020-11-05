import React, { Component } from "react";

import styles from "./Cell.module.css";

export default class Cell extends Component {
  handleClick = () => {
    const {
      onRandomizeQuestion,
      onShowQuestion,
      onAnswered,
      category,
      rowId,
      id,
    } = this.props;

    onRandomizeQuestion(rowId, id);
    setTimeout(() => {
      const {
        question: { question, answer, value },
      } = this.props;
      onShowQuestion("showQuestion", question, answer, category, value);
      onAnswered(rowId, id);
    }, 100);
  };

  render() {
    const { question, category, id, isHeading, isAnswered } = this.props;

    if (isHeading)
      return (
        <th
          scope="col"
          className={`${styles[`cell-width`]} align-bottom`}
          key={id}
        >
          {category}
        </th>
      );

    if (isAnswered)
      return (
        <td
          className={`${styles[`cell-width`]} ${styles.bordered} align-middle`}
        >
          <div className={`${styles[`opacity-10`]}`}>{question.value}</div>
        </td>
      );

    return (
      <td
        className={`${styles[`cell-width`]} ${styles.bordered} ${
          styles.pointer
        } align-middle`}
        onClick={this.handleClick}
      >
        <div>{question.value}</div>
      </td>
    );
  }
}
