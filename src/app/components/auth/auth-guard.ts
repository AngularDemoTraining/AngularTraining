import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { map, tap, take } from 'rxjs/operators';
  import { AuthServiceService } from './auth-service.service';

  @Injectable({ providedIn: 'root' })
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthServiceService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Promise<boolean | UrlTree>
      | Observable<boolean | UrlTree> {
      return this.authService.user.pipe(
        take(1),// lấy latest user
        map(user => {
          const isAuth = !!user;
          console.log(isAuth)
          if (isAuth) {
            return true;
          }
          return this.router.createUrlTree(['']);//Hàm canActivate còn có thể trả về 1 UrlTree, đây là 1 tính năng mới để đáp ứng cho chính trường hợp này trong authentication
        })
      );
    }
  }
  