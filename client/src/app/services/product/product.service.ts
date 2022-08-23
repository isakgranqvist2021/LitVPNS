import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { serverAddr } from '../services.constants';
import { HttpResponse } from '../services.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<HttpResponse<Product[]>>(
      `${serverAddr}/product?includeImages=1`,
    );
  }

  getProductById(id: string) {
    return this.httpClient.get<HttpResponse<Product>>(
      `${serverAddr}/product/${id}`,
    );
  }
} 
 