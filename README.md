# Chicks Gold – Front-End Challenge

This project was developed as part of a front-end technical challenge for a software engineering position. The goal was to replicate, as faithfully as possible, a product listing page from the Chicks Gold website using HTML, CSS, and JavaScript (no UI frameworks). The project also uses Aurelia as the front-end framework to match the company's tech stack.

## Live Demo

Deployed version: [https://chicks-gold-mockup.netlify.app](https://chicks-gold-mockup.netlify.app)

Preview GIF: `assets/chicks_gold_page_preview.gif`

> ⚠ Note: The deployed version does not render the full page as expected due to time constraints, but the repository includes all components and styling.

## About the project

The application consists of a mock of a full product listing page, not just a responsive grid. It includes a styled navbar, product cards, and a footer with branding, links, and contact info.

Cards are designed to display:
- Product image, title, and description
- Price and original price (struck-through)
- ON SALE bullet and IN STOCK badge
- Quantity counter with arrow buttons
- Add and Details buttons

A cart icon in the navbar is meant to reflect the total items added via each card's "ADD" button.

## What was implemented

- Fully responsive layout (desktop, tablet, mobile)
- CSS grid with fluid spacing and breakpoints
- Reusable product card component
- Dark theme using CSS variables
- Navbar with hamburger menu on small screens
- Static mock product list (via `products.ts`)
- Button and counter styles matching the reference design
- Hover interactions and visual polish

## Not fully functional

While the UI structure and interactions are mostly present, the following features were not completed or functional by the deadline:

- The quantity counter on each card visually updates, but does not update the cart count on click
- The "ADD" button logic to increment the global cart count did not function correctly
- `clamp()` for responsive typography was removed due to layout issues and replaced with fixed rem units
- The deployed Netlify version did not render properly due to time constraints and build/debug limitations

## Tech Stack

- Aurelia v3.0.4
- TypeScript (first time using it in a real project)
- Pure CSS (no frameworks)
- Webpack (via Aurelia CLI)

## Decisions and process

- I chose Aurelia to align with the company's tech stack. Although this was my first real project with it, I found its templating and binding system familiar and enjoyable to use.

- I extracted exact colors from the original Chicks Gold site using browser extensions and Color Picker to ensure accurate visual reproduction.

- Images such as cards'pictures (sourced from the Roblox marketplace), footer icons, logos and Chicks Gold favicon , were processed in Photoroom to remove backgrounds, and exported as transparent PNGs for consistent styling.

- A clean structure with clear separation of assets, data, types, and UI components was prioritized from the start.

- While some JS logic wasn't fully completed, the application is visually close to the original and responsive across breakpoints.

## Responsive Design

- Navbar collapses into a hamburger menu on smaller screens
- Product grid adjusts from 5 columns (desktop) to 1 column (mobile)
- Layout adapts with media queries (no `clamp()` used in final version)
- Grid and card spacing adjust for usability on touch devices

## How to run locally

1. Clone the repository  
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
au run --watch
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## Project structure

```
src/
├── assets/               # Images, icons, and other static media
├── components/           # Reusable UI components
│   ├── Footer.html
│   ├── Footer.ts
│   ├── Navbar.html
│   ├── Navbar.ts
│   ├── ProductCard.html
│   └── ProductCard.ts
├── data/                 # Static product data
│   └── products.ts
├── pages/                # Main views
│   ├── Home.html
│   └── Home.ts
├── resources/            # Aurelia resource registry
│   └── index.ts
├── services/             # Application logic (e.g., cart)
│   └── cart-service.ts
├── styles/               # Global stylesheet
│   └── main.css
├── types/                # Type declarations and interfaces
│   ├── global.d.ts
│   ├── images.d.ts
│   └── Product.ts
├── app.html              # Root application view
├── cart-counter.ts       # Simple cart state utility
└── main.ts               # App entry point
```

## TypeScript model

Defined in `src/types/Product.ts`:

```ts
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
}
```

Reflections

This was my first time using TypeScript and Aurelia in a real project. I enjoyed working with both — Aurelia’s syntax feels clean and logical, and TypeScript gave me more confidence when structuring components and handling data.

Even though I couldn’t finish every interaction I planned, I focused on polish, layout, and keeping the code maintainable and clear. With more time, I’m sure I could improve the logic, add missing functionality, and optimize performance.

I'm truly grateful for the opportunity to take part in this challenge. I learned a lot throughout the process and would love the chance to apply that experience—and everything I continue to learn—on your team. Thanks again for the opportunity and your time!
