
# Chicks Gold – Front-End Challenge

This project was developed as part of a front-end technical challenge for a software engineering position. The goal was to replicate, as faithfully as possible, a product listing page from the Chicks Gold website using HTML, CSS, and JavaScript (no UI frameworks). The project also uses Aurelia as the front-end framework to match the company's tech stack.

## About the project

The application consists of a mock of a full product listing page, not just a responsive grid. It includes a styled navbar, product cards with full interactivity, and a footer with branding, links, and contact info. 

Cards display:
- Product image, title, and description
- Price and original price (struck-through)
- ON SALE bullet and IN STOCK badge
- Quantity counter with arrow buttons
- Add and Details buttons
- Functional cart service that tracks quantity and updates the top bar

The interface is responsive, clean, and based on the company’s real site design.

## Tech Stack

- Aurelia v3.0.4
- TypeScript
- Pure CSS (no frameworks)
- Webpack (via Aurelia CLI)

## Decisions and process

- I used Aurelia because it's the front-end framework used by the company. Although I hadn't worked with it before, I had previously installed and explored it briefly. I found its syntax intuitive and familiar, especially coming from Django's templating style.

- To replicate the original design, I extracted colors directly from the official site using the Color Picker extension.

- I used VisualBug, a tool I installed during the company's logic bootcamp (an earlier step in the selection process), to inspect spacing, background colors, and layout structure.

- The logo, title, and fonts were taken directly from the official Chicks Gold website to maintain brand consistency.

- For the product images, I explored several sources and ended up choosing assets from the Roblox marketplace. They offer a wide variety of high-quality visuals that suited the layout and theme of the cards. I captured the images with minimal margin and processed them in Photoroom to convert them to PNG and remove the backgrounds for visual consistency.

- I noticed the design says "showing 20 products of 125", but only 15 are shown on screen in a 5x3 grid. So I updated the mock to display 15 products and changed the text to "showing 15 products of 125" to reflect what the user actually sees.

- The JSON data with the products is kept in a separate TypeScript file (`src/data/products.ts`) and uses `require()` to load images correctly with Webpack. The products follow a consistent interface defined in `src/types/Product.ts`.

- The layout starts from the desktop version provided in the mock and adapts progressively for smaller screens using media queries. The 5-column grid was preserved on large screens, with transitions to 3, 2, and 1 column layouts as the screen size decreases.

- A responsive hamburger menu was implemented to improve navigation on mobile devices while keeping the same menu structure and design. The menu is hidden by default on small screens and toggled via a button.

- A set of CSS root variables was introduced to manage the color theme consistently across the application. These variables centralize background, text, and button colors, improving maintainability and visual coherence.

- Product images were carefully selected from the Roblox marketplace, then processed with Photoroom to remove backgrounds and enhance integration with the UI. This technique ensured they visually matched the original cards.

- CSS comments were added where useful to clarify layout logic, visual decisions, and behavior — while avoiding redundancy.

## Responsive Design Approach

As the mockup provided was desktop-only, I implemented a mobile-first strategy using media queries and flexible units. Key responsive decisions include:

- Navigation collapses into a hamburger menu on screens smaller than 600px, maintaining the same structure and styles.
- Product grid adapts progressively: 5 columns on large screens, 3 on medium (≤1199px), 2 on tablets (≤899px), and 1 on small devices (≤599px).
- Font sizes scale fluidly using `clamp()`, allowing text to adapt across breakpoints without abrupt jumps.
- Touch-friendly spacing and layout adjustments enhance usability on mobile.

This approach ensures the UI remains clean, accessible, and visually consistent across all devices.

## How to run locally

1. Clone the repository  
2. Install dependencies:

```
npm install
```

3. Run the development server:

```
au run --watch
```

Then open http://localhost:8080 in your browser.


## Project structure and organization

This project follows a modular file structure that separates views, data, and types for maintainability and clarity.

### Folder structure

```
src/
├── assets/               # Images used in the app
│   └── [product-images].png
├── data/                 # Static mock data (product list)
│   └── products.ts
├── pages/                # Main views and components
│   ├── Home.ts
│   └── Home.html
├── services/             # Shared app logic (e.g., cart)
│   └── cart-service.ts
├── types/                # Shared TypeScript interfaces
│   └── Product.ts
├── components/           # Reusable UI components
│   └── ProductCard.ts / ProductCard.html
```

### TypeScript interface

To maintain type safety and clarity, a `Product` interface was created in `src/types/Product.ts`. It defines the structure used across the app for product data.

```
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
}
```

This interface is used in `products.ts` and could later be reused in cart management, filtering, or product detail pages.

## Learnings and reflections

This challenge gave me the opportunity to explore a new front-end framework while focusing on UI precision and responsive design. I learned the basics of Aurelia and appreciated its template syntax, reactivity, and overall developer experience. The process also reinforced the importance of small UX decisions, visual consistency, and brand alignment.
