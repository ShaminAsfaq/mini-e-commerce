import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service'; // Adjust path if necessary

@Injectable({
  providedIn: 'root'
})
export class DashboardAccessGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.user$.pipe(
      map(user => {
        // Allow access if no user is logged in or user is a customer
        if (!user || user.role === 'customer') {
          return true; // Allow access to dashboard
        } else if (user.role === 'admin') {
          // If user is admin, redirect to admin dashboard
          return this.router.createUrlTree(['/admin']);
        } else {
           // Handle any other unexpected roles, maybe redirect to home or login
           return this.router.createUrlTree(['/']); // Redirect to home
        }
      })
    );
  }
} 