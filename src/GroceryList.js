import React from 'react';

const GroceryList = (props) => (
  <li
    style={ props.complete? { ...styles.groceryList, ...styles.complete } : styles.groceryList }
    onClick={() => props.grocerylistClick(props.id)}
    > 
    { props.name }
  </li>
)

const styles = { 
  groceryList: { cursor: "pointer", },
  complete: { color: "grey", textDecoration: "line-through", },
}


export default GroceryList;


