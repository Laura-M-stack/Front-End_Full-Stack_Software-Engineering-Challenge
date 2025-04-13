// src/services/cart-service.ts

export class CartService {
  // Holds the total number of items in the cart
  // This value is shared across components via dependency injection
  totalItems = 0;

  // Adds the specified quantity to the cart total
  // Typically triggered by ProductCard's ADD button
  addToCart(quantity: number) {
    this.totalItems += quantity;
  }

  // Getter method for components that need to display the cart count
  getCartCount(): number {
    return this.totalItems;
  }
}

// Exporting a singleton instance for shared state management
export const cartService = new CartService();
