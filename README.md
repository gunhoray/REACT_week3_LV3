# [React LV3 Assignment](https://react-week3-lv3.vercel.app/) 
##### by gunhoray & SAHA-YJB using Javascript, React, Html, css

### by SAHA-YJB
  * Building six buttons on Buttons.
  * Building required inputs and add button on Inputs.
  * Building a select without library on Selects. 
  * Organized and constructed Styled-components.
### by gunhoray
  * Constructed structure of pages(folders and files) and defind colors for the concept.
  * Building links on Navigation bar and Footer with react-router-dom, and react-scroll.
  * Making Navigation bar, Footer, Facepage, Modals(2 of them), Rendering Input results, Select with 'react-select' library.
  * Merged codes together from gunhoray & SAHA-YJB, and resolved conflicts between them.
  * Organized final results.

## Assignments of this project
  * Six buttons built with styled-components, and one with the icon.
    
  * Two inputs one text type, one number type with function of putting comma after every three digits
    * Alert those text and number

  * Select that does not get hidden by its parent component, even with 'overflow: hidden' attribute is in it.

## Funtions of this project ( Met all requirements from Assignments, these are additional)
  * Making Navigation bar and Footer for User experience.
  * Mixing darkmode color theme.
  * Utilizing 'hover' to make buttons color change.
  * Rendering results of Inputs.
  * Making Facepage and insert Illustration from Adobe Illustrator.

## Code Convention 
  * Because we are combinding elements from two person into one page. To distinguish the works between, use out initial on the variable, or leave annotation of our names.
  * Styling must be in one file with Elements on it.
  * Try different logics on same elements. To make of better understanding of how elements are made by various methods.

## Blueprint of the project
* src
  
* components
  * Buttons : index.js & ButtonsElements.js
    - containing six buttons 
  * Facepage : bumforlv3.svg & index.js & FacepageElements.js
    - containing Illustration to be the face of page.
  * Footer : index.js & FooterElements.js
    - containging links in Footer that goes all around pages 
  * Inputs : index.js & InputsElements.js
    - containing inputs and rendered results of inputs
  * Modals : index.js & ModalsElements.js & ModalIndex.js & Modal2index.js
    -  ModalIndex.js & Modal2index.js are the children components(modals) of the index.js made by gunhoray  
  * Navbar : index.js & NavbarElements.js
    - containging links in Navigation bar that goes all around pages 
  * Pages : index.js
    - containing Home( ) that brings all pages that goes into App.js 
  * Selects : index.js & SelectsElements.js
    - containging selects, one made without 'react-select' library, and one with it.
    
*App.js

## Difficulties encountered during this project
* To link each pages onto Navigation bar and Footer, had to mix use 'react-router-dom', and 'react-scroll'. ⭐️
* Create CSS conditions to make Navigation bar animated. Also, writing CSS with 'Styled-component'.
* The CSS shift when browser's size shift.⭐️
* Understanding CSS 'postion' and 'z-index' attribute to solve parent compoenent interfering issues (on Modals, and Selects).⭐️
* Tried to use createPortal to solve interfering issue, but failed. I need reaserch on it.⭐️
* Naming the variables, files, folders. As those numbers increase and more developers on it, we need more concised and planned naming. ⭐️
