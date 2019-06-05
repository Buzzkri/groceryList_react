import React from 'react';
// import GroceryList from "./GroceryList";
import List from './List';
import GroceryListForm from './GroceryListForm';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    groceries: [
      { id: 1, name: "Milk", complete: false, },
      { id: 2, name: "Eggs", complete: false, },
      { id: 3, name: "Butter", complete: true, },
    ]
  };

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

   addItem = (name) => {
    const { groceries } = this.state;
    const groceryList = { name, id: this.getUniqId() , complete: false }
    this.setState({ groceries: [groceryList, ...groceries] }); 
    }


  render() {
    const { groceries } = this.state;

    return (
      <div>
      {/* <List name="Grocery List" items={groceries} /> */}
      <GroceryListForm addItem={this.addItem} />
      <List name="Grocery List" items={groceries} />
      </div>
    );
  }

 
};

export default App;