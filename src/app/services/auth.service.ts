import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private router: Router
    ) {}

    setLoginToken(token: string): void {
        localStorage.setItem('authToken', token)
    }

    getLoginToken(): string {
        return localStorage.getItem('authToken');
    }

    isLoggedIn(): boolean {
        return this.getLoginToken() !== null;
    }

    login(): void {
        this.setLoginToken(uuidv4());
        this.router.navigate(['/home']);
    }

    logout(): void {
        localStorage.removeItem('authToken');
        this.router.navigate(['/']);
    }
}
