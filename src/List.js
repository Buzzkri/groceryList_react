import React from 'react';
import GroceryList from './GroceryList';

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.items.map( GroceryList)}
      {/* { props.items.map( item => <GroceryList key={item.id} {...item } groceryListClick={props.groceryListClick} />) } */}
    </ul>
  </div>
);

export default List;

