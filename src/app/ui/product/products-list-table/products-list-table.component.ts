import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/products/models/product.model';
import { ProductService } from '../../../core/products/services/product.service';
import { DeleteProductUseCase } from '../../../core/products/use-cases/delete-product.use_case';
import { Router } from '@angular/router';
import { GetProductsUseCase } from '../../../core/products/use-cases/get-allProducts.use-case';

@Component({
  selector: 'app-products-list-table',
  templateUrl: './products-list-table.component.html',
  styleUrl: './products-list-table.component.css'
})
export class ProductsListTableComponent implements OnInit{
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private getAllUseCase: GetProductsUseCase, private deleteProductUseCase: DeleteProductUseCase, private router: Router){}

  ngOnInit(): void {
      this.obtainProducts();
  }

  obtainProducts(): void {
    this.getAllUseCase.run().subscribe(
      (response) => {
        console.log("Productos recibidos:", response);
        this.products = response;
      },
      (err) => {
        console.error("Error al obtener productos:", err);
      }
    );
  }
}
