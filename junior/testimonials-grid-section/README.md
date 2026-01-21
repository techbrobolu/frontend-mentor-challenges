# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://techbrobolu.github.io/frontend-mentor-challenges/junior/testimonials-grid-section/)
- Live Site URL: [Github Pages Site](https://techbrobolu.github.io/frontend-mentor-challenges/junior/testimonials-grid-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

This challenge was an exercise in responsive grid composition and stacking cards to mimic the design. Key snippets that helped solve layout and typography problems:

1. Asymmetric grid for desktop layout:

```css
.testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.card--wide {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

@media (max-width: 700px) {
  .testimonials {
    grid-template-columns: 1fr;
  }
  .card--wide {
    grid-column: auto;
    grid-row: auto;
  }
}
```

Using `grid-column` and `grid-row` made it straightforward to reproduce the staggered / overlapping card arrangement on larger screens and to fall back to a simple vertical flow on mobile.

2. Fluid typography for headings:

```css
h2 {
  font: 700 clamp(1.25rem, 3.4vw, 2rem) / 1.1 var(--ff);
}
```

`clamp()` provided a single, maintainable rule that keeps headings readable across breakpoints without separate media queries.

3. Simple card depth using box-shadow:

```css
.card {
  box-shadow: 0 8px 20px rgba(17, 24, 39, 0.08);
  border-radius: 12px;
}
```

These snippets helped iterate quickly: the grid rules controlled layout, `clamp()` simplified type scaling, and the shadow rule unified card appearance.

### Continued development

- Polish responsive spacing with container queries
- Improve keyboard focus and screen reader semantics for testimonial cards
- Add subtle entrance animations for cards

### Useful resources

- [MDN CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)

## Author

- Frontend Mentor - [Bolu👨🏾‍💻🚀](https://www.frontendmentor.io/profile/techbrobolu)
- Github - [Bolu👨🏾‍💻🚀](https://github.com/techbrobolu)
- X (Formerly Twitter) - [@techbrobolu](https://x.com/techbrobolu)
