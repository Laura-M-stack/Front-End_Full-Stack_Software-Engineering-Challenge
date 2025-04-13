import { inject } from 'aurelia-framework';
import { CartService } from '../services/cart-service';

@inject(CartService)
export class Navbar {
  menuOpen = false;

  constructor(private cartService: CartService) {}

  // Toggles the mobile navigation menu open/closed
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Returns the current number of items in the cart
  // This value is reactive and updates automatically from CartService
  get cartCount() {
    return this.cartService.totalItems;
  }
}
