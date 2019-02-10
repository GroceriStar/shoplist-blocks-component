import React, { Component, Fragment } from "react";
import { DragDropContextProvider } from 'react-dnd'
import ReactDnDHTML5Backend from "react-dnd-html5-backend";

import SimpleText     from "../../components/Ingredient/SimpleText";
import Checkbox       from "../../components/Ingredient/Checkbox";
import DeleteLink     from "../../components/Ingredient/DeleteLink";
import EditableLabel  from "../../components/Ingredient/EditableLabel";
import EditLink       from "../../components/Ingredient/EditLink";
import Id             from "../../components/Ingredient/Id";
import Label          from "../../components/Ingredient/Label";
import ListItem       from "../../components/Ingredient/ListItem";
import Order          from "../../components/Ingredient/Order";
import Selectbox      from "../../components/Ingredient/Selectbox";
import Status         from "../../components/Ingredient/Status";
import TextId         from "../../components/Ingredient/TextId";
import Form1          from "../../components/Ingredient/Form/Form1";
import Form2          from "../../components/Ingredient/Form/Form2";
import Form3          from "../../components/Ingredient/Form/Form3";
import SortableList   from "../../components/SortableList/SortableList";

import Title          from "../../screens/Departments/Title";
import AutoComplete   from "../../screens/Departments/AutoComplete";
import AntdAutoComplete from "../../screens/Departments/AntdAutoComplete";

import ListItemLink   from "../../screens/Departments/ListItemLink";
import ListItemEdit   from "../../screens/Departments/ListItemEdit";
import ListItemDelete from "../../screens/Departments/ListItemDelete";

import IngredientsList from "../../screens/List/IngredientsList";
import ListCheckbox   from "../../screens/List/ListCheckbox";
import ListCheckboxDeleteLink   from "../../screens/List/ListCheckboxDeleteLink";
import ListCheckboxDeleteIcon   from "../../screens/List/ListCheckboxDeleteIcon";
import ListCheckboxStatus   from "../../screens/List/ListCheckboxStatus";
import List3Links   from "../../screens/List/List3Links";
import ListLayouts   from "../../screens/List/ListLayouts";

import { getAllIngredients, getDepartments } from "../../selectors/selector";

import { DefaultList } from "@groceristar/grocery-component";

class Examples extends Component {
  render() {
    var id = 12345;
    var id1 = 1234;
    let items = ["apple", "milk"];
    var text1 = 'Car';
    const ingredientsList =
    [ { key: '20c38e50-1ffb-11e9-ad6b-31f0d6717595',
    name: 'Asparagus',
    isChecked: false,
    departmentID: '20c38e51-1ffb-11e9-ad6b-31f0d6717595',
    order: 0 },
  { key: '20c38e52-1ffb-11e9-ad6b-31f0d6717595',
    name: 'Broccoli',
    isChecked: true,
    departmentID: '20c38e53-1ffb-11e9-ad6b-31f0d6717595',
    order: 0 },
  { key: '20c38e54-1ffb-11e9-ad6b-31f0d6717595',
    name: 'Carrots',
    isChecked: false,
    departmentID: '20c38e55-1ffb-11e9-ad6b-31f0d6717595',
    order: 0 },
  { key: '20c38e56-1ffb-11e9-ad6b-31f0d6717595',
    name: 'Cauliflower',
    isChecked: false,
    departmentID: '20c38e57-1ffb-11e9-ad6b-31f0d6717595',
    order: 0 },]
    return (
      <div>

        {/* <DragDropContextProvider backend={ReactDnDHTML5Backend}>
          <h3>Departments</h3>
        <SortableList>
          { getDepartments(true).map((item, index) => ({
              id: `--${index}`,
              title: item,
              color: "success"
          }))}
        </SortableList>
        <h3>Ingredients</h3>
        <SortableList>
          { getAllIngredients().map((item, index) => ({
              id: `--${index}`,
              title: `${item.name} - ${item.department}`,
              color: "success"
          }))}
        </SortableList>
        </DragDropContextProvider> */}
        <br/>
        <br/>
        <h3>SimpleText</h3>
        <SimpleText>This is SimpleText</SimpleText>
        <hr />
        <h3>Checkbox</h3>
        <Checkbox name={"Check"}>Check</Checkbox>
        <hr />
        <h3>DeleteLink</h3>
        <DeleteLink id={id} url={"/examples/delete/" + id}>
          Link
        </DeleteLink>
        <hr />
        <h3>EditableLabel</h3>
        <EditableLabel id="ok">This is label</EditableLabel>
        <hr />
        <h3>EditLink</h3>
        <EditLink id={id1} url={"/examples/edit/" + id1}>
          Link
        </EditLink>
        <hr />
        <h3>Id</h3>
        <Id />
        <hr />
        <h3>Label</h3>
        <Label>This is label</Label>
        <hr />
        <h3>ListItem</h3>
        <ListItem data={["First", "Second", "Thirld"]} />
        <hr />
        <h3>Order</h3>
        <Order data={["Fish", "Milk", "Apple"]} />
        <hr />
        <h3>Selectbox</h3>
        <Selectbox data={["Apple", "Rastberry", "12"]} />
        <hr />
        <h3>Status</h3>
        <Status />
        <hr />
        <h3>TextId</h3>
        <TextId id="233">This is text with id</TextId>
        <hr />
        <h3>Forms</h3>
        <h3>Form1</h3>
        <Form1 />
        <hr />
        <h3>Form2</h3>
        <Form2 />
        <hr />
        <h3>Form3</h3>
        <Form3 />
        <hr />
          <hr />
        <br />
        <h3>Lists</h3>

        <h3>ListLayouts</h3>
        <ListLayouts data={["One", "Two", "Three", "Apple"]} layout="ListItemEdit"/>

        <h3>List3Links</h3>
        <List3Links data={ingredientsList}/>

        <h3>IngredientsList</h3>
        <IngredientsList ingredients={getAllIngredients().slice(0,15)}/>

        <h3>ListCheckbox</h3>
        <ListCheckbox data={["One", "Two", "Three", "Apple"]} />

        <h3>ListCheckboxDeleteLink</h3>
        <ListCheckboxDeleteLink data={["One", "Two", "Three", "Apple"]} />

        <h3>ListCheckboxDeleteIcon</h3>
        <ListCheckboxDeleteIcon data={["One", "Two", "Three", "Apple"]} />

        <h3>ListCheckboxStatus</h3>
        <ListCheckboxStatus data={["One", "Two", "Three", "Apple"]} />

        <h3>DefaultList</h3>
        <DefaultList items={["One", "Two", "Three", "Apple"]}/>
        <hr />
        <br />
        <br/><Title id="123">Title with id</Title>

        <Title>AutoComplete</Title>
        <AutoComplete data={["a", "aa", "aaa", "b", "bb", "c", "cc"]} />
        <hr />

        <AntdAutoComplete data={["a", "aa", "aaa", "b", "bb", "c", "cc"]} />
        <hr />
        <br />
        <Title>List Item with link</Title>
        <ListItemLink list={[{name: "One",
                              subList: ["One.One","One.Two"]}, {name: "Two",
                                                    subList: ["Two.One","Two.Two"]}, {name: "Three",
                                                                          subList: ["Three.One","Three.Two"]}]} />
        <hr />
        <Title>List Item Edit</Title>
        <ListItemEdit list={["one", "two", "three"]} />
        <hr />
        <Title>List Item Delete</Title>
        <ListItemDelete list={["one", "two", "three"]} />
        <hr />
      </div>
    );
  }
}

export default Examples;
