import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service'; // Adjust path if necessary

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('AuthGuard: canActivate entered for route:', state.url);

    return this.authService.user$.pipe(
      map(user => {
        console.log('AuthGuard: user$ emitted in canActivate, user is:', user ? user.uid : null);
        // Allow access if user is logged in
        if (user) {
          console.log('AuthGuard: User logged in, allowing access.');
          return true; // User is logged in, allow access
        } else {
          // User is not logged in, redirect to login page
          console.log('AuthGuard: User not logged in, redirecting to login.');
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
} 