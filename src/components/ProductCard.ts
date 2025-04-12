export class ProductCard {
  product: any;
  quantity = 1;

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    alert(`Added ${this.quantity} "${this.product.name}" to cart`);
  }
}
