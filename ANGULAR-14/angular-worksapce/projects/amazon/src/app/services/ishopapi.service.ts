import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserContract } from '../contracts/UserContract';

@Injectable({
  providedIn: 'root'
})
export class IshopapiService {

  constructor(private http: HttpClient) { }

  public getUsers():Observable<UserContract[]>{
    return this.http.get<UserContract[]>('http://localhost:9092/user/all');
  }

  public registerUser(data:UserContract):Observable<UserContract>{
    return this.http.post<UserContract>('http://localhost:9092/user/',data);
  }

  public login(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:9092/user/login',data);
  }
}
