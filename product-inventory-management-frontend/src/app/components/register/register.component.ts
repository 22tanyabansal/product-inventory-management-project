import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    location: '',
    mobileNumber: ''
  };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register(form: NgForm): void {
    if (form.valid) {
      this.authService.register(this.user).subscribe({
        next: (response: any) => {
          if (response) {
            alert('Registration successful!');
            this.router.navigate(['/auth/sign-in']);
          } else {
            this.errorMessage = 'Registration failed. Please try again.';
          }
        },
        error: (error: any) => {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please fill all fields correctly.';
    }
  }  
}
