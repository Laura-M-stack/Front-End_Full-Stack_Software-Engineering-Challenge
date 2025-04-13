import { products as productList } from '../data/products';
import { Product } from '../types/Product';

// Extended type to include quantity management per product
type ProductWithQuantity = Product & { quantity: number };

export class Home {
  products: ProductWithQuantity[] = [];
  cartCount = 0;

  constructor() {
    // Initialize products with a quantity field set to 0
    // This makes each product ready for quantity selection and cart addition
    this.products = productList.map(p => ({ ...p, quantity: 0 }));
  }

  // Increments the quantity of a specific product
  increment(product: ProductWithQuantity) {
    product.quantity++;
  }

  // Decrements the quantity only if above 0
  decrement(product: ProductWithQuantity) {
    if (product.quantity > 0) product.quantity--;
  }

  // Adds product quantity to cartCount and resets quantity
  // Only proceeds if quantity > 0 to avoid adding empty items
  addToCart(product: ProductWithQuantity) {
    if (product.quantity > 0) {
      this.cartCount += product.quantity;
      product.quantity = 0;
    }
  }
}
