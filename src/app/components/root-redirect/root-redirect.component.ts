import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service'; // Adjust path
import { take } from 'rxjs/operators'; // Import take

@Component({
  selector: 'app-root-redirect',
  standalone: true,
  imports: [],
  templateUrl: './root-redirect.component.html',
  styleUrl: './root-redirect.component.css'
})
export class RootRedirectComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to user$ and take the first emission
    this.authSubscription = this.authService.user$.pipe(take(1)).subscribe(user => {
      if (!user || user.role === 'customer') {
        // If not logged in or customer, go to dashboard
        console.log('RootRedirect: User not logged in or customer, navigating to /dashboard');
        this.router.navigate(['/dashboard']);
      } else if (user.role === 'admin') {
        // If admin, go to admin dashboard
        console.log('RootRedirect: User is admin, navigating to /admin');
        this.router.navigate(['/admin']);
      } else {
        // Handle unexpected roles, maybe default to dashboard or a landing page
        console.log('RootRedirect: User with unexpected role, navigating to /dashboard');
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
} 