import React from "react";

const CategoryContainer = (props) => (
  <tr>
    {props.categories.map((category) => (
      <th scope="col" className="cell-width align-middle" key={category.id}>
        {category.value}
      </th>
    ))}
  </tr>
);

export default CategoryContainer;
