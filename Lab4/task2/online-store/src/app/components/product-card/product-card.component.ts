import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>();

  currentImageIndex = signal(0);

  shareToWhatsApp() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }

  shareToTelegram() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  onLike() {
    this.product().likes++;
  }

  onRemove() {
    this.remove.emit(this.product().id);
  }

  nextImage() {
    const images = this.product().images;
    if (images && images.length > 0) {
      this.currentImageIndex.update((idx) => (idx + 1) % images.length);
    }
  }

  prevImage() {
    const images = this.product().images;
    if (images && images.length > 0) {
      this.currentImageIndex.update(
        (idx) => (idx - 1 + images.length) % images.length,
      );
    }
  }

  selectImage(index: number) {
    this.currentImageIndex.set(index);
  }
}
