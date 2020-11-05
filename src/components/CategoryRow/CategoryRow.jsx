import React from "react";

import styles from "./CategoryRow.module.css";

const CategoryRow = ({ categories }) => {
  return (
    <tr>
      {categories.map((category) => (
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
};

export default CategoryRow;
