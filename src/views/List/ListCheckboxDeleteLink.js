import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Checkbox from "~/Ingredient/Checkbox";
import DeleteLink     from "~/Ingredient/DeleteLink";

import { Icon } from 'antd';
import "antd/dist/antd.css";

//@TODO replace
import shortid from "shortid";

class ListCheckboxDeleteLink extends Component {

  render() {
    return (
      <ul style = {{"list-style-type": "none"}}>
          {this.props.data.map(
            (item, index) =>(
          <li key={shortid.generate()}
              id={shortid.generate()}>
            <Checkbox name={item}>
              <DeleteLink id={index} url={"/examples/delete/" + index}>
                {item}
              </DeleteLink>
            </Checkbox>
          </li>
        ))
          }
      </ul>
    );
  }
}

export default ListCheckboxDeleteLink;
