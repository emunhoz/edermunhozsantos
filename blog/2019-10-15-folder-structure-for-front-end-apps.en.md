---
title: 'Folder structure for front end apps'
date: '2019-10-14 07:41:34'
description: Front end structure I've been enjoying working with
category: Structure
background: '#7d4cdb'
image: '/assets/img/06.jpg'
---

## Intro

There are several ways to structure front end projects and none of them are silver.

The best structure is where it is clear about each folder you make and what each file is for.

It needs to be consistent to the point that new people on the team can easily and finally understand everyone who needs to be comfortable with the structure.

I uploaded on Github a [Boilerplate with React + Redux](https://github.com/emunhoz/react_boilerplate) that today makes a lot of sense to me.

## About my fav stack

* React
* Redux with Ducks pattern 🦆
* Styled-components 💅
* Axios



## The structure

### Components

Starting with the `components` folder: I use all stateless components, ie they only get data to assemble the user interface. There is no business logic in these files nor redux.


### Containers

The `containers` folder is where the main logic with business rules lies. It is also responsible for API requests, redux (if any) and calls the correct components for the view layer.

### Pages

Responsible for assembling the template with all the containers needed to serve the route file and present the final page to the user. There is no logic, no redux. At most, one style file for organizing containers / components on the page.

### Services

The services folder is responsible for organizing API requests. For example, a `user.js` file within this folder would have all functions involving creating, updating, and deleting a user.

### Store

All application state management using [_ducks pattern_](https://github.com/erikras/ducks-modular-redux). The lean way of using ducks as a pattern in redux makes it much easier to build modules without having to. keep creating multiple and multiple files. Its difference with other structures is the union of actions, reducers and types in a single file and this does not mean that their modules will be large, in most cases the modules can have a maximum of 5 or 6 actions.

### Styles

Where is the general style of the application. Where I defined the [grid](https://edermunhozsantos.netlify.com/css-grid/) layout, themes, fonts ...

### Utils

And finally, the utils folder are generic functions that can be reused throughout the application: it can have functions that apply masks, parses ...
