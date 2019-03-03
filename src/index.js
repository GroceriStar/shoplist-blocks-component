import SimpleText     from "~/Ingredient/SimpleText";
import Checkbox       from "~/Ingredient/Checkbox";
import DeleteLink     from "~/Ingredient/DeleteLink";
import EditableLabel  from "~/Ingredient/EditableLabel";
import EditLink       from "~/Ingredient/EditLink";
import Id             from "~/Ingredient/Id";
import Label          from "~/Ingredient/Label";
import ListItem       from "~/Ingredient/ListItem";
import Order          from "~/Ingredient/Order";
import Selectbox      from "~/Ingredient/Selectbox";
import Status         from "~/Ingredient/Status";
import TextId         from "~/Ingredient/TextId";
import Item           from "~/Ingredient/Item";
import Form1          from "~/Ingredient/Form/Form1";
import Form2          from "~/Ingredient/Form/Form2";
import Form3          from "~/Ingredient/Form/Form3";
import SortableList   from "~/SortableList/SortableList";


//@TODO maybe later try to connect other cards?
import Card           from "~/SortableList/Card";

import RadioPanelWrapper from '~/RadioPanelWrapper'



// views
import Title            from "@v/Departments/Title";
import AutoComplete     from "@v/Departments/AutoComplete";
import AntdAutoComplete from "@v/Departments/AntdAutoComplete";

import ListItemLink     from "@v/Departments/ListItemLink";
import ListItemEdit     from "@v/Departments/ListItemEdit";
import ListItemDelete   from "@v/Departments/ListItemDelete";
import DepartmentRouter from "@v/Departments/DepartmentRouter";
import Departments      from "@v/Departments/Departments";

import List from "@v/List/List";
import IngredientsList from "@v/List/IngredientsList";
import ListCheckbox    from "@v/List/ListCheckbox";
import ListCheckboxDeleteLink   from "@v/List/ListCheckboxDeleteLink";
import ListCheckboxDeleteIcon   from "@v/List/ListCheckboxDeleteIcon";
import ListCheckboxStatus       from "@v/List/ListCheckboxStatus";
import List3Links    from "@v/List/List3Links";
import ListLayouts   from "@v/List/ListLayouts";


import ExampleView        from '@v/Example/ExampleView';
import EditLinkRedirect   from '@v/Example/EditLinkRedirect'
import DeleteLinkRedirect from '@v/Example/DeleteLinkRedirect'



export {
  //Ingredient
  Checkbox,
  DeleteLink,
  EditableLabel,
  EditLink,
  Id,
  Item,
  Label,
  ListItem,
  Order,
  Selectbox,
  SimpleText,
  Status,
  TextId,


  RadioPanelWrapper,

  // Form
  Form1,
  Form2,
  Form3,

  // Departments
  AntdAutoComplete,
  AutoComplete,
  DepartmentRouter,
  Departments,
  ListItemDelete,
  ListItemEdit,
  ListItemLink,
  Title,
  // Lists
  IngredientsList,
  List,
  List3Links,
  ListCheckbox,
  ListCheckboxDeleteIcon,
  ListCheckboxDeleteLink,
  ListCheckboxStatus,
  ListLayouts,

  // Sortable Lists
  Card,
  SortableList,


  //Example
  ExampleView,
  EditLinkRedirect ,
  DeleteLinkRedirect,

}
