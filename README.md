# Side-Hustle-Tasks
This is a repository created for the Side Hustle Internship Tasks

## Side Hustle task 3 solution

This is a solution to the Side Hustle Task for week 3.
[Side Hustle](https://sidehustle.ng/). Side hustle equip Nigerian youths with the right skills to prepare them for employment. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Credits](#credits)


## Overview
The Side Hustle week 3 task is a javascript counter. The counter should have two buttons, a lower count button and an add count button, when the lower count button is clicked the number should decrease by 1 and when the add count button is clicked the number should increase by 1. The minimum value of the counter should be 0 and the maximum value should be 50.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Click a button to decrease the number by one but can't go beyond 0
- Click another button to increase the number by one but can't go beyond 50


### Links

- Solution URL: [My solution](https://github.com/Gods-own/Side-Hustle-Tasks/tree/sidehustle/projects%2Fjavascript%2Ftask3)
- Live Site URL: [The counter app](https://gods-own.github.io/Side-Hustle-Tasks/)

### Built with

- HTML
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Javascript

### What I learned

From the week 2 task I learn't how to use flexbox and make responsive design so it was not a problem making this project responsive across all devices. 
I learnt how to give functionality to two or more buttons which have the same class using the forEach() method. I also learnt how to manipulate the DOM.


```js
buttons.forEach(function(button){
    button.addEventListener('click', function (){
    	if(button.classList.contains("lower")) {
    		if (count > 0) {
    			count--;
    		}
    	} else if(button.classList.contains("add")) {
    		if (count < 50) {
    			count++;
    		}
    	}
        text.textContent = count;
    })
})
```

## Author

- Twitter - [@symply_meka](https://www.twitter.com/symply_meka)

## Credits

- Background-Image - Photo by FWStudio from Pexels
