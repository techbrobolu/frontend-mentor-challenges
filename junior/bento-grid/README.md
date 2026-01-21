# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://techbrobolu.github.io/frontend-mentor-challenges/junior/bento-grid/)
- Live Site URL: [Github Pages Site](https://techbrobolu.github.io/frontend-mentor-challenges/junior/bento-grid/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

This project focuses on layout control using CSS Grid and careful placement of components. A few snippets stood out while solving layout challenges:

1) CSS design tokens & fluid typography (from `:root`):

```css
:root {
  /* Colors */
  --purple-100: hsl(254, 88%, 90%);
  --purple-500: hsl(256, 67%, 59%);
  --yellow-100: hsl(31, 66%, 93%);
  --yellow-500: hsl(39, 100%, 71%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 7%);

  /* Lengths, gaps and radii */
  --campaign-border-radius: 0.625rem;
  --grid-width: 68rem;
  --grid-gap: 1.75rem;

  /* Fonts */
  --ff: "DM Sans", sans-serif;
  --text-preset-1: 500 min(calc(63rem / 16), calc(2.75rem + 1vw)) / 1 var(--ff);
  --text-preset-2: 500 min(calc(40rem / 16), calc(1.8rem + 1vw)) / 0.85 var(--ff);
}
```

Why it helped: centralizing colors, gaps and fluid font presets made consistent responsive tweaks far simpler — change a variable, and many components update.

2) Desktop grid composition (from the large-breakpoint rules):

```css
@media screen and (min-width: 992px) {
  main.campaign-grid {
    width: min(90%, var(--grid-width));
    grid-auto-columns: 1fr;
    grid-template-rows: 20rem 4.5rem 9.75rem auto;
    grid-template-areas:
      "item-7 item-1 item-1 item-4"
      "item-7 item-2 item-3 item-4"
      "item-8 item-2 item-3 item-4"
      "item-8 item-6 item-5 item-5";

    & :nth-child(1) { grid-area: item-1; }
    & :nth-child(2) { grid-area: item-2; }
    & :nth-child(3) { grid-area: item-3; }
    & :nth-child(4) { grid-area: item-4; }
    & :nth-child(5) { grid-area: item-5; }
    & :nth-child(6) { grid-area: item-6; }
    & :nth-child(7) { grid-area: item-7; }
    & :nth-child(8) { grid-area: item-8; }
  }
}
```

Why it helped: defining named areas and mapping items by position made recreating the complex, asymmetric layout straightforward and maintainable.

3) Using the font preset in my root variable components (example usage):

```css
.campaign-1 h1 {
  font: var(--text-preset-1);
  color: var(--white);
}
```

Why it helped: referencing a preset keeps heading scale consistent across components and breakpoints without repeated calculations.

These real-code excerpts guided most of the layout and typographic decisions for the project, reducing guesswork and making responsive changes predictable.

### Author

- Frontend Mentor - [Bolu👨🏾‍💻🚀](https://www.frontendmentor.io/profile/techbrobolu)
- Github - [Bolu👨🏾‍💻🚀](https://github.com/techbrobolu)
- X (Formerly Twitter) - [@techbrobolu](https://x.com/techbrobolu)
