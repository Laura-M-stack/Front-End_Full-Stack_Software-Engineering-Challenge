// Interface used to define the shape of a product object throughout the app.
// Helps ensure type safety and consistency when accessing product-related data.
export interface Product {
  id: number;                // Unique identifier
  name: string;              // Product display name
  price: number;             // Discounted price shown to the user
  originalPrice: number;     // Original price (shown with strikethrough if discounted)
  description: string;       // Short description shown in product card
  image: string;             // Path to product image, resolved via Webpack
}
