import React from "react";

class GroceryListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "", });
  }

  handleChange(e) {
    this.setState({ name: e.target.value, });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          required 
          placeholder="Add An Item"
          value={this.state.name} 
          name="name"
          onChange={this.handleChange}
        />
      </form>
    )
  }
};

export default GroceryListForm;