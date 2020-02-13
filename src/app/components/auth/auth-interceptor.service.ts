import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthServiceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        console.log(user)
        if (!user) { //Khi mới vừa truy cập vào WEB, chưa đăng nhập user, lúc này User = null nếu ko có if này thì bị lỗi 
          return next.handle(req);
        }
       
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
