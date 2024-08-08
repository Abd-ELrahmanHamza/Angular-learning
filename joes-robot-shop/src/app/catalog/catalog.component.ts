import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: IProduct[] = [];
  filter: string = '';
  cart: IProduct[] = [];
  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService
  ) {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  getFilteredProducts(): IProduct[] {
    return this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    console.log('added to cart', this.cart);
  }
}
