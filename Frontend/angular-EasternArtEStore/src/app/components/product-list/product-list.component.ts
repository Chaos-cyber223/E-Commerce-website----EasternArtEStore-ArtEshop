import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  constructor(private productService: ProductService){}
  ngOnInit(): void{
    this.listProducts();
  }
  listProducts(){
    this.productService.getProductList().subscribe(
      (      data: Product[]) => {
        this.products = data;
      },
      (      error: any) => {
        console.error('Error occurred while fetching products:', error);
      }
    );
  }
}
