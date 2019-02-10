# shoplist-blocks-component

This is a separated module, related with shoplist-template repository
Main goal is to separate development process and have a separated place, where we can develop the logic of default components and then use them into our project

Our first goal to create a flexible set of components, that will became a shopping list page, that will display our grocery list data.

- [x] https://blog.bitsrc.io/tiny-components-what-can-go-wrong-d6aa42d71370
- [x] move to this repository all components from https://github.com/GroceriStar/react-shopping-list-template/tree/master/src/components/Ingredient


- [ ] should we keep all of these components inside of the "Ingredient" folder? I don't think so...
- [ ] clean up our components from groceristar fetch stuff
- [ ] add some routers stuff here...
- [ ] replace paths for imports.....
- [ ] replace shortid with uuid
- [ ] basic clean up for this components
- [ ] get rid of gs-fetch as part of this code
- [ ] install all necessary modules from shop-list in order to make everyhing work. like react-dnd, antd

- [ ] should work with our List module, from gs/grocery-component repo
- [ ] each set of components can have a separated component, that will used only for displaying at Example-like pages.
Right now we have one Example page at our shoplist-template repo but it's hard to navigate
- [ ] Bitsrc.io, and preview of components...
- [ ] eslint and fix!
- [ ] clean up Examples
- [ ] reaplace delete icon with antd
 - [ ] replace screens with views
  - [ ] move stuff from shoplist template from screens, that related to components from examples
  - [ small clean project with just react - components and antd]
- fix shopping list template project

use https://github.com/standard/standard


https://github.com/GroceriStar/react-shopping-list-template/tree/master/src/components/SortableList

https://github.com/GroceriStar/react-shopping-list-template/tree/master/src/components/ShoppingItemWrapper

https://github.com/GroceriStar/react-shopping-list-template/tree/master/src/views/Examples


Some of the details about components that we'll have here are described at this task: https://github.com/GroceriStar/react-shopping-list-template/issues/109


Showcase is a project where we trying to incorporate two major tasks:
1. show to a new users a collection of grocery lists - before they sign up - they want to explore the data that we have
2. figure out the way about making GL downloable by generating a simple PDF file


<!--
[![Build Status](https://travis-ci.org/GroceriStar/showcase.svg?branch=master)](https://travis-ci.org/GroceriStar/showcase) -->


While we're coding it - we also extending the code base of GS, by testing fetch plugin, by moving away basic components, like lists, grocerylist component, etc...

Major goals for this project are -
* separate an in-development components that we want to use as part of our groceristar project
* make it less confusing and less requiring a lot of attention about keeping in mind what exactly we did before

Stretch goals:
- [ ] install and connect Raven at index.js
- [ ] adjust logic of envconfig and try to connect to our local/shared servers
- [ ] make first axios calls and be happy to receive json results
- [ ] connect to our simple [fake-api](https://github.com/GroceriStar/fake-api) that i've created...

---
