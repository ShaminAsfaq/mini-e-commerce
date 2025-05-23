import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    this.errorMessage = null; // Clear previous errors
    try {
      await this.authService.login(this.email, this.password);
      // Redirect to dashboard or another page on successful login
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      if (error.code && error.code.startsWith('auth/')) {
        this.errorMessage = 'Invalid Credentials';
      } else {
        this.errorMessage = 'An error occurred during login.';
      }
      console.error('Login error:', error);
    }
  }
} 