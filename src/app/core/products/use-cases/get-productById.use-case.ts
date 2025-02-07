import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable ({
  providedIn: 'root'
})

export class GetProductsByIdUseCase {
  constructor(private productService: ProductService) {}

  run(id: number): Observable<Product> {
    return this.productService.getProductById(id)
  }
}
