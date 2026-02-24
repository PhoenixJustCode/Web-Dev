import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  productRemoved = output<number>();

  onRemoveProduct(productId: number) {
    this.productRemoved.emit(productId);
  }
}
