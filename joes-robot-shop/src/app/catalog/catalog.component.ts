import { Component } from '@angular/core';
import { IProduct } from './product.mode';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 1,
      description: 'A great product',
      name: 'Product 1',
      imageName: 'head-big-eye.png',
      category: 'Category 1',
      price: 100,
      discount: 10,
    };
  }

  getImageUrl(product: IProduct): string {
    return `/assets/images/robot-parts/${this.product.imageName}`;
  }
}
