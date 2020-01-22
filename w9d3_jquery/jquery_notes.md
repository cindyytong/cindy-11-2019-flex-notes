# Week 9 Day 3, JQuery Notes

## Core concept questions
1. What is webpack? How do we setup webpack? 
    - 
2. What is the DOM?
    - [MDN DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
3. In jQuery, what can we use $() for? 
    * CSS Selector: 
        - Takes in a CSS selector and returns a jQuery object matching the selector 
        - ex. `$(.some-class-name)`
    * HTML style: 
        - Builds an HTMLElement and returns the jQuery object with the elements built 
        - ex. `$('<li>Hello</li>`)
    * Wrapper style 
        - takes an unwrapped HTMLElement or array and returns a jQuery object wrapping those 
        - ex. `$('<li>')`
    * Ready style 
        - takes a callback to run when the DOM is fully loaded; returns nothing 
        - $(someFunction)
5. What are ways we can get an HTMLElement?
    * document.getElementById(selector) => returns one element 
    * document.getElementsByClassName(selector) => returns Nodelist of elements matching 
    * document.querySelectorAll(selector) => returns Nodelist of Elements matching 

6. What is event delegation?
    * difference between event.target and event.currentTarget

7. Why would we use .data() method 

8. What is the difference between event.stopPropagation() and event.preventDefault()
## Project 

## Assessment study topics:
* curry
* binarySearch
* mergeSort
* quickSort
* myBind/ myCall/ myApply 

