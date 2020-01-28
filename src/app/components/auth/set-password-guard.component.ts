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
import { AdminService } from './../addmin-page/admin.service';

@Injectable({ providedIn: 'root' })
export class SetPasswordGuard implements CanActivate {
    constructor(private adminService: AdminService, private authService: AuthServiceService, private router: Router, private route: ActivatedRoute) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ):
        | boolean
        | UrlTree
        | Promise<boolean | UrlTree>
        | Observable<boolean | UrlTree> {
        return this.adminService.setPasswordUser.pipe(
            take(1),// lấy latest user
            map(user => {
                if(user){
                    return true;
                }
                return   this.router.createUrlTree(['/admin']);
            })
        );
    }
}
