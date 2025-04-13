import { bindable } from 'aurelia-framework';
import type { Product } from '../types/Product';

export class ProductCard {
  @bindable()
  product!: Product;

  @bindable()
  addToCart!: () => void;

  @bindable()
  increment!: () => void;

  @bindable()
  decrement!: () => void;
}
