import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ProductRepository{
  private apiUrl = 'http://localhost:8080/products/'

  constructor(private http: HttpClient) {
    super();
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<{product: Product[]}>(this.apiUrl).pipe(
        map(response => {
          return response.product //extrae el array de productos
        })
    );
  }
}
