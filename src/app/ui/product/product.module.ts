import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListTableComponent } from './products-list-table/products-list-table.component';



@NgModule({
  declarations: [ProductsListTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListTableComponent
  ]
})
export class ProductModule { }
