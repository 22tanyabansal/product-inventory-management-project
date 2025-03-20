import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    this.userUrl = 'http://localhost:8080/users';
   }
}
