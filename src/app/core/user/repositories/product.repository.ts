// core/user/repositories/user.repository.ts
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export abstract class ProductRepository {
    abstract getProducts(): Observable<Product[]>;




//
//   abstract addUser(user: User): Observable<void>;
//   abstract deleteUser(id: number): Observable<void>;
//   abstract updateUser(id:number, user: User):Observable<void>;
//   abstract getUserById(id : number): Observable<User>;
}
