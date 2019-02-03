# shoplist-blocks-component



This is a separated module, related with shoplist-template repository
Main goal is to separate development process and have a separated place, where we can develop the logic of default components and then use them into our project

Our first goal to create a flexible set of components, that will became a shopping list page, that will display our grocery list data.

- [ ] move to this repository all components from https://github.com/GroceriStar/react-shopping-list-template/tree/master/src/components/Ingredient
- [ ] should work with our List module, from gs/grocery-component repo
- [ ] each set of components can have a separated component, that will used only for displaying at Example-like pages.
Right now we have one Example page at our shoplist-template repo but it's hard to navigate




Some of the details about components that we'll have here are described at this task: https://github.com/GroceriStar/react-shopping-list-template/issues/109


Showcase is a project where we trying to incorporate two major tasks:
1. show to a new users a collection of grocery lists - before they sign up - they want to explore the data that we have
2. figure out the way about making GL downloable by generating a simple PDF file


<!--
[![Build Status](https://travis-ci.org/GroceriStar/showcase.svg?branch=master)](https://travis-ci.org/GroceriStar/showcase) -->


While we're coding it - we also extending the code base of GS, by testing fetch plugin, by moving away basic components, like lists, grocerylist component, etc...

Major goals for showcase is -
* realize a better way to connect `fetch` with React projects
* test different plugins that will convert HTML into PDF
* set up first basic routes for previewing data from grocery lists(sometimes you just want to compare raw data, not at fancy way)
* test an assumption - Can we separate some react components and import them as npm package
* show users what data we have - at preview mode

Stretch goals:
- [ ] install and connect Raven at index.js
- [ ] adjust logic of envconfig and try to connect to our local/shared servers
- [ ] make first axios calls and be happy to receive json results
- [ ] connect to our simple [fake-api](https://github.com/GroceriStar/fake-api) that i've created...

---

- [ ] complete grocery list components - with empty/plain version - for just data and verions with antD collapse
- [ ] wait when antd will release a new version of package and apply to work DepartmentListCollapse
- [ ] make header blue or white not black with black text color
- [ ] we can fix tiles too. same background colors and text color is not perfect + shoplist update with a similar logic
- [ ] List -> Departments \ Ingredients -> get data form selects with AntD. Details upon request. After onChange - we have a redirect to Ingredient list, related to that Department
- [ ] advanced search at header, not just by grocery list name, we also can search by "departments" or "ingredients". maybe we can also add "categories", like "healthy", "cheap", "weight-loss", etc.
- [ ] Grocery list printed version in flexboxes and borders
- [ ] recipe to gl convertion
- [ ] GetData / Flow, from Meal Calendar to Showcase
- [ ] Add to GL flow of forms we can create
