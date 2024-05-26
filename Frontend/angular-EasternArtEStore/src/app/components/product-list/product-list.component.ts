import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  currentCategoryId: number = 1;
  
  constructor(private productService: ProductService,
    private route: ActivatedRoute){}
  
    ngOnInit(): void{
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
  }

  listProducts(){

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id')

    if (hasCategoryId){
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else{
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      (      data: Product[]) => {
        this.products = data;
        // console.log("products:",this.products);
      },
      (      error: any) => {
        console.error('Error occurred while fetching products:', error);
      }
    );
  }
}
