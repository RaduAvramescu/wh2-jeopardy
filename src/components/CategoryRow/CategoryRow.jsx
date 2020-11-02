import React, { Component } from "react";
import styles from "./CategoryRow.module.css";

export default class CategoryRow extends Component {
  render() {
    return (
      <tr>
        {this.props.categories.map((category) => (
          <th
            scope="col"
            className={`${styles[`cell-width`]} align-bottom`}
            key={category.id}
          >
            {category.value}
          </th>
        ))}
      </tr>
    );
  }
}
