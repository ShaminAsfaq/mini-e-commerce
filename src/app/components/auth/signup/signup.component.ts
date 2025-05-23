import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    this.errorMessage = null; // Clear previous errors
    try {
      await this.authService.signup(this.email, this.password);
      // Redirect to dashboard or login page on successful signup
      this.router.navigate(['/dashboard']); // Or '/dashboard'
    } catch (error: any) {
      this.errorMessage = error.message || 'An error occurred during signup.';
      console.error('Signup error:', error);
    }
  }
} 