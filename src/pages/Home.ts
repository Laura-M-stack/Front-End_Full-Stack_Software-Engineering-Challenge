import { inject } from 'aurelia-framework';
import { products as productList } from '../data/products';
import { Product } from '../types/Product';
import { CartService } from '../services/cart-service';

type ProductWithQuantity = Product & { quantity: number };

@inject(CartService)
export class Home {
  products: ProductWithQuantity[] = [];

  constructor(private cartService: CartService) {
    this.products = productList.map(p => ({ ...p, quantity: 0 }));
  }

  increment(product: ProductWithQuantity) {
    product.quantity++;
  }

  decrement(product: ProductWithQuantity) {
    if (product.quantity > 0) product.quantity--;
  }

  addToCart(product: ProductWithQuantity) {
    if (product.quantity > 0) {
      this.cartService.addToCart(product.quantity); // ✅ we add it to the cart
      product.quantity = 0;
    }
  }
}
