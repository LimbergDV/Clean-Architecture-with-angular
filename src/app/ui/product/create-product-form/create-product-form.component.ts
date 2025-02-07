import { Component } from '@angular/core';
import { Product } from '../../../core/products/models/product.model';
import { AddProductUseCase } from '../../../core/products/use-cases/add-product.use_case';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { showSuccessMessage } from '../../helpers/modals/modals';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css'
})
export class CreateProductFormComponent {
    products: Product[] = [];

    product: Product = {
      id: 0,
      name: '',
      price: 0
    }

    constructor(private createProduct: AddProductUseCase, private router: Router) {}

    onSubmit(): void {
      if(this.product.name && this.product.price) {
        this.createProduct.run(this.product).subscribe(
          () => {
            showSuccessMessage('¡Registro exitoso!', 'El producto ha sido registrado correctamente.')
            this.resetForm()
          },
          (error) => {
            console.log('Error al registrar el producto:', error);
          }
        )
      }
    }
    private resetForm(): void {
      this.product = {id: 0, name: '', price: 0 };
    }
}
