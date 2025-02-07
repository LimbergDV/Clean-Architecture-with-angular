import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListTableComponent } from './products-list-table/products-list-table.component';
import { CreateProductFormComponent } from './create-product-form/create-product-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductsListTableComponent, CreateProductFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductsListTableComponent,
    CreateProductFormComponent
  ]
})
export class ProductModule { }
