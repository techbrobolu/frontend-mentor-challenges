# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/responsive-social-proof-section-P9sMOLWeQX)
- Live Site URL: [Github Pages Site](https://techbrobolu.github.io/frontend-mentor-challenges/newbie/social-proof-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Google Fonts (League Spartan)

### What I learned

This project helped reinforce several key concepts in responsive web design:

**1. CSS Custom Properties for Maintainability**

Using CSS variables made it easy to maintain consistent colors, fonts, and sizes throughout the project:

```css
:root {
  --main-color: hsl(300, 43%, 22%);
  --sec-color: hsl(333, 80%, 67%);
  --ff: "League Spartan", sans-serif;
  --text-heading: 700 2.5rem/0.85 var(--ff);
}
```

**2. Staggered Layout with Flexbox**

Creating the offset rating cards required careful use of flexbox properties and positioning to achieve the stepped visual effect shown in the design.

**3. Semantic HTML Structure**

Organizing the content with proper semantic elements (`main`, `section`) improves accessibility and SEO while making the code more maintainable.

### Continued development

Areas I want to focus on in future projects:

- **CSS Grid**: While this project used Flexbox effectively, I'd like to explore CSS Grid for more complex layouts
- **Advanced Responsive Techniques**: Implementing more sophisticated breakpoints and fluid typography
- **Accessibility**: Adding ARIA labels and ensuring keyboard navigation works smoothly
- **Animation**: Adding subtle hover effects and transitions to enhance user experience

### Useful resources

- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This was invaluable for understanding flexbox properties and creating the staggered rating cards layout
- [Google Fonts](https://fonts.google.com/) - Easy integration of the League Spartan font

## Author

- Frontend Mentor - [Bolu👨🏾‍💻🚀](https://www.frontendmentor.io/profile/techbrobolu)
- Github - [Bolu👨🏾‍💻🚀](https://github.com/techbrobolu)
- X (Formerly Twitter) - [@techbrobolu](https://x.com/techbrobolu)
