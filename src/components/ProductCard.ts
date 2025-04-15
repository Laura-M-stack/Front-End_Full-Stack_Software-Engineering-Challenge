import { bindable } from 'aurelia-framework';
import type { Product } from '../types/Product';

export class ProductCard {
  // Product object passed from the parent component
  // Enables the card to render individual product data dynamically
  @bindable()
  product!: Product;

  // Handler functions delegated from the parent context
  // These allow the card to trigger external actions like cart updates
  @bindable() addToCart!: (product: Product) => void;

  @bindable()increment!: (product: Product) => void;
  
  @bindable() decrement!: (product: Product) => void;

}
