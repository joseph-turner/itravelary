import React from 'react';
import { array, string } from 'prop-types';

const List = ({items, name}) => {
  const listItems = items.map(item =>
    <li key={item} className={name + '__item'}>{item}</li>
  );

  return (
    <ul className={name + '__list'}>{listItems}</ul>
  );
}

List.propTypes = {
  items: array.isRequired,
  name: string.isRequired
}

export default List;
