import React, { Component } from 'react';

import Checkbox from "~/Ingredient/Checkbox";
import shortid  from "shortid";

class ListCheckbox extends Component {

  render() {
    return (
      <ul style = {{"list-style-type": "none"}}>
          {this.props.data.map(
            (item, index) =>(
          <li key={shortid.generate()}
              id={shortid.generate()}>
            <Checkbox name={item}>
              {item}
            </Checkbox></li>
          ))}
      </ul>
    );
  }
}

export default ListCheckbox;
