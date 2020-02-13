import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree,
    ActivatedRoute
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
    constructor(private authService: AuthServiceService, private router: Router,private route: ActivatedRoute ){ }
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
                if (!user) {
                    return  this.router.createUrlTree(['/']);
                } else if(user.role === "admin"){
                    return true;
                }else if(user.role === "user"){
                    return  this.router.createUrlTree(['/user'])
                }
            })
        );
    }
}
