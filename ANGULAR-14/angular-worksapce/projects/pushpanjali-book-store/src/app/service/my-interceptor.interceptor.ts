// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         const token = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYWphbEBnbWFpbC5jb20iLCJpYXQiOjE3MTM5NDg0MzAsImV4cCI6MTcxMzk1MDIzMH0.sBHAv6Fr4QrE3SH3iS3fpZidoPi21CHbTeDJ79Kdonk'); // Retrieve the token from storage
         //const token = localStorage.getItem('token');
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
