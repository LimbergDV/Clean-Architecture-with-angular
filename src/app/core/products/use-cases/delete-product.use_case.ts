import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable ({
  providedIn: 'root'
})

export class DeleteProductUseCase {
  constructor(private productService: ProductService) {}

  run(id: number): Observable<void> {
    return this.productService.deleteProduct(id)
  }
}
