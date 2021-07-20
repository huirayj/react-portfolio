import React from 'react';
import "./list.scss";

export const List = ({ id, title, active, setSelected }) => (
  <li
    className={`list ${active ? 'active' : ''}`}
    onClick={() => setSelected(id)}
  >
    {title}
  </li>
);

export default List;