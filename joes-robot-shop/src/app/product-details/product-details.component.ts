import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct): string {
    return `/assets/images/robot-parts/${product.imageName}`;
  }
  getDiscountClasses(product: IProduct): string {
    return product.discount > 0 ? 'strick-through' : '';
  }

  buyButtonClicked() {
    this.buy.emit();
  }
}
