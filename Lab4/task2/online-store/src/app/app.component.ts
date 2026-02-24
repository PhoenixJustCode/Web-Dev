import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { products, categories } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '✨ Premium Store';

  categories = signal<Category[]>(categories);
  allProducts = signal<Product[]>(products);
  selectedCategoryId = signal<number | null>(null);

  selectedCategoryName = computed(() => {
    const id = this.selectedCategoryId();
    if (id === null) return null;
    return this.categories().find((c) => c.id === id)?.name || null;
  });

  filteredProducts = computed(() => {
    const id = this.selectedCategoryId();
    if (id === null) return [];
    return this.allProducts().filter((p) => p.categoryId === id);
  });

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }

  onProductRemoved(productId: number) {
    this.allProducts.update((products) =>
      products.filter((p) => p.id !== productId),
    );
  }
}
