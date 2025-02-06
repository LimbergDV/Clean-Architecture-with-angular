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

  addProduct(product: Product): Observable<void> {
    return this.http.post<void>(this.apiUrl, product);
  }

  deleteProduct(id: number): Observable<void>{
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<void>(url);
  }

  updateProduct(id: number, product: Product): Observable<void>{
    const url = `${this.apiUrl}${id}`;
    return this.http.put<void>(url, product);
  }

  getProductById(id: number): Observable<Product>{
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Product>(url);
  }
}
