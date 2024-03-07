import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http: HttpClient) { }
  getCategories():Observable<string[]>{
   return this.http.get<string[]>(`https://fakestoreapi.com/products/categories`)
  }
  getProducts():Observable<any[]>{
    return this.http.get<any[]>(`http://fakestoreapi.com/products`);
  }
}
