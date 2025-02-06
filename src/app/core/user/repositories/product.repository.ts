// core/user/repositories/user.repository.ts
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export abstract class ProductRepository {
    abstract getProducts(): Observable<Product[]>;
    abstract addProduct(product: Product): Observable<void>;
    abstract deleteProduct(id: number): Observable<void>;
    abstract updateProduct(id: number, product: Product): Observable<void>;
    abstract getProductById(id: number): Observable<Product>
}
