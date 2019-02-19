import React, { Component } from "react";

import ListItem       from "~/Ingredient/ListItem";
import Selectbox      from "~/Ingredient/Selectbox";

import AutoComplete   from "@v/Departments/AutoComplete";
import {
  getIngredients,
  getGroceryByName,
  getListOfIngredients
}  from "/selector";


class Form3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedIngredient: ""
    }
    this.handleSelectedIngredient = this.handleSelectedIngredient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSelectedIngredient(ingredient){
    this.setState({
      selectedIngredient: ingredient
    })
  }
  // @TODO add query for adding data to db
  handleSubmit(e){

    console.log(this.state.selectedIngredient);
    e.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <AutoComplete
          onSelect={this.handleSelectedIngredient}
          data={getListOfIngredients()}/>
      <input type="Submit" />
      </form>
      </div>
    );
  }
}

export default Form3;
