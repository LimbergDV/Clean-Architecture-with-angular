import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable ({
  providedIn: 'root'
})

export class GetProductsUseCase {
  constructor(private productService: ProductService) {}

  run(): Observable<Product[]> {
    return this.productService.getProducts()
  }
}
