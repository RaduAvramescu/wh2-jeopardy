import React from "react";

export default (props) => (
  <tr>
    {props.categories.map((category) => (
      <th scope="col" className="cell-width align-middle" key={category.id}>
        {category.value}
      </th>
    ))}
  </tr>
);
