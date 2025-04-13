// Global cart counter for the mock (simple demo purpose)
export let cartTotal = 0;

// Adds quantity to global cart and updates the UI
export function updateCartTotal(amount: number) {
  cartTotal += amount;

  // Update only the number inside the cart-count span
  const countElement = document.querySelector('#cart-count');
  if (countElement) {
    countElement.textContent = `(${cartTotal})`;
  }
}
