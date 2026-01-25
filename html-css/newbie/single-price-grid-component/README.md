# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Frontendmentor Solution](https://www.frontendmentor.io/solutions/responsive-single-price-grid-component-WsW80EZaNj)
- Live Site URL: [Github Pages Site](https://techbrobolu.github.io/frontend-mentor-challenges/newbie/single-price-grid-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Flexbox for component layout
- Modern CSS features (color-mix, nesting)

### What I learned

This project helped reinforce several key CSS concepts:

**CSS Custom Properties for Design System**
I created a comprehensive set of CSS variables for colors, typography, and other design tokens, making the code more maintainable and consistent:

```css
:root {
  --teal-400: color-mix(in lab, white 15%, var(--teal-500));
  --teal-500: hsl(179, 62%, 43%);
  --green-400: hsl(71, 73%, 54%);
  --text-xlg: 700 2rem / 1.5 var(--ff);
}
```

**CSS Grid for Responsive Layouts**
I used CSS Grid to create a flexible layout that adapts from a single column on mobile to a two-column layout on larger screens:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.headline {
  grid-column: 1/3; /* Spans both columns */
}
```

**Modern CSS Nesting**
I took advantage of CSS nesting to write more organized and readable styles:

```css
.subscription {
  & .sub-title {
    font: var(--text-lg);
  }
  & .sign-up {
    background-color: var(--green-400);
  }
}
```

### Continued development

Areas I want to continue focusing on in future projects:

- Adding smooth transitions and animations for better user experience
- Implementing more advanced CSS Grid techniques like grid areas
- Exploring CSS container queries for more flexible responsive design
- Adding accessibility features like focus states and ARIA labels

## Author

- Frontend Mentor - [@techbrobolu](https://www.frontendmentor.io/profile/techbrobolu)
- X (Formerly Twitter) - [Ahmed | Fullstack Javascript Developer🚀👨🏾‍💻](https://x.com/techbrobolu)
- Github - [Bolu👨🏾‍💻🚀](https://github.com/techbrobolu)