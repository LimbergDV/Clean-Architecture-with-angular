import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/products/models/product.model';
import { ProductService } from '../../../core/products/services/product.service';
import { DeleteProductUseCase } from '../../../core/products/use-cases/delete-product.use_case';
import { Router } from '@angular/router';
import { GetProductsUseCase } from '../../../core/products/use-cases/get-allProducts.use-case';
import { UpdateProductUseCase } from '../../../core/products/use-cases/update-product.use_case';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-products-list-table',
  templateUrl: './products-list-table.component.html',
  styleUrl: './products-list-table.component.css'
})
export class ProductsListTableComponent implements OnInit{
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private getAllUseCase: GetProductsUseCase, private deleteProductUseCase: DeleteProductUseCase, private router: Router, private updateProductUseCase: UpdateProductUseCase){}

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

  selectProduct(product: Product) {
    console.log("Se hizo click en el botón");
    this.selectedProduct = {...product};
    console.log("Cliente seleccionado", this.selectedProduct);
  }

  updateProduct() {
    if (this.selectedProduct && this.selectedProduct.id) { // Asegurarse de que el ID existe
      this.selectedProduct.price = Number(this.selectedProduct.price);
      this.updateProductUseCase.run(this.selectedProduct.id, this.selectedProduct).subscribe(() => {
        this.obtainProducts();
        this.selectedProduct = null;
      });
    }
  }

  deleteProduct(id: number){
    if(id !== undefined ){
      Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5DFF34',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',color:'black',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProductUseCase.run(id).subscribe(
            (response) => {
              Swal.fire(
                'Eliminado!',
                'El cliente ha sido eliminado.',
                'success'
              );
            },
            (error) => {
              Swal.fire(
                'Error!',
                'Hubo un problema al eliminar el cliente.',
                'error'
              );
            }
          );
        }
      });
      }else{
        console.error('ID del cliente es indefinido')
      }
  }


}
