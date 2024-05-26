import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent implements OnInit{

  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService){}


  ngOnInit(): void {
    this.listproductCategories();
  }
  listproductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        // console.log('Product Category=' + JSON.stringify(data));
        this.productCategories = data;
      }
    )
  }

}
