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
export class UserAuthGuard implements CanActivate {
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
                    return  this.router.createUrlTree(['/']);//Hàm canActivate còn có thể trả về 1 UrlTree, đây là 1 tính năng mới để đáp ứng cho chính trường hợp này trong authentication
                } else if(user.role === "user" || user.role ==="admin"){
                    return true;
                }
                return false
            })
        );
    }
}
