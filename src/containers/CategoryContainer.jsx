import React from "react";

export default (props) => (
  <tr>
    {props.categories.map((category) => (
      <th
        scope="col"
        className="col-2 m-0 border-0 align-middle th-height"
        key={category.id}
      >
        {category.value}
      </th>
    ))}
  </tr>
);
