# storeFront

## User Stories

* As a user, I expect to see a list of available product categories in the store so that I can easily browse products
* As a user, I want to choose a category and see a list of all available products matching that category
* As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

![storeFrontWireFrame](./SW.png)

## Technical Requirements

1. Create a visually appealing website using Material UI
2. Use a Redux Store to manage the state of categories and items in the store
3. Display a list of categories from state
4. When the user selects (clicks on) a category ...
    * Identify that category as selected (change of class/display)
    * Show a list of products associated with the category

## Application Architecure

1. Begin with create-react-app (COMPLETED)

2. Install Material UI as a dependency (COMPLETED)

3. Write an App component that serves as the container for all sub-components of this application (COMPLETED)

4. Create sub components (COMPLETED)

* Create A HEADER component which shows the name of your virtual store (COMPLETED)
* Create  FOOTER component which shows your copyright and contact information (COMPLETED)
* Create A Catagories component (COMPLETED)
  * Shows a list of all categories
  * Dispatches an action when one is clicked to "activate" it

* A PRODUCTS component (IN PROGRESS) (Mostly Completed)
  * Displays a list of products associated with the selected category

## Constructing the Redux Store

* Categories ( COMPLETED)
  * State should contain a list of categories as well as the active category
    * Each category should have a normalized name, display name, and a description
  * Create an action that will trigger the reducer to change the active category
  * Update the active category in the reducer when this action is dispatched
* Products (COMPLETED)
  * State should be a list of all products (COMPLETED)
    * Each product should have a category association, name, description, price, inventory count
  * Create an action that will trigger when the active category is changed (COMPLETED)
    * HINT: Multiple reducers can respond to the same actions
  * Create a reducer that will filter the products list based on the active category
* Active Category (COMPLETED)
  * State should store active category
  * Other components (products, etc) might need to reference this

  Add routing to the application
Link every product to a page that displays the full product details
Link the “Cart” summary in the header to a full shopping cart page with shipping/payment forms
Additionally, we will be swapping out our Redux store and replacing it with a store built using Redux Toolkit
