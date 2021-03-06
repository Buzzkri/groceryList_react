import React from 'react';
import List from './List';
import Home from "./Home";
import About from "./About";
import GList from "./GList";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import GroceryListForm from './GroceryListForm';
import { Route, Switch, } from "react-router-dom";
import { Container, } from "semantic-ui-react";


class App extends React.Component {


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
      <>
      <Navbar />

        <Container>
          <Switch>    
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/GList" component={GList} />
          <Route component={NoMatch} />
            <GroceryListForm addItem={this.addItem} />
            <List name="Grocery List" items={groceries} />
          </Switch>
        </Container>
      </>
    );
  }

 
};

export default App;