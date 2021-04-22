import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../workarea/admin/users/User';
import { Product } from '../workarea/admin/product/product';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  constructor(private httpClient:HttpClient) { }

  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }
  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  getProduct() {
    return this.httpClient.get<Product[]>('http://localhost:8080/products/get');
  }


  addProduct(newBook: Product) {
    return this.httpClient.post<Product>('http://localhost:8080/products/add', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Product>('http://localhost:8080/books/' + id);
  }
}
