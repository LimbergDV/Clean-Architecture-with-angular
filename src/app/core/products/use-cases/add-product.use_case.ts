import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable ({
  providedIn: 'root'
})

export class AddProductUseCase {
  constructor(private productService: ProductService) {}

  run(product: Product): Observable<void> {
    return this.productService.addProduct(product)
  }
}
