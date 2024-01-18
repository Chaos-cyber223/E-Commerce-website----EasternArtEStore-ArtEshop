import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }
  getProductList(theCategoryId: number): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
    console.log("searchUrl:", searchUrl);
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    )
  }
}

interface GetResponse{
  _embedded:{
    products: Product[];
  }
}
