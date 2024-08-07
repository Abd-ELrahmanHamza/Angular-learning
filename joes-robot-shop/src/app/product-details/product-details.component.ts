import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.mode';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  getImageUrl(product: IProduct): string {
    return `/assets/images/robot-parts/${product.imageName}`;
  }
  getDiscountClasses(product: IProduct): string {
    return product.discount > 0 ? 'strick-through' : '';
  }
}
