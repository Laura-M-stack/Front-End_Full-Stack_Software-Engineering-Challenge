# Project Review – Chicks Gold Front-End Challenge

This document reflects on the project completed for the front-end challenge. It summarizes what worked well, what could be improved, and thoughts on the process from a learning perspective.

---

## ✅ What Went Well

### Structure and Organization
- Organized file structure with logical grouping of components, pages, services, and data.
- Easy to navigate and extend thanks to modular naming and consistent layout.

### UI and Visual Design
- Overall look closely matches the reference site, with a consistent dark theme.
- Components like product cards, footer, and navbar are visually cohesive.
- Hover and interactive states add polish to the design.

### Responsiveness
- Product grid adjusts across breakpoints using media queries.
- Elements resize and reposition properly on mobile devices.
- Navbar converts to a hamburger menu for smaller screens.

### First-Time Use of Aurelia and TypeScript
- This was my first time using both Aurelia and TypeScript in a project context.
- I was able to use `@bindable`, define typed interfaces, and build modular components.
- While there was a learning curve, I found the experience enjoyable and educational.

---

## ⚠️ Areas for Improvement (Given More Time)

### Functional Logic
- The quantity selector works visually, but the logic doesn’t update the cart globally.
- The ADD button does not increment a shared cart state.
- Global cart logic was started but not completed in time.

### Build and Deployment
- The Netlify deployment did not render the full app as expected (possibly due to config issues).
- A fallback route or redirect rule might help future SPA deployments.

### Code and TypeScript Usage
- Some logic (like counters) could be abstracted into shared utilities or services.
- Global state (like cart items) would benefit from a reactive store or singleton.
- A few TypeScript improvements could help, such as avoiding non-null assertions.

### CSS
- The final version removed `clamp()` for responsive text due to layout issues. Fixed `rem` values worked well but could be improved further.
- Some layout sections (like the counter) could use grid for better alignment.

---

## 🙌 Reflections

This challenge was a great learning experience. I explored Aurelia’s templating and reactivity, practiced TypeScript structure, and improved my understanding of UI composition and responsiveness.

Although I couldn’t finish every interaction or debug the full deployment, I focused on clarity, consistency, and fidelity to the design. With more time, I’m confident I could complete the functionality and refine the architecture.

Thanks for the opportunity to participate in this challenge and grow through the process.
