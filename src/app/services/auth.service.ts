import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) { }

    signUpUser(email: string, password: string) {

    }

    signInUser(email: string, password: string) {
        this.router.navigate(['/']);
    }

    getToken() {
        this.token = "abc123";
        return this.token;
    }

    isAuthenticated() {
        return true;
    }

    logout() {
        this.token = null;
        this.router.navigate(['/']);
    }
}