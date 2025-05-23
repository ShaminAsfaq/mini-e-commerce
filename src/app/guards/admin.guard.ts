import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service'; // Adjust path if necessary

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.user$.pipe(
      map(user => {
        // Check if user is logged in and has the 'admin' role
        if (user && user.role === 'admin') {
          return true; // User is admin, allow access
        } else {
          // User is not admin, redirect to home or login page
          return this.router.createUrlTree(['/login']); // Redirect to login
          // Or redirect to home: return this.router.createUrlTree(['/']);
        }
      })
    );
  }
} 