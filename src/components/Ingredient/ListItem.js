import React, { Component } from 'react';
import Item from './Item'

//@TODO replace
import shortid from "shortid";


class ListItem extends Component {
    render() {
        return (
          <ul>
              {this.props.data.map(
                item =>
                  <Item
                    key={shortid.generate()}
                    id={shortid.generate()}
                    item={item}
                  />

                )}
          </ul>
        );
    }
}

export default ListItem;
